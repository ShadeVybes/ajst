import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cpu, Telescope, Leaf, Atom, Zap, Microscope } from "lucide-react"

const activities = [
  {
    icon: Cpu,
    title: "Robotique",
    description: "Conception et programmation de robots intelligents pour résoudre des défis complexes.",
    color: "bg-electric-purple",
    clubs: 12,
    disciplines: ["IA", "Mécanique", "Programmation"]
  },
  {
    icon: Telescope,
    title: "Astronomie",
    description: "Observation des astres et exploration de l'univers avec des équipements modernes.",
    color: "bg-beautiful-blue",
    clubs: 8,
    disciplines: ["Observation", "Astrophysique", "Navigation"]
  },
  {
    icon: Leaf,
    title: "Écologie",
    description: "Protection de l'environnement et développement de solutions durables.",
    color: "bg-accent",
    clubs: 6,
    disciplines: ["Biodiversité", "Climat", "Conservation"]
  },
  {
    icon: Atom,
    title: "Physique",
    description: "Expériences et découvertes dans le monde fascinant de la physique.",
    color: "bg-secondary",
    clubs: 10,
    disciplines: ["Quantique", "Optique", "Mécanique"]
  },
  {
    icon: Zap,
    title: "Électronique",
    description: "Création de circuits et systèmes électroniques innovants.",
    color: "bg-electric-purple",
    clubs: 7,
    disciplines: ["Circuits", "IoT", "Capteurs"]
  },
  {
    icon: Microscope,
    title: "Biologie",
    description: "Exploration du vivant et des phénomènes biologiques.",
    color: "bg-beautiful-blue",
    clubs: 9,
    disciplines: ["Génétique", "Microbiologie", "Biotechnologie"]
  }
]

export function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Nos <span className="gradient-text-accent font-extrabold">Activités</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos domaines scientifiques variés où les jeunes talents tunisiens 
            développent leurs compétences et réalisent leurs projets innovants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card 
              key={activity.title} 
              className="group hover-lift transition-smooth cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${activity.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth shadow-glow`}>
                  <activity.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-display">{activity.title}</CardTitle>
                <CardDescription className="text-base">
                  {activity.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <div className="flex justify-center space-x-2">
                  {activity.disciplines.map((discipline) => (
                    <Badge key={discipline} variant="secondary" className="text-xs">
                      {discipline}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <span className="text-sm text-muted-foreground">
                    {activity.clubs} clubs actifs
                  </span>
                  <Button variant="ghost" size="sm" className="text-accent hover:text-accent">
                    En savoir plus →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-up">
          <Button size="lg" className="bg-gradient-accent shadow-glow hover-lift">
            Voir Tous nos Clubs
          </Button>
        </div>
      </div>
    </section>
  )
}