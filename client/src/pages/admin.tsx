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
import { Loader2, Plus, Trash2, Edit, Save, X, FileText, BookOpen } from 'lucide-react';
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
  excerpt: z.string().min(1, 'Excerpt is required'),
  content: z.string().min(1, 'Content is required'),
  category: z.string().min(1, 'Category is required'),
  imageUrl: z.string().url('Please enter a valid image URL').optional().or(z.literal('')),
  featured: z.boolean().default(false),
  readTime: z.string().min(1, 'Read time is required')
});

type CityFormData = z.infer<typeof cityFormSchema>;
type BlogFormData = z.infer<typeof blogFormSchema>;

export default function AdminPage() {
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
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
      excerpt: '',
      content: '',
      category: 'Travel Tips',
      imageUrl: '',
      featured: false,
      readTime: '5 min read'
    }
  });

  // Fetch blogs
  const { data: blogs = [], isLoading: blogsLoading, error: blogsError, refetch: refetchBlogs } = useQuery({
    queryKey: ['/api/blogs'],
    queryFn: async () => {
      const response = await apiRequest('GET', '/api/blogs');
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    },
    staleTime: 0, // Always refetch
    cacheTime: 0, // Don't cache
  });

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

  // Blog mutations
  const createBlogMutation = useMutation({
    mutationFn: async (data: BlogFormData) => {
      return await apiRequest('POST', '/api/blogs', data);
    },
    onSuccess: async () => {
      // Force immediate refresh of all blog-related queries
      await queryClient.invalidateQueries({ queryKey: ['/api/blogs'] });
      await queryClient.invalidateQueries({ queryKey: ['/api/blogs/latest/2'] });
      await refetchBlogs();
      toast({ title: "Blog created successfully!" });
      blogForm.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to create blog",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  const updateBlogMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: BlogFormData }) => {
      return await apiRequest('PUT', `/api/blogs/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blogs'] });
      queryClient.invalidateQueries({ queryKey: ['/api/blogs/latest/2'] });
      toast({ title: "Blog updated successfully!" });
      setEditingBlog(null);
      blogForm.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to update blog",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  const deleteBlogMutation = useMutation({
    mutationFn: async (id: number) => {
      return await apiRequest('DELETE', `/api/blogs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blogs'] });
      queryClient.invalidateQueries({ queryKey: ['/api/blogs/latest/2'] });
      toast({ title: "Blog deleted successfully!" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to delete blog",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  const onCitySubmit = async (data: CityFormData) => {
    await generateCityPageMutation.mutateAsync(data);
  };

  const onBlogSubmit = async (data: BlogFormData) => {
    if (editingBlog) {
      await updateBlogMutation.mutateAsync({ id: editingBlog.id, data });
    } else {
      await createBlogMutation.mutateAsync(data);
    }
  };

  const startEditBlog = (blog: Blog) => {
    setEditingBlog(blog);
    blogForm.reset({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      category: blog.category,
      imageUrl: blog.imageUrl || '',
      featured: blog.featured || false,
      readTime: blog.readTime
    });
  };

  const cancelEdit = () => {
    setEditingBlog(null);
    blogForm.reset();
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
                  <CardTitle>
                    {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
                  </CardTitle>
                  <CardDescription>
                    {editingBlog ? 'Update the blog post details' : 'Write a new travel blog post'}
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

                      <FormField
                        control={blogForm.control}
                        name="excerpt"
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
                        name="content"
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
                          name="readTime"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Read Time *</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., 5 min read" {...field} />
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
                        name="featured"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">Featured Post</FormLabel>
                              <div className="text-sm text-gray-500">
                                Mark this post as featured on the homepage
                              </div>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-4">
                        <Button 
                          type="submit" 
                          disabled={createBlogMutation.isPending || updateBlogMutation.isPending}
                          className="flex-1"
                        >
                          {createBlogMutation.isPending || updateBlogMutation.isPending ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              {editingBlog ? 'Updating...' : 'Creating...'}
                            </>
                          ) : (
                            <>
                              <Save className="mr-2 h-4 w-4" />
                              {editingBlog ? 'Update Blog' : 'Create Blog'}
                            </>
                          )}
                        </Button>
                        {editingBlog && (
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={cancelEdit}
                          >
                            <X className="mr-2 h-4 w-4" />
                            Cancel
                          </Button>
                        )}
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* Blog List */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Published Blog Posts</CardTitle>
                      <CardDescription>
                        Manage your existing blog posts
                      </CardDescription>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => refetchBlogs()}
                      disabled={blogsLoading}
                    >
                      {blogsLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        'Refresh'
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {blogsLoading ? (
                    <div className="flex items-center justify-center p-8">
                      <Loader2 className="h-8 w-8 animate-spin" />
                    </div>
                  ) : blogsError ? (
                    <div className="text-center p-8 text-gray-500">
                      Failed to load blogs. Please try again.
                    </div>
                  ) : !Array.isArray(blogs) || blogs.length === 0 ? (
                    <div className="text-center p-8 text-gray-500">
                      No blog posts yet. Create your first one above!
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {blogs.map((blog: Blog) => (
                        <div key={blog.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold">{blog.title}</h3>
                              {blog.featured && (
                                <Badge className="bg-orange-500">Featured</Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{blog.excerpt}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <Badge variant="outline">{blog.category}</Badge>
                              <span>{blog.readTime}</span>
                              <span>{new Date(blog.createdAt!).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => startEditBlog(blog)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => deleteBlogMutation.mutate(blog.id)}
                              disabled={deleteBlogMutation.isPending}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
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