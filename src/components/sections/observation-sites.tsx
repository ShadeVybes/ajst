import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, Star, Navigation, Phone, Info } from "lucide-react"
import { useLanguage } from "@/components/providers/LanguageProvider"

const observationSites = [
  {
    id: 1,
    location: "Tunis - Lac 2",
    date: "15 Juillet 2024",
    time: "20:00 - 02:00",
    capacity: "200 participants",
    featured: true,
    coordinates: "36.8625, 10.2297",
    accessibility: "Excellent",
    parking: "Gratuit - 150 places",
    equipment: "Télescopes 200mm, jumelles HD",
    contact: "+216 71 123 456",
    description: "Site principal avec équipements professionnels et accès facile depuis la capitale.",
    activities: ["Observation planétaire", "Photographie astronomique", "Conférences en direct"],
    bestFor: "Débutants et familles"
  },
  {
    id: 2,
    location: "Hammamet - Plage Sud",
    date: "16 Juillet 2024",
    time: "20:30 - 01:30",
    capacity: "150 participants",
    featured: false,
    coordinates: "36.4000, 10.6167",
    accessibility: "Bon",
    parking: "Gratuit - 80 places",
    equipment: "Télescopes 150mm, lunettes",
    contact: "+216 72 234 567",
    description: "Observation sur la plage avec vue dégagée sur l'horizon maritime.",
    activities: ["Observation de la Voie Lactée", "Initiation à l'astronomie", "Veillée sous les étoiles"],
    bestFor: "Romantique et détente"
  },
  {
    id: 3,
    location: "Sousse - Marina",
    date: "17 Juillet 2024",
    time: "20:15 - 01:45",
    capacity: "180 participants",
    featured: false,
    coordinates: "35.8256, 10.6369",
    accessibility: "Très bon",
    parking: "Payant - 120 places",
    equipment: "Télescopes 180mm, caméras CCD",
    contact: "+216 73 345 678",
    description: "Site moderne avec installations portuaires et éclairage contrôlé.",
    activities: ["Astrophotographie avancée", "Observation lunaire", "Atelier technique"],
    bestFor: "Photographes et passionnés"
  },
  {
    id: 4,
    location: "Sfax - Centre Ville",
    date: "18 Juillet 2024",
    time: "20:45 - 02:15",
    capacity: "120 participants",
    featured: false,
    coordinates: "34.7406, 10.7603",
    accessibility: "Moyen",
    parking: "Gratuit - 60 places",
    equipment: "Télescopes 120mm, oculaires variés",
    contact: "+216 74 456 789",
    description: "Observation urbaine avec focus sur les objets brillants et la Lune.",
    activities: ["Observation lunaire détaillée", "Planètes visibles", "Initiation jeunesse"],
    bestFor: "Observation urbaine et éducation"
  }
]

export function ObservationSitesSection() {
  const [selectedSite, setSelectedSite] = useState<number | null>(null)
  const { t } = useLanguage()

  const handleSiteSelect = (siteId: number) => {
    setSelectedSite(selectedSite === siteId ? null : siteId)
  }

  return (
    <section id="observation-sites" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-accent text-accent-foreground text-sm px-4 py-2">
            Nuit des Étoiles 2024
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Sites d'<span className="gradient-text-accent font-extrabold">Observation</span> 2024
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez nos 4 sites d'observation soigneusement sélectionnés à travers la Tunisie. 
            Chaque site offre une expérience unique adaptée à tous les niveaux d'astronomie.
          </p>
        </div>

        {/* Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {observationSites.map((site, index) => (
            <Card 
              key={site.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg animate-fade-up ${
                site.featured ? 'ring-2 ring-accent shadow-glow' : ''
              } ${selectedSite === site.id ? 'ring-2 ring-primary' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleSiteSelect(site.id)}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    {site.featured && (
                      <Badge className="mb-2 bg-accent text-accent-foreground">
                        Site Principal
                      </Badge>
                    )}
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      {site.location}
                    </h3>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className={selectedSite === site.id ? 'bg-primary text-primary-foreground' : ''}
                  >
                    {selectedSite === site.id ? 'Masquer' : 'Détails'}
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-accent" />
                    {site.date}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-accent" />
                    {site.time}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-accent" />
                    {site.capacity}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-accent" />
                    Accès {site.accessibility}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {site.description}
                </p>

                {/* Expanded Details */}
                {selectedSite === site.id && (
                  <div className="mt-6 pt-6 border-t border-border animate-fade-up">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Left Column */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <Navigation className="h-4 w-4 mr-2 text-accent" />
                            Informations Pratiques
                          </h4>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <p><strong>Coordonnées:</strong> {site.coordinates}</p>
                            <p><strong>Parking:</strong> {site.parking}</p>
                            <p><strong>Contact:</strong> {site.contact}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <Star className="h-4 w-4 mr-2 text-accent" />
                            Équipements
                          </h4>
                          <p className="text-sm text-muted-foreground">{site.equipment}</p>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <Info className="h-4 w-4 mr-2 text-accent" />
                            Activités Prévues
                          </h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {site.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Recommandé pour</h4>
                          <Badge variant="secondary" className="text-xs">
                            {site.bestFor}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-border">
                      <Button className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        Voir sur la carte
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Phone className="mr-2 h-4 w-4" />
                        Contacter le site
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-up">
          <Card className="bg-gradient-primary text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4">
                Inscription Gratuite
              </h3>
              <p className="mb-6 text-white/90">
                Choisissez votre site préféré et rejoignez-nous pour une nuit inoubliable 
                d'observation astronomique. Places limitées !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6"
                >
                  <Star className="mr-2 h-5 w-5" />
                  S'inscrire Maintenant
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/50 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm bg-white/10 text-lg px-8 py-6"
                >
                  Télécharger le Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
