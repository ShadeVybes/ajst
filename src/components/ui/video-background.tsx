import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface VideoBackgroundProps {
  src: string
  poster?: string
  className?: string
  children?: React.ReactNode
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
}

export function VideoBackground({ 
  src, 
  poster, 
  className = "", 
  children, 
  autoPlay = true, 
  muted = true, 
  loop = true 
}: VideoBackgroundProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(muted)
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (autoPlay) {
      video.play().catch(console.error)
    }
  }, [autoPlay])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Controls */}
      <div className={`
        absolute bottom-4 right-4 flex gap-2 
        transition-all duration-300 
        ${showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
      `}>
        <Button
          variant="secondary"
          size="icon"
          onClick={togglePlay}
          className="bg-black/50 hover:bg-black/70 text-white border-0"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        
        <Button
          variant="secondary"
          size="icon"
          onClick={toggleMute}
          className="bg-black/50 hover:bg-black/70 text-white border-0"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
