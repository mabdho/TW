/**
 * Image Optimization Component
 * Frontend interface for image optimization functionality
 */

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

interface OptimizationResult {
  success: boolean;
  originalSize: number;
  optimizedSize: number;
  reduction: number;
  quality: number;
  format: string;
  filename: string;
  url: string;
  dimensions: {
    original: { width: number; height: number };
    optimized: { width: number; height: number };
  };
}

interface ImageOptimizerProps {
  className?: string;
}

export const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState('upload');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePath, setFilePath] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<OptimizationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Settings
  const [targetSize, setTargetSize] = useState(100);
  const [quality, setQuality] = useState(80);
  const [maxWidth, setMaxWidth] = useState(1200);
  const [maxHeight, setMaxHeight] = useState(800);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setResult(null);
      setError(null);
    }
  };

  const handleUploadOptimization = async () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    setProgress(0);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('targetSize', targetSize.toString());
      formData.append('quality', quality.toString());
      formData.append('maxWidth', maxWidth.toString());
      formData.append('maxHeight', maxHeight.toString());

      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      const response = await fetch('/api/images/optimize', {
        method: 'POST',
        body: formData,
      });

      clearInterval(progressInterval);
      setProgress(100);

      const data = await response.json();

      if (data.success) {
        setResult(data.data);
        toast({
          title: "Success!",
          description: `Image optimized successfully! ${data.data.reduction.toFixed(1)}% size reduction.`,
        });
      } else {
        setError(data.error || 'Optimization failed');
        toast({
          title: "Error",
          description: data.error || 'Optimization failed',
          variant: "destructive",
        });
      }
    } catch (err) {
      setError('Network error during optimization');
      toast({
        title: "Error",
        description: 'Network error during optimization',
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
      setTimeout(() => setProgress(0), 2000);
    }
  };

  const handleFilePathOptimization = async () => {
    if (!filePath) return;

    setIsProcessing(true);
    setProgress(0);
    setError(null);

    try {
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      const response = await fetch('/api/images/optimize-file', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filePath,
          targetSize,
          quality,
          maxWidth,
          maxHeight,
        }),
      });

      clearInterval(progressInterval);
      setProgress(100);

      const data = await response.json();

      if (data.success) {
        setResult(data.data);
        toast({
          title: "Success!",
          description: `Image optimized successfully! ${data.data.reduction.toFixed(1)}% size reduction.`,
        });
      } else {
        setError(data.error || 'Optimization failed');
        toast({
          title: "Error",
          description: data.error || 'Optimization failed',
          variant: "destructive",
        });
      }
    } catch (err) {
      setError('Network error during optimization');
      toast({
        title: "Error",
        description: 'Network error during optimization',
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
      setTimeout(() => setProgress(0), 2000);
    }
  };

  const resetForm = () => {
    setSelectedFile(null);
    setFilePath('');
    setResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={`max-w-4xl mx-auto p-6 ${className}`}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            🖼️ Image Optimization Tool
          </CardTitle>
          <p className="text-center text-gray-600">
            Convert images to WebP format and optimize file sizes under 100KB
          </p>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upload">Upload Image</TabsTrigger>
              <TabsTrigger value="file">File Path</TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="file-upload">Select Image File</Label>
                  <Input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    ref={fileInputRef}
                    className="mt-2"
                  />
                  {selectedFile && (
                    <p className="text-sm text-gray-500 mt-2">
                      Selected: {selectedFile.name} ({formatBytes(selectedFile.size)})
                    </p>
                  )}
                </div>

                <Button
                  onClick={handleUploadOptimization}
                  disabled={!selectedFile || isProcessing}
                  className="w-full"
                >
                  {isProcessing ? 'Optimizing...' : 'Optimize Image'}
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="file" className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="file-path">Image File Path</Label>
                  <Input
                    id="file-path"
                    type="text"
                    value={filePath}
                    onChange={(e) => setFilePath(e.target.value)}
                    placeholder="/path/to/image.jpg"
                    className="mt-2"
                  />
                </div>

                <Button
                  onClick={handleFilePathOptimization}
                  disabled={!filePath || isProcessing}
                  className="w-full"
                >
                  {isProcessing ? 'Optimizing...' : 'Optimize Image'}
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {/* Settings Panel */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Optimization Settings</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="target-size">Target Size (KB)</Label>
                <Input
                  id="target-size"
                  type="number"
                  value={targetSize}
                  onChange={(e) => setTargetSize(parseInt(e.target.value))}
                  min="10"
                  max="1000"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="quality">Quality (%)</Label>
                <Input
                  id="quality"
                  type="number"
                  value={quality}
                  onChange={(e) => setQuality(parseInt(e.target.value))}
                  min="10"
                  max="100"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="max-width">Max Width (px)</Label>
                <Input
                  id="max-width"
                  type="number"
                  value={maxWidth}
                  onChange={(e) => setMaxWidth(parseInt(e.target.value))}
                  min="100"
                  max="4000"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="max-height">Max Height (px)</Label>
                <Input
                  id="max-height"
                  type="number"
                  value={maxHeight}
                  onChange={(e) => setMaxHeight(parseInt(e.target.value))}
                  min="100"
                  max="4000"
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Progress Bar */}
          {isProcessing && (
            <div className="mt-6">
              <Progress value={progress} className="w-full" />
              <p className="text-center text-sm text-gray-500 mt-2">
                Optimizing image... {progress}%
              </p>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <Alert className="mt-6" variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Results Display */}
          {result && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  ✅ Optimization Results
                  <Badge variant="secondary">{result.format.toUpperCase()}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">File Size</h4>
                    <p>Original: <span className="font-mono">{formatBytes(result.originalSize)}</span></p>
                    <p>Optimized: <span className="font-mono">{formatBytes(result.optimizedSize)}</span></p>
                    <p className="text-green-600 font-semibold">
                      Reduction: {result.reduction.toFixed(1)}%
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Dimensions</h4>
                    <p>Original: {result.dimensions.original.width}×{result.dimensions.original.height}</p>
                    <p>Optimized: {result.dimensions.optimized.width}×{result.dimensions.optimized.height}</p>
                    <p>Quality: {result.quality}%</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold">Download</h4>
                  <div className="flex gap-2">
                    <Button asChild variant="outline">
                      <a href={result.url} download={result.filename}>
                        Download Optimized Image
                      </a>
                    </Button>
                    <Button onClick={resetForm} variant="outline">
                      Optimize Another Image
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageOptimizer;