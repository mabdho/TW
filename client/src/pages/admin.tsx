import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Plus, Trash2, Download, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { apiRequest } from '@/lib/queryClient';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

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

type CityFormData = z.infer<typeof cityFormSchema>;

export default function AdminPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [generationMode, setGenerationMode] = useState<'ai' | 'manual'>('ai');
  const { toast } = useToast();

  const form = useForm<CityFormData>({
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

  const watchedGenerationMode = form.watch('generationMode');

  const generateCityPageMutation = useMutation({
    mutationFn: async (data: CityFormData) => {
      console.log('Submitting form data:', data);
      return await apiRequest('POST', '/api/admin/generate-city-page', data);
    },
    onSuccess: (data) => {
      setGeneratedContent(data.generatedCode);
      toast({
        title: "City page generated successfully!",
        description: `The ${data.cityName}.tsx file has been created/updated.`
      });
    },
    onError: (error: any) => {
      console.error('City generation error:', error);
      let errorMessage = "Failed to generate city page";
      
      if (error.message?.includes("quota") || error.message?.includes("429")) {
        errorMessage = "API quota exceeded. Please wait a few minutes and try again, or check your Gemini API billing settings.";
      } else if (error.message?.includes("404")) {
        errorMessage = "API model not found. Please check your Gemini API configuration.";
      } else if (error.message?.includes("401")) {
        errorMessage = "Invalid API key. Please check your Gemini API key settings.";
      }
      
      toast({
        title: "Generation failed",
        description: errorMessage,
        variant: "destructive"
      });
    }
  });

  const onSubmit = async (data: CityFormData) => {
    console.log('Form submitted with data:', data);
    console.log('Form errors:', form.formState.errors);
    
    setIsGenerating(true);
    try {
      await generateCityPageMutation.mutateAsync(data);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const addGalleryImage = () => {
    const currentImages = form.getValues('galleryImages');
    form.setValue('galleryImages', [...currentImages, { url: '', alt: '', caption: '' }]);
  };

  const removeGalleryImage = (index: number) => {
    const currentImages = form.getValues('galleryImages');
    if (currentImages.length > 1) {
      form.setValue('galleryImages', currentImages.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">City Page Generator</h1>
          <p className="text-gray-600">Generate SEO-optimized city pages with AI-powered content using Gemini</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                City Information
              </CardTitle>
              <CardDescription>
                Enter city details and images to generate an SEO-optimized travel guide
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
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
                      control={form.control}
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
                    control={form.control}
                    name="continent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Continent (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., North America" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Generation Mode Selection */}
                  <FormField
                    control={form.control}
                    name="generationMode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content Generation Mode</FormLabel>
                        <FormControl>
                          <div className="flex gap-4 mt-2">
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="generationMode"
                                value="ai"
                                checked={field.value === 'ai'}
                                onChange={(e) => {
                                  field.onChange(e.target.value);
                                  setGenerationMode(e.target.value as 'ai' | 'manual');
                                }}
                                className="w-4 h-4"
                              />
                              <span>AI Generation (Gemini)</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="generationMode"
                                value="manual"
                                checked={field.value === 'manual'}
                                onChange={(e) => {
                                  field.onChange(e.target.value);
                                  setGenerationMode(e.target.value as 'ai' | 'manual');
                                }}
                                className="w-4 h-4"
                              />
                              <span>Manual JSON Input</span>
                            </label>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Manual JSON Input */}
                  {watchedGenerationMode === 'manual' && (
                    <FormField
                      control={form.control}
                      name="manualJson"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Manual JSON Content</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={`{
  "description": "Your city description here...",
  "highlights": ["Highlight 1", "Highlight 2", "..."],
  "attractions": [
    {
      "name": "Attraction Name",
      "description": "Description here...",
      "practicalInfo": {
        "howToGetThere": "Directions...",
        "openingHours": "Hours...",
        "cost": "Cost...",
        "website": "URL..."
      }
    }
  ],
  "logistics": {
    "gettingAround": "Transportation info...",
    "whereToStay": "Accommodation info...",
    "bestTimeToVisit": "Best time info...",
    "suggestedItinerary": "Itinerary suggestions..."
  },
  "faqs": [
    {
      "question": "Question?",
      "answer": "Answer..."
    }
  ]
}`}
                              className="min-h-[400px] font-mono text-sm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                          <div className="text-sm text-gray-500">
                            Provide the complete JSON structure with all required fields for the city page content.
                          </div>
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="heroImageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hero Image URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://images.unsplash.com/..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* SEO Metadata */}
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="msv"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Monthly Search Volume</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 2,400" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="kd"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Keyword Difficulty</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 25" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Gallery Images */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <FormLabel>Gallery Images *</FormLabel>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addGalleryImage}
                        className="flex items-center gap-2"
                      >
                        <Plus className="h-4 w-4" />
                        Add Image
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      {form.watch('galleryImages').map((_, index) => (
                        <Card key={index} className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="secondary">Image {index + 1}</Badge>
                            {form.watch('galleryImages').length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeGalleryImage(index)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                          
                          <div className="space-y-3">
                            <FormField
                              control={form.control}
                              name={`galleryImages.${index}.url`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Image URL</FormLabel>
                                  <FormControl>
                                    <Input placeholder="https://images.unsplash.com/..." {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <div className="grid grid-cols-2 gap-3">
                              <FormField
                                control={form.control}
                                name={`galleryImages.${index}.alt`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Alt Text</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Descriptive alt text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name={`galleryImages.${index}.caption`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Caption</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Image caption" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isGenerating || generateCityPageMutation.isPending}
                  >
                    {isGenerating || generateCityPageMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {watchedGenerationMode === 'manual' ? 'Creating City Page...' : 'Generating City Page... (This may take 30-60 seconds)'}
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        {watchedGenerationMode === 'manual' ? 'Create City Page from JSON' : 'Generate City Page with AI'}
                      </>
                    )}
                  </Button>
                  
                  {generateCityPageMutation.isPending && (
                    <div className="text-sm text-gray-600 mt-2">
                      Processing with AI... Please wait while we generate your city page.
                    </div>
                  )}

                  {generateCityPageMutation.error && (
                    <div className="text-sm text-red-600 mt-2 p-3 bg-red-50 rounded-lg">
                      <strong>Error:</strong> {generateCityPageMutation.error.message || "Failed to generate city page"}
                    </div>
                  )}

                  {/* Debug button for testing */}
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full mt-2" 
                    onClick={() => {
                      console.log('Debug: Form state:', form.getValues());
                      console.log('Debug: Form errors:', form.formState.errors);
                      console.log('Debug: Form valid:', form.formState.isValid);
                      const testData = {
                        city: "TestCity",
                        country: "TestCountry",
                        continent: "",
                        heroImageUrl: "",
                        galleryImages: [
                          { url: "", alt: "Test alt", caption: "Test caption" }
                        ],
                        msv: "",
                        kd: ""
                      };
                      console.log('Debug: Attempting manual submission with:', testData);
                      generateCityPageMutation.mutate(testData);
                    }}
                  >
                    🔧 Debug Test (Check Browser Console)
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Preview Section */}
          <Card>
            <CardHeader>
              <CardTitle>Generated Code Preview</CardTitle>
              <CardDescription>
                The generated React component will appear here after generation
              </CardDescription>
            </CardHeader>
            <CardContent>
              {generatedContent ? (
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-4 max-h-96 overflow-auto">
                    <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                      {generatedContent}
                    </pre>
                  </div>
                  <p className="text-sm text-green-600 font-medium">
                    ✅ City page file has been generated and saved successfully!
                  </p>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Fill out the form and click "Generate City Page" to see the generated code here.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
      <Toaster />
    </div>
  );
}