import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, ArrowRight, Star, Trophy, Rocket, Beaker } from "lucide-react"
import { useLanguage } from "@/components/providers/LanguageProvider"

const newsItems = [
  {
    id: 1,
    type: "actualité",
    title: "Découverte d'une nouvelle exoplanète par nos membres",
    summary: "L'équipe AJST de Tunis contribue à la découverte d'une planète similaire à la Terre",
    date: "2024-07-20",
    category: "Recherche",
    image: "/api/placeholder/400/250",
    featured: true,
    readTime: "5 min",
    tags: ["Exoplanètes", "Recherche", "Découverte"]
  },
  {
    id: 2,
    type: "événement",
    title: "Concours National de Robotique 2024",
    summary: "Inscription ouverte pour le plus grand concours de robotique étudiante en Tunisie",
    date: "2024-08-15",
    location: "Tunis",
    category: "Concours",
    image: "/api/placeholder/400/250",
    featured: true,
    participants: "500+ étudiants",
    tags: ["Robotique", "Concours", "Innovation"]
  },
  {
    id: 3,
    type: "actualité",
    title: "Lancement du programme Jeunes Chercheurs",
    summary: "Nouveau programme de mentorat pour accompagner les jeunes scientifiques tunisiens",
    date: "2024-07-10",
    category: "Éducation",
    image: "/api/placeholder/400/250",
    featured: false,
    readTime: "3 min",
    tags: ["Éducation", "Mentorat", "Jeunesse"]
  },
  {
    id: 4,
    type: "événement",
    title: "Forum International de l'Innovation",
    summary: "Rencontre entre innovateurs tunisiens et internationaux",
    date: "2024-09-20",
    location: "Sousse",
    category: "Innovation",
    image: "/api/placeholder/400/250",
    featured: false,
    participants: "200+ participants",
    tags: ["Innovation", "International", "Forum"]
  },
  {
    id: 5,
    type: "actualité",
    title: "Partenariat avec l'Agence Spatiale Européenne",
    summary: "AJST signe un accord de coopération scientifique avec l'ESA",
    date: "2024-06-30",
    category: "Partenariat",
    image: "/api/placeholder/400/250",
    featured: false,
    readTime: "4 min",
    tags: ["Spatial", "Partenariat", "ESA"]
  },
  {
    id: 6,
    type: "événement",
    title: "Hackathon Sciences & Technologies",
    summary: "48h de développement intensif pour résoudre des défis scientifiques",
    date: "2024-08-05",
    location: "Sfax",
    category: "Hackathon",
    image: "/api/placeholder/400/250",
    featured: false,
    participants: "150+ développeurs",
    tags: ["Hackathon", "Développement", "Innovation"]
  }
]

export function NewsEventsSection() {
  const [selectedType, setSelectedType] = useState<"tous" | "actualités" | "événements">("tous")
  const [selectedCategory, setSelectedCategory] = useState<string>("Toutes")
  const { t } = useLanguage()

  const categories = ["Toutes", "Recherche", "Éducation", "Innovation", "Concours", "Partenariat"]

  const filteredNews = newsItems.filter(item => {
    const typeMatch = selectedType === "tous" || 
                     (selectedType === "actualités" && item.type === "actualité") ||
                     (selectedType === "événements" && item.type === "événement")
    const categoryMatch = selectedCategory === "Toutes" || item.category === selectedCategory
    return typeMatch && categoryMatch
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Recherche": return <Star className="h-4 w-4" />
      case "Concours": return <Trophy className="h-4 w-4" />
      case "Innovation": return <Rocket className="h-4 w-4" />
      case "Éducation": return <Beaker className="h-4 w-4" />
      default: return <Calendar className="h-4 w-4" />
    }
  }

  return (
    <section id="news-events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-accent text-accent-foreground text-sm px-4 py-2">
            Restez Informés
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Actualités & <span className="gradient-text-accent font-extrabold">Événements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez les dernières nouvelles de l'AJST, nos événements à venir 
            et les avancées scientifiques de nos membres.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 animate-fade-up">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Type Filter */}
            <div className="flex gap-2">
              {["tous", "actualités", "événements"].map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type as any)}
                  className="capitalize"
                >
                  {type}
                </Button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {getCategoryIcon(category)}
                  <span className="ml-1">{category}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          <h3 className="text-2xl font-display font-bold mb-6 text-foreground">À la Une</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredNews.filter(item => item.featured).map((item, index) => (
              <Card 
                key={item.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">
                        {item.type === "actualité" ? "📰" : "📅"}
                      </div>
                      <p className="text-sm opacity-80">Image à venir</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={item.type === "actualité" ? "default" : "secondary"}>
                      {item.type}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {getCategoryIcon(item.category)}
                      <span className="ml-1">{item.category}</span>
                    </Badge>
                  </div>
                  
                  <h4 className="text-xl font-display font-bold text-foreground mb-3">
                    {item.title}
                  </h4>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {item.summary}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(item.date).toLocaleDateString('fr-FR')}
                      </span>
                      {item.readTime && (
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {item.readTime}
                        </span>
                      )}
                      {item.location && (
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {item.location}
                        </span>
                      )}
                      {item.participants && (
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {item.participants}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {item.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="group">
                      Lire plus
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regular News Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-display font-bold mb-6 text-foreground">Autres Actualités</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.filter(item => !item.featured).map((item, index) => (
              <Card 
                key={item.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-3xl mb-2">
                        {item.type === "actualité" ? "📰" : "📅"}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={item.type === "actualité" ? "default" : "secondary"} className="text-xs">
                      {item.type}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  
                  <h4 className="font-display font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {item.summary}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(item.date).toLocaleDateString('fr-FR')}
                    </span>
                    <Button variant="ghost" size="sm" className="h-auto p-1 text-xs group">
                      Lire
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center animate-fade-up">
          <Card className="bg-gradient-primary text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4">
                Restez Connectés
              </h3>
              <p className="mb-6 text-white/90">
                Abonnez-vous à notre newsletter pour recevoir les dernières actualités 
                et ne manquer aucun événement AJST.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6"
                >
                  S'abonner à la Newsletter
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/50 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm bg-white/10 text-lg px-8 py-6"
                >
                  Suivre sur les Réseaux
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
