import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Loader2, Plus, FileText, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { apiRequest } from '@/lib/queryClient';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import type { Blog } from '@shared/schema';

const galleryImageSchema = z.object({
  url: z.string().url('Please enter a valid image URL').optional().or(z.literal('')),
  alt: z.string().min(1, 'Alt text is required'),
  caption: z.string().min(1, 'Caption is required')
});

const cityFormSchema = z.object({
  city: z.string().min(1, 'City name is required'),
  country: z.string().min(1, 'Country is required'),
  continent: z.string().optional(),
  heroImageUrl: z.string().url('Please enter a valid hero image URL').optional().or(z.literal('')),
  galleryImages: z.array(galleryImageSchema).optional(),
  msv: z.string().optional(),
  kd: z.string().optional(),
  generationMode: z.enum(['ai', 'manual']).default('ai'),
  manualJson: z.string().optional()
}).refine((data) => {
  if (data.generationMode === 'manual' && !data.manualJson) {
    return false;
  }
  return true;
}, {
  message: 'Manual JSON content is required when using manual mode',
  path: ['manualJson']
});

const blogFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  category: z.string().min(1, 'Category is required'),
  author: z.string().optional(),
  imageUrl: z.string().url('Please enter a valid image URL').optional().or(z.literal('')),
  generationMode: z.enum(['ai', 'manual']).default('ai'),
  manualContent: z.object({
    excerpt: z.string().min(1, 'Excerpt is required'),
    content: z.string().min(1, 'Content is required')
  }).optional()
}).refine((data) => {
  if (data.generationMode === 'manual' && (!data.manualContent?.excerpt || !data.manualContent?.content)) {
    return false;
  }
  return true;
}, {
  message: 'Excerpt and content are required when using manual mode',
  path: ['manualContent']
});

type CityFormData = z.infer<typeof cityFormSchema>;
type BlogFormData = z.infer<typeof blogFormSchema>;

