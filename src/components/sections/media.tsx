import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"
import roboticsImage from "@/assets/robotics-lab.jpg"
import astronomyImage from "@/assets/astronomy-night.jpg"
import ecologyImage from "@/assets/ecology-field.jpg"
import scienceFairImage from "@/assets/science-fair.jpg"
import cosmicBg from "@/assets/cosmic-bg.jpg"

const mediaItems = [
  {
    id: 1,
    src: roboticsImage,
    title: "Atelier Robotique 2024",
    category: "Robotique",
    description: "Les étudiants construisent et programment des robots innovants"
  },
  {
    id: 2,
    src: astronomyImage,
    title: "Nuit des Étoiles",
    category: "Astronomie",
    description: "Observation des constellations avec nos télescopes"
  },
  {
    id: 3,
    src: ecologyImage,
    title: "Recherche Environnementale",
    category: "Écologie",
    description: "Étude de la biodiversité locale et conservation"
  },
  {
    id: 4,
    src: scienceFairImage,
    title: "Exposition Scientifique",
    category: "Événements",
    description: "Présentation des projets innovants de nos clubs"
  },
  {
    id: 5,
    src: cosmicBg,
    title: "Camp d'Été Astrophysique",
    category: "Astronomie",
    description: "Formation intensive en astrophysique et observation"
  },
  {
    id: 6,
    src: roboticsImage,
    title: "Compétition de Robotique",
    category: "Robotique",
    description: "Concours national inter-clubs de robotique"
  }
]

const categories = ["Tous", "Robotique", "Astronomie", "Écologie", "Événements"]

export function MediaSection() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [lightboxImage, setLightboxImage] = useState<typeof mediaItems[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredItems = selectedCategory === "Tous" 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory)

  const openLightbox = (item: typeof mediaItems[0]) => {
    setLightboxImage(item)
    setCurrentIndex(mediaItems.findIndex(media => media.id === item.id))
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % mediaItems.length
      : (currentIndex - 1 + mediaItems.length) % mediaItems.length
    
    setCurrentIndex(newIndex)
    setLightboxImage(mediaItems[newIndex])
  }

  return (
    <section id="media" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Nos <span className="gradient-text-accent font-extrabold">Médias</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez en images l'univers passionnant de l'AJST : nos ateliers, 
            événements, projets et moments de découverte scientifique.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-smooth ${
                selectedCategory === category 
                  ? "bg-accent text-accent-foreground shadow-glow" 
                  : "hover:bg-accent/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id}
              className="group overflow-hidden hover-lift transition-smooth cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(item)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-cosmic opacity-0 group-hover:opacity-60 transition-smooth flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white" />
                </div>
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {item.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up">
            <div className="relative max-w-4xl w-full">
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white"
              >
                <X className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <img 
                src={lightboxImage.src} 
                alt={lightboxImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <Badge className="mb-2 bg-accent text-accent-foreground">
                  {lightboxImage.category}
                </Badge>
                <h3 className="text-2xl font-display font-bold mb-2">{lightboxImage.title}</h3>
                <p className="text-gray-200">{lightboxImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}