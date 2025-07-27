import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Star, 
  Lightbulb, 
  Users, 
  Target, 
  Rocket,
  Heart,
  Brain,
  Zap
} from "lucide-react"
import { useLanguage } from "@/components/providers/LanguageProvider"

const inspirationSteps = [
  {
    id: 1,
    title: "Découvrir sa Passion",
    subtitle: "Le premier pas vers l'excellence",
    description: "Explorez les différents domaines scientifiques et trouvez ce qui vous passionne vraiment.",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    tips: [
      "Participez à nos ateliers de découverte",
      "Rencontrez nos membres expérimentés",
      "Explorez nos laboratoires et équipements",
      "Testez différentes activités scientifiques"
    ],
    quote: "La passion est le carburant de toute grande découverte scientifique.",
    stats: { members: "1000+", activities: "50+", labs: "15+" }
  },
  {
    id: 2,
    title: "Développer ses Compétences",
    subtitle: "L'apprentissage continu",
    description: "Acquérez les connaissances théoriques et pratiques nécessaires dans votre domaine.",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
    tips: [
      "Suivez nos formations spécialisées",
      "Participez à des projets collaboratifs",
      "Utilisez nos ressources pédagogiques",
      "Bénéficiez du mentorat de nos experts"
    ],
    quote: "Chaque compétence acquise est un pas vers votre futur en sciences.",
    stats: { courses: "200+", mentors: "50+", projects: "100+" }
  },
  {
    id: 3,
    title: "Créer et Innover",
    subtitle: "Transformer les idées en réalité",
    description: "Développez vos propres projets et contribuez à l'avancement scientifique.",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500",
    tips: [
      "Participez à nos concours d'innovation",
      "Accédez à nos espaces de prototypage",
      "Collaborez avec d'autres innovateurs",
      "Présentez vos idées à nos jurys experts"
    ],
    quote: "L'innovation naît de la créativité appliquée aux défis scientifiques.",
    stats: { inventions: "300+", patents: "25+", awards: "40+" }
  },
  {
    id: 4,
    title: "Partager et Inspirer",
    subtitle: "Diffuser la connaissance",
    description: "Transmettez vos découvertes et inspirez la prochaine génération de scientifiques.",
    icon: Users,
    color: "from-green-500 to-emerald-500",
    tips: [
      "Animez des ateliers pour les jeunes",
      "Publiez vos recherches",
      "Participez à nos événements publics",
      "Rejoignez notre réseau d'ambassadeurs"
    ],
    quote: "Partager ses connaissances multiplie leur impact sur le monde.",
    stats: { events: "500+", participants: "10k+", publications: "150+" }
  },
  {
    id: 5,
    title: "Réaliser ses Rêves",
    subtitle: "L'accomplissement personnel",
    description: "Atteignez vos objectifs et devenez le scientifique que vous avez toujours voulu être.",
    icon: Rocket,
    color: "from-purple-500 to-indigo-500",
    tips: [
      "Définissez vos objectifs à long terme",
      "Célébrez chaque étape franchie",
      "Continuez à apprendre et évoluer",
      "Inspirez d'autres à suivre votre voie"
    ],
    quote: "Chaque rêve scientifique réalisé enrichit l'humanité entière.",
    stats: { graduates: "2000+", careers: "95%", satisfaction: "98%" }
  }
]

const testimonials = [
  {
    name: "Sarah Ben Ahmed",
    role: "Astrophysicienne, ESA",
    image: "/api/placeholder/80/80",
    quote: "L'AJST m'a donné les outils et la confiance pour poursuivre mes rêves dans l'espace."
  },
  {
    name: "Mehdi Trabelsi", 
    role: "Ingénieur Robotique, Tesla",
    image: "/api/placeholder/80/80",
    quote: "Grâce à l'AJST, j'ai découvert ma passion pour la robotique et l'IA."
  },
  {
    name: "Leila Kharrat",
    role: "Chercheuse en Biologie, Institut Pasteur",
    image: "/api/placeholder/80/80",
    quote: "Le mentorat AJST a été déterminant dans mon parcours en recherche médicale."
  }
]

