import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface MediaItem {
  id: number
  src: string
  title: string
  category: string
  description?: string
  type?: 'image' | 'video'
}

interface LightboxGalleryProps {
  items: MediaItem[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function LightboxGallery({ items, currentIndex, onClose, onNavigate }: LightboxGalleryProps) {
  const [isLoading, setIsLoading] = useState(true)
  const currentItem = items[currentIndex]

  if (!currentItem) return null

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1
    onNavigate(newIndex)
    setIsLoading(true)
  }

  const goToNext = () => {
    const newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
    onNavigate(newIndex)
    setIsLoading(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = currentItem.src
    link.download = `${currentItem.title.replace(/\s+/g, '_')}.jpg`
    link.click()
  }

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/10 h-10 w-10"
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={(e) => { e.stopPropagation(); goToPrevious() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 h-12 w-12"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={(e) => { e.stopPropagation(); goToNext() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 h-12 w-12"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Content */}
      <div 
        className="relative max-w-7xl max-h-[90vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-white"></div>
          </div>
        )}

        {/* Media Content */}
        {currentItem.type === 'video' ? (
          <video
            src={currentItem.src}
            controls
            autoPlay
            className="max-w-full max-h-[80vh] object-contain"
            onLoadStart={() => setIsLoading(false)}
          />
        ) : (
          <img
            src={currentItem.src}
            alt={currentItem.title}
            className="max-w-full max-h-[80vh] object-contain transition-opacity duration-300"
            onLoad={() => setIsLoading(false)}
            style={{ opacity: isLoading ? 0 : 1 }}
          />
        )}

        {/* Media Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-display font-bold mb-2">{currentItem.title}</h3>
              {currentItem.description && (
                <p className="text-gray-300 mb-3">{currentItem.description}</p>
              )}
              <Badge variant="secondary" className="bg-white/20 text-white">
                {currentItem.category}
              </Badge>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleDownload}
                className="text-white hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="absolute top-4 left-4 bg-black/50 rounded-full px-3 py-1 text-white text-sm">
          {currentIndex + 1} / {items.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-md overflow-x-auto px-4">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={(e) => { e.stopPropagation(); onNavigate(index) }}
            className={`
              flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden transition-all duration-200
              ${index === currentIndex 
                ? 'border-accent scale-110' 
                : 'border-white/30 hover:border-white/60'
              }
            `}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