export default function AdminPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // City form
  const cityForm = useForm<CityFormData>({
    resolver: zodResolver(cityFormSchema),
    defaultValues: {
      city: '',
      country: '',
      continent: '',
      heroImageUrl: '',
      galleryImages: [
        { url: '', alt: '', caption: '' },
        { url: '', alt: '', caption: '' },
        { url: '', alt: '', caption: '' },
        { url: '', alt: '', caption: '' },
        { url: '', alt: '', caption: '' },
        { url: '', alt: '', caption: '' }
      ],
      msv: '',
      kd: '',
      generationMode: 'ai',
      manualJson: ''
    }
  });



  // Blog form
  const blogForm = useForm<BlogFormData>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: '',
      category: '',
      author: '',
      imageUrl: '',
      generationMode: 'ai',
      manualContent: {
        excerpt: '',
        content: ''
      }
    }
  });

  // Remove blog fetching since blogs are now file-based

  // City generation mutation
  const generateCityPageMutation = useMutation({
    mutationFn: async (data: CityFormData) => {
      return await apiRequest('POST', '/api/admin/generate-city-page', data);
    },
    onSuccess: (data) => {
      toast({
        title: "City page generated successfully!",
        description: `The ${data.cityName}.tsx file has been created/updated.`
      });
      cityForm.reset();
    },
    onError: (error: any) => {
      let errorMessage = "Failed to generate city page";
      if (error.message?.includes("quota") || error.message?.includes("429")) {
        errorMessage = "API quota exceeded. Please wait a few minutes and try again.";
      }
      toast({
        title: "Generation failed",
        description: errorMessage,
        variant: "destructive"
      });
    }
  });

  // Blog generation mutation
  const generateBlogMutation = useMutation({
    mutationFn: async (data: BlogFormData) => {
      return await apiRequest('POST', '/api/admin/generate-blog', data);
    },
    onSuccess: (data) => {
      toast({
        title: "Blog generated successfully!",
        description: `Blog "${data.blogId}" has been created as a file.`
      });
      blogForm.reset();
    },
    onError: (error: any) => {
      let errorMessage = "Failed to generate blog";
      if (error.message?.includes("quota") || error.message?.includes("429")) {
        errorMessage = "API quota exceeded. Please wait a few minutes and try again.";
      }
      toast({
        title: "Generation failed",
        description: errorMessage,
        variant: "destructive"
      });
    }
  });

  const onCitySubmit = async (data: CityFormData) => {
    await generateCityPageMutation.mutateAsync(data);
  };

  const onBlogSubmit = async (data: BlogFormData) => {
    await generateBlogMutation.mutateAsync(data);
  };

  const addGalleryImage = () => {
    const currentImages = cityForm.getValues('galleryImages');
    cityForm.setValue('galleryImages', [...(currentImages || []), { url: '', alt: '', caption: '' }]);
  };

  const removeGalleryImage = (index: number) => {
    const currentImages = cityForm.getValues('galleryImages');
    if (currentImages && currentImages.length > 1) {
      cityForm.setValue('galleryImages', currentImages.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your travel website content</p>
        </div>

        <Tabs defaultValue="cities" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="cities" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              City Pages
            </TabsTrigger>
            <TabsTrigger value="blogs" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Blog Posts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cities">
            <Card>
              <CardHeader>
                <CardTitle>Generate City Page</CardTitle>
                <CardDescription>
                  Create SEO-optimized city pages with AI-powered content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...cityForm}>
                  <form onSubmit={cityForm.handleSubmit(onCitySubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={cityForm.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Austin" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={cityForm.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country *</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., USA" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={cityForm.control}
                      name="continent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Continent</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., North America" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={cityForm.control}
                      name="heroImageUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hero Image URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={generateCityPageMutation.isPending}
                      className="w-full"
                    >
                      {generateCityPageMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        'Generate City Page'
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blogs">
            <div className="space-y-6">
              {/* Blog Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Generate Blog Post</CardTitle>
                  <CardDescription>
                    Create travel blog posts with AI generation or manual content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...blogForm}>
                    <form onSubmit={blogForm.handleSubmit(onBlogSubmit)} className="space-y-6">
                      <FormField
                        control={blogForm.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title *</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Hidden Gems of Southeast Asia" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={blogForm.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category *</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Travel Tips" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={blogForm.control}
                          name="author"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Author</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., TravelWanders Team" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={blogForm.control}
                        name="imageUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Image URL</FormLabel>
                            <FormControl>
                              <Input placeholder="https://..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={blogForm.control}
                        name="generationMode"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">Generation Mode</FormLabel>
                              <div className="text-sm text-gray-500">
                                Use AI to generate content or provide manual content
                              </div>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value === 'manual'}
                                onCheckedChange={(checked) => field.onChange(checked ? 'manual' : 'ai')}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      {blogForm.watch('generationMode') === 'manual' && (
                        <>
                          <FormField
                            control={blogForm.control}
                            name="manualContent.excerpt"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Excerpt *</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Brief description of the blog post..." 
                                    rows={3}
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={blogForm.control}
                            name="manualContent.content"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Content *</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Write your blog post content here..." 
                                    rows={10}
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </>
                      )}

                      <div className="flex gap-4">
                        <Button 
                          type="submit" 
                          disabled={generateBlogMutation.isPending}
                          className="w-full"
                        >
                          {generateBlogMutation.isPending ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Generating Blog...
                            </>
                          ) : (
                            <>
                              <Plus className="mr-2 h-4 w-4" />
                              Generate Blog Post
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle>File-Based Blog System</CardTitle>
                  <CardDescription>
                    Blogs are now generated as individual TSX files in the src/blogs/ directory
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>✅ Generated blogs are automatically added to the blogs index</p>
                    <p>✅ New blogs appear immediately on the website</p>
                    <p>✅ SEO optimized with proper metadata and structure</p>
                    <p>✅ Fully responsive design matching the website theme</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
      <Toaster />
    </div>
  );
}