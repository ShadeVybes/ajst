import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Award, Globe } from "lucide-react"

const milestones = [
  {
    year: "1959",
    title: "Fondation du Mouvement",
    description: "Création de l'Association Jeunes Science de Tunisie avec une vision révolutionnaire de l'éducation scientifique.",
    icon: "🚀"
  },
  {
    year: "1970",
    title: "Expansion Nationale",
    description: "Ouverture des premiers clubs régionaux à travers la Tunisie, touchant toutes les gouvernorats.",
    icon: "🌟"
  },
  {
    year: "1985",
    title: "Reconnaissance Internationale",
    description: "Participation aux premiers concours scientifiques internationaux et établissement de partenariats.",
    icon: "🏆"
  },
  {
    year: "2000",
    title: "Ère Numérique",
    description: "Intégration des nouvelles technologies et lancement des programmes de robotique avancée.",
    icon: "💻"
  },
  {
    year: "2010",
    title: "Innovation Durable",
    description: "Focus sur l'écologie et le développement durable avec des projets environnementaux majeurs.",
    icon: "🌱"
  },
  {
    year: "2024",
    title: "Avenir Brillant",
    description: "Plus de 30 clubs actifs, formant la nouvelle génération de scientifiques tunisiens.",
    icon: "✨"
  }
]

const achievements = [
  {
    icon: Users,
    title: "30+ Clubs Actifs",
    description: "Présents dans tous les gouvernorats de Tunisie",
    color: "text-beautiful-blue"
  },
  {
    icon: Award,
    title: "60 Ans d'Excellence",
    description: "Six décennies d'innovation et de formation scientifique",
    color: "text-electric-purple"
  },
  {
    icon: Globe,
    title: "Rayonnement International",
    description: "Partenariats avec des institutions scientifiques mondiales",
    color: "text-accent"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Notre <span className="gradient-text-accent font-extrabold">Histoire</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depuis 1959, l'AJST forme les scientifiques de demain et contribue au développement 
            de la culture scientifique en Tunisie à travers des programmes innovants et inclusifs.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 mb-16 text-center animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Notre Mission
          </h3>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Encourager l'innovation scientifique chez les jeunes, développer l'esprit critique 
            et créatif, et contribuer à l'épanouissement d'une génération de scientifiques 
            capables de relever les défis de demain.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title}
              className="text-center hover-lift transition-smooth animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <achievement.icon className={`h-12 w-12 ${achievement.color} mx-auto mb-4`} />
                <h3 className="text-xl font-display font-bold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-center mb-12 animate-fade-up">
            Timeline de l'Innovation
          </h3>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className={`flex flex-col md:flex-row items-center gap-8 animate-fade-up ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-1">
                  <Card className="hover-lift transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className="text-lg px-3 py-1">
                          {milestone.year}
                        </Badge>
                        <span className="text-2xl">{milestone.icon}</span>
                      </div>
                      <h4 className="text-xl font-display font-bold mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-accent rounded-full shadow-glow"></div>
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}