export function InspirationJourneySection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: "",
    goals: ""
  })
  const { t } = useLanguage()

  const handleNextStep = () => {
    if (currentStep < inspirationSteps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleFormSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData)
    // Show success message or redirect
  }

  const currentStepData = inspirationSteps.find(step => step.id === currentStep)
  const IconComponent = currentStepData?.icon || Star

  return (
    <section id="inspiration-journey" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-accent text-accent-foreground text-sm px-4 py-2">
            Votre Parcours Scientifique
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Votre Voyage vers l'<span className="gradient-text-accent font-extrabold">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez comment l'AJST peut vous accompagner à chaque étape de votre parcours scientifique, 
            de la découverte de votre passion à la réalisation de vos rêves les plus ambitieux.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 animate-fade-up">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {inspirationSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    step.id <= currentStep 
                      ? 'bg-accent text-accent-foreground shadow-lg scale-110' 
                      : 'bg-muted text-muted-foreground hover:bg-accent/20'
                  }`}
                  onClick={() => setCurrentStep(step.id)}
                >
                  {step.id < currentStep ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <span className="text-sm font-bold">{step.id}</span>
                  )}
                </div>
                <span className="text-xs mt-2 text-center max-w-20 text-muted-foreground">
                  {step.title.split(' ')[0]}
                </span>
                {index < inspirationSteps.length - 1 && (
                  <div className={`hidden md:block absolute w-24 h-0.5 mt-6 ml-12 transition-colors duration-300 ${
                    step.id < currentStep ? 'bg-accent' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Current Step Content */}
        {currentStepData && (
          <div className="max-w-6xl mx-auto animate-fade-up">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className={`h-2 bg-gradient-to-r ${currentStepData.color}`}></div>
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column - Content */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentStepData.color} text-white`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div>
                        <Badge className="mb-2">Étape {currentStep}/5</Badge>
                        <h3 className="text-3xl font-display font-bold text-foreground">
                          {currentStepData.title}
                        </h3>
                        <p className="text-lg text-accent font-medium">
                          {currentStepData.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {currentStepData.description}
                    </p>

                    <div className="bg-muted/50 rounded-xl p-6">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center">
                        <Zap className="h-5 w-5 mr-2 text-accent" />
                        Actions Recommandées
                      </h4>
                      <ul className="space-y-3">
                        {currentStepData.tips.map((tip, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="border-l-4 border-accent pl-6 italic text-lg text-muted-foreground">
                      "{currentStepData.quote}"
                    </blockquote>
                  </div>

                  {/* Right Column - Stats & Actions */}
                  <div className="space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(currentStepData.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-muted/30 rounded-xl">
                          <div className="text-2xl font-bold text-accent">{value}</div>
                          <div className="text-sm text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Form for Last Step */}
                    {currentStep === 5 && (
                      <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10">
                        <h4 className="font-semibold mb-4 text-foreground">
                          Commencez Votre Parcours Aujourd'hui
                        </h4>
                        <div className="space-y-4">
                          <Input
                            placeholder="Votre nom"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                          <Input
                            type="email"
                            placeholder="Votre email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                          <Input
                            placeholder="Vos centres d'intérêt scientifiques"
                            value={formData.interests}
                            onChange={(e) => setFormData({...formData, interests: e.target.value})}
                          />
                          <Textarea
                            placeholder="Vos objectifs et rêves scientifiques"
                            value={formData.goals}
                            onChange={(e) => setFormData({...formData, goals: e.target.value})}
                          />
                          <Button onClick={handleFormSubmit} className="w-full">
                            Rejoindre l'AJST
                          </Button>
                        </div>
                      </Card>
                    )}

                    {/* Testimonials for other steps */}
                    {currentStep !== 5 && (
                      <Card className="p-6">
                        <h4 className="font-semibold mb-4 text-foreground">Témoignage</h4>
                        {testimonials.map((testimonial, index) => (
                          currentStep % 3 === (index + 1) % 3 && (
                            <div key={index} className="space-y-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                                  <span className="text-lg">👤</span>
                                </div>
                                <div>
                                  <div className="font-medium text-foreground">{testimonial.name}</div>
                                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                </div>
                              </div>
                              <blockquote className="text-muted-foreground italic">
                                "{testimonial.quote}"
                              </blockquote>
                            </div>
                          )
                        ))}
                      </Card>
                    )}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={handlePrevStep}
                    disabled={currentStep === 1}
                    className="flex items-center"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Précédent
                  </Button>

                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">
                      Étape {currentStep} sur {inspirationSteps.length}
                    </div>
                    <div className="w-32 h-2 bg-muted rounded-full mt-2 mx-auto">
                      <div 
                        className="h-full bg-accent rounded-full transition-all duration-300"
                        style={{ width: `${(currentStep / inspirationSteps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <Button
                    onClick={handleNextStep}
                    disabled={currentStep === inspirationSteps.length}
                    className="flex items-center"
                  >
                    {currentStep === inspirationSteps.length ? 'Terminé' : 'Suivant'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up">
          <Card className="bg-gradient-primary text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4">
                Prêt à Commencer Votre Aventure ?
              </h3>
              <p className="mb-6 text-white/90">
                Rejoignez plus de 1000 jeunes scientifiques qui ont déjà commencé leur parcours 
                avec l'AJST. Votre futur en sciences commence aujourd'hui.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6"
                >
                  <Star className="mr-2 h-5 w-5" />
                  Rejoindre l'AJST
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/50 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm bg-white/10 text-lg px-8 py-6"
                >
                  Programmer une Visite
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
