import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "Lancement de la Nuit des Étoiles 2024",
    excerpt: "Rejoignez-nous pour la 25ème édition de notre événement phare d'astronomie, une nuit magique d'observation et de découvertes.",
    date: "2024-03-15",
    category: "Événements",
    featured: true,
    readTime: "3 min"
  },
  {
    id: 2,
    title: "Nouveau partenariat avec l'ESA",
    excerpt: "L'AJST signe un accord de coopération avec l'Agence Spatiale Européenne pour des projets éducatifs innovants.",
    date: "2024-03-10",
    category: "Partenariats",
    featured: false,
    readTime: "5 min"
  },
  {
    id: 3,
    title: "Victoire en robotique internationale",
    excerpt: "L'équipe AJST Tunis remporte la première place au concours mondial de robotique étudiante à Tokyo.",
    date: "2024-03-05",
    category: "Compétitions",
    featured: true,
    readTime: "4 min"
  },
  {
    id: 4,
    title: "Ouverture de 5 nouveaux clubs",
    excerpt: "Expansion de notre réseau avec l'ouverture de clubs à Gabès, Tataouine, Kef, Siliana et Zaghouan.",
    date: "2024-02-28",
    category: "Expansion",
    featured: false,
    readTime: "2 min"
  }
]

const upcomingEvents = [
  {
    title: "Camp d'Été Scientifique",
    date: "2024-07-15",
    location: "Hammamet",
    participants: "60 participants max",
    description: "Deux semaines d'immersion scientifique intensive"
  },
  {
    title: "Concours National de Robotique",
    date: "2024-05-20",
    location: "Tunis",
    participants: "15 équipes",
    description: "Compétition annuelle entre tous nos clubs"
  },
  {
    title: "Séminaire Innovation Verte",
    date: "2024-04-10",
    location: "Sfax",
    participants: "100 participants",
    description: "Solutions écologiques et développement durable"
  }
]

export function NewsSection() {
  return (
    <section id="news" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Actualités & <span className="gradient-text-accent font-extrabold">Événements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Restez informés de nos dernières actualités, événements à venir 
            et réalisations exceptionnelles de nos jeunes scientifiques.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-6 animate-fade-up">
              Dernières Actualités
            </h3>
            <div className="space-y-6">
              {newsArticles.map((article, index) => (
                <Card 
                  key={article.id}
                  className={`hover-lift transition-smooth cursor-pointer animate-fade-up ${
                    article.featured ? 'border-accent shadow-glow' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant={article.featured ? "default" : "secondary"}
                          className={article.featured ? "bg-accent text-accent-foreground" : ""}
                        >
                          {article.category}
                        </Badge>
                        {article.featured && (
                          <Badge variant="outline" className="text-accent border-accent">
                            À la Une
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center space-x-4">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(article.date).toLocaleDateString('fr-FR')}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    
                    <h4 className={`font-display font-bold mb-3 ${
                      article.featured ? 'text-xl' : 'text-lg'
                    }`}>
                      {article.title}
                    </h4>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <Button variant="ghost" className="text-accent hover:text-accent p-0">
                      Lire la suite
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-6 animate-fade-up">
              Événements à Venir
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card 
                  key={event.title}
                  className="hover-lift transition-smooth animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-display">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-accent" />
                        {new Date(event.date).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-accent" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-2 text-accent" />
                        {event.participants}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>
                    <Button size="sm" variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground">
                      S'inscrire
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="mt-8 bg-gradient-primary text-white animate-fade-up">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-display font-bold mb-3">
                  Newsletter AJST
                </h4>
                <p className="text-gray-200 mb-4 text-sm">
                  Recevez nos actualités et événements directement dans votre boîte mail
                </p>
                <Button variant="secondary" className="w-full">
                  S'abonner à la Newsletter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}