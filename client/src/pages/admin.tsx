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
import { Loader2, FileText, BookOpen, Trash2, AlertTriangle } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { apiRequest } from '@/lib/queryClient';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { RichTextEditor } from '@/components/ui/rich-text-editor';
import type { Blog } from '@shared/schema';

const cityFormSchema = z.object({
  city: z.string().min(1, 'City name is required'),
  country: z.string().min(1, 'Country is required'),
  continent: z.string().min(1, 'Continent is required'),
  heroImageUrl: z.string().refine((val) => val === '' || z.string().url().safeParse(val).success, {
    message: 'Please enter a valid image URL or leave empty'
  })
});

const blogFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  category: z.string().min(1, 'Category is required'),
  author: z.string().optional(),
  imageUrl: z.string().refine((val) => val === '' || z.string().url().safeParse(val).success, {
    message: 'Please enter a valid image URL or leave empty'
  }),
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
      heroImageUrl: ''
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
      let errorDetails = "";
      
      if (error.message?.includes("quota") || error.message?.includes("429")) {
        errorMessage = "API quota exceeded. Please wait a few minutes and try again.";
      } else if (error.message?.includes("malformed JSON")) {
        errorMessage = "AI response formatting error. Please try again.";
        errorDetails = "The AI didn't return proper JSON format. This is usually temporary.";
      } else if (error.message?.includes("parsing")) {
        errorMessage = "JSON parsing error occurred";
        errorDetails = "The AI response couldn't be processed correctly. Try again.";
      } else if (error.responsePreview || error.details) {
        errorMessage = "AI response error";
        errorDetails = error.details || "Check console for detailed error information";
      }
      
      console.error('City generation error:', error);
      
      toast({
        title: "Generation failed",
        description: errorDetails || errorMessage,
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
      queryClient.invalidateQueries({ queryKey: ['/api/blogs'] });
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

  // Get all blogs for the listing
  const { data: blogs = [], isLoading: blogsLoading } = useQuery({
    queryKey: ['/api/blogs'],
    queryFn: async () => {
      try {
        const response = await apiRequest('GET', '/api/blogs');
        const data = await response.json();
        return Array.isArray(data) ? data : [];
      } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
      }
    },
  });

  // Delete blog mutation
  const deleteBlogMutation = useMutation({
    mutationFn: async (blogId: string) => {
      return await apiRequest('DELETE', `/api/admin/delete-blog/${blogId}`);
    },
    onSuccess: (response) => {
      toast({
        title: 'Blog Deleted!',
        description: response.message,
      });
      queryClient.invalidateQueries({ queryKey: ['/api/blogs'] });
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.message || 'Failed to delete blog',
        variant: 'destructive',
      });
    },
  });

  const onCitySubmit = async (data: CityFormData) => {
    await generateCityPageMutation.mutateAsync(data);
  };

  const onBlogSubmit = async (data: BlogFormData) => {
    await generateBlogMutation.mutateAsync(data);
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
                          <FormLabel>Continent *</FormLabel>
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
                            <Input placeholder="https://images.unsplash.com/photo-..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <h3 className="text-sm font-medium text-emerald-900 mb-2">🎯 Streamlined City Generation</h3>
                      <p className="text-sm text-emerald-700">
                        Just provide the city name, country, and continent. The AI will automatically generate comprehensive content with discovery features, SEO optimization, and professional visuals.
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={generateCityPageMutation.isPending}
                      className="w-full"
                    >
                      {generateCityPageMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating City Page with AI...
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
                                <FormLabel>Content * (Rich Text Editor)</FormLabel>
                                <FormControl>
                                  <RichTextEditor 
                                    value={field.value || ''}
                                    onChange={field.onChange}
                                    placeholder="Write your blog post content here. Use the toolbar above to format text with bold, italic, underline, different font sizes, headings, and more..."
                                    className="min-h-[300px]"
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
                            'Generate Blog Post'
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* Blog Listing */}
              <Card>
                <CardHeader>
                  <CardTitle>Manage Existing Blogs</CardTitle>
                  <CardDescription>
                    View and manage all blog posts. Deleting blogs will automatically update the sitemap.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {blogsLoading ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="h-8 w-8 animate-spin" />
                    </div>
                  ) : blogs.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <BookOpen className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                      <p>No blogs created yet. Generate your first blog post above!</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {blogs.map((blog: Blog) => (
                        <div key={blog.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-1">{blog.title}</h3>
                              <p className="text-sm text-gray-600 mb-2">{blog.excerpt}</p>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <Badge variant="outline">{blog.category}</Badge>
                                <span>{blog.readTime}</span>
                                <span>{blog.date}</span>
                                <span>by {blog.author}</span>
                                {blog.featured && <Badge variant="secondary">Featured</Badge>}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 ml-4">
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                    disabled={deleteBlogMutation.isPending}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle className="flex items-center gap-2">
                                      <AlertTriangle className="h-5 w-5 text-red-500" />
                                      Delete Blog Post
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Are you sure you want to delete "{blog.title}"? This action cannot be undone. The blog file will be permanently removed and the sitemap will be automatically updated.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() => deleteBlogMutation.mutate(blog.id)}
                                      className="bg-red-600 hover:bg-red-700"
                                    >
                                      Delete Blog
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
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
                    <p>✅ Sitemap automatically updates when blogs are deleted</p>
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