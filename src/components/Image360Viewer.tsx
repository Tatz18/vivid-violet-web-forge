import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { RotateCw, ZoomIn, ZoomOut, Maximize } from 'lucide-react';

interface Image360ViewerProps {
  imageUrl: string;
  alt?: string;
  width?: number;
  height?: number;
}

const Image360Viewer = ({ imageUrl, alt = "360° View", width = 800, height = 400 }: Image360ViewerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      imageRef.current = img;
      setIsLoading(false);
      drawImage();
    };
    
    img.onerror = () => {
      setIsLoading(false);
      console.error('Failed to load 360° image');
    };
    
    img.src = imageUrl;

    const drawImage = () => {
      if (!canvas || !ctx || !imageRef.current) return;
      
      const { width: canvasWidth, height: canvasHeight } = canvas;
      
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.save();
      
      // Center the rotation point
      ctx.translate(canvasWidth / 2, canvasHeight / 2);
      ctx.scale(zoom, zoom);
      ctx.rotate((rotation * Math.PI) / 180);
      
      // Draw the image centered
      ctx.drawImage(
        imageRef.current,
        -imageRef.current.width / 2,
        -imageRef.current.height / 2
      );
      
      ctx.restore();
    };

    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return;
      
      const container = containerRef.current;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      drawImage();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [imageUrl, rotation, zoom]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - dragStart.current.x;
    const sensitivity = 0.5;
    
    setRotation(prev => prev + deltaX * sensitivity);
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    
    const deltaX = e.touches[0].clientX - dragStart.current.x;
    const sensitivity = 0.5;
    
    setRotation(prev => prev + deltaX * sensitivity);
    dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    
    if (!isFullscreen) {
      containerRef.current.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleAutoRotate = () => {
    setRotation(prev => prev + 10);
  };

  if (isLoading) {
    return (
      <div 
        className="flex items-center justify-center bg-gray-100 rounded-lg"
        style={{ width, height }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading 360° view...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="relative bg-gray-900 rounded-lg overflow-hidden"
      style={{ width, height }}
    >
      <canvas
        ref={canvasRef}
        className="cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/50 rounded-lg p-2">
        <Button
          size="sm"
          variant="ghost"
          className="text-white hover:bg-white/20"
          onClick={handleAutoRotate}
        >
          <RotateCw className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="text-white hover:bg-white/20"
          onClick={handleZoomOut}
        >
          <ZoomOut className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="text-white hover:bg-white/20"
          onClick={handleZoomIn}
        >
          <ZoomIn className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="text-white hover:bg-white/20"
          onClick={handleFullscreen}
        >
          <Maximize className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Instructions */}
      <div className="absolute top-4 left-4 bg-black/50 text-white text-sm px-3 py-2 rounded">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
};

export default Image360Viewer;