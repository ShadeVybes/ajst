import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Users, Calendar, Telescope } from "lucide-react"
import cosmicBg from "@/assets/cosmic-bg.jpg"

const eventFeatures = [
  {
    icon: Telescope,
    title: "Télescopes Professionnels",
    description: "Équipements de haute qualité pour une observation optimale"
  },
  {
    icon: Users,
    title: "Experts Astronomiques",
    description: "Guidance par des astronomes professionnels expérimentés"
  },
  {
    icon: Star,
    title: "Observations Guidées",
    description: "Découverte des constellations et phénomènes célestes"
  }
]

const observationSites = [
  {
    location: "Tunis - Lac 2",
    date: "15 Juillet 2024",
    capacity: "200 participants",
    featured: true
  },
  {
    location: "Hammamet - Plage",
    date: "16 Juillet 2024", 
    capacity: "150 participants",
    featured: false
  },
  {
    location: "Sousse - Marina",
    date: "17 Juillet 2024",
    capacity: "180 participants", 
    featured: false
  },
  {
    location: "Sfax - Centre Ville",
    date: "18 Juillet 2024",
    capacity: "120 participants",
    featured: false
  }
]

export function NuitDesEtoilesSection() {
  return (
    <section id="nuit-etoiles" className="py-20 relative overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0">
        <img 
          src={cosmicBg} 
          alt="Starry night sky"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80"></div>
      </div>

      {/* Floating Stars */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-beautiful-blue rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full animate-floating opacity-80"></div>
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-floating" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-accent text-accent-foreground text-sm px-4 py-2">
            Événement Phare • 25ème Édition
          </Badge>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            La Nuit des <span className="gradient-text-accent font-extrabold">Étoiles</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Plongez dans l'univers fascinant de l'astronomie lors de notre événement 
            annuel mythique. Une nuit magique d'observation, de découvertes et d'émerveillement 
            sous le ciel étoilé de Tunisie.
          </p>
        </div>

        {/* Event Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {eventFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift transition-smooth animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <feature.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-200">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Observation Sites */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-center text-white mb-12 animate-fade-up">
            Sites d'Observation 2024
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {observationSites.map((site, index) => (
              <Card 
                key={site.location}
                className={`bg-white/10 backdrop-blur-sm border-white/20 hover-lift transition-smooth animate-fade-up ${
                  site.featured ? 'ring-2 ring-accent shadow-glow' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {site.featured && (
                    <Badge className="mb-3 bg-accent text-accent-foreground">
                      Site Principal
                    </Badge>
                  )}
                  
                  <h4 className="text-lg font-display font-bold text-white mb-4">
                    {site.location}
                  </h4>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-200">
                      <Calendar className="h-4 w-4 mr-2 text-accent" />
                      {site.date}
                    </div>
                    <div className="flex items-center text-gray-200">
                      <Users className="h-4 w-4 mr-2 text-accent" />
                      {site.capacity}
                    </div>
                    <div className="flex items-center text-gray-200">
                      <MapPin className="h-4 w-4 mr-2 text-accent" />
                      Accès libre
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4 border-white/50 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm bg-white/10"
                  >
                    Plus d'infos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-up">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Rejoignez l'Aventure Cosmique
              </h3>
              <p className="text-gray-200 mb-6">
                Inscription gratuite et ouverte à tous. Amenez votre famille et vos amis 
                pour une soirée inoubliable sous les étoiles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow hover-lift"
                >
                  <Star className="mr-2 h-5 w-5" />
                  S'inscrire Maintenant
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/50 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm bg-white/10"
                >
                  Programme Complet
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}