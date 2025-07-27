import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Phone, Mail, ExternalLink } from "lucide-react"

// Sample club data - in a real app this would come from an API
const tunisiaClubs = [
  {
    id: 1,
    name: "AJST Tunis",
    governorate: "Tunis",
    coordinates: { lat: 36.8065, lng: 10.1815 },
    address: "Avenue Habib Bourguiba, Tunis",
    members: 45,
    disciplines: ["Robotique", "Astronomie", "Informatique"],
    contact: "+216 71 123 456",
    email: "tunis@ajst.tn",
    established: 1959,
    featured: true
  },
  {
    id: 2,
    name: "AJST Sfax",
    governorate: "Sfax",
    coordinates: { lat: 34.7406, lng: 10.7603 },
    address: "Rue de la République, Sfax",
    members: 38,
    disciplines: ["Écologie", "Chimie", "Physique"],
    contact: "+216 74 987 654",
    email: "sfax@ajst.tn",
    established: 1965,
    featured: false
  },
  {
    id: 3,
    name: "AJST Sousse",
    governorate: "Sousse",
    coordinates: { lat: 35.8256, lng: 10.6369 },
    address: "Boulevard 14 Janvier, Sousse",
    members: 32,
    disciplines: ["Robotique", "Électronique", "Mathématiques"],
    contact: "+216 73 456 789",
    email: "sousse@ajst.tn",
    established: 1968,
    featured: false
  },
  {
    id: 4,
    name: "AJST Kairouan",
    governorate: "Kairouan",
    coordinates: { lat: 35.6781, lng: 10.0963 },
    address: "Avenue de l'Indépendance, Kairouan",
    members: 28,
    disciplines: ["Astronomie", "Biologie", "Géologie"],
    contact: "+216 77 321 654",
    email: "kairouan@ajst.tn",
    established: 1972,
    featured: false
  },
  {
    id: 5,
    name: "AJST Gabès",
    governorate: "Gabès",
    coordinates: { lat: 33.8815, lng: 10.0982 },
    address: "Rue Farhat Hached, Gabès",
    members: 25,
    disciplines: ["Écologie", "Océanographie", "Climatologie"],
    contact: "+216 75 654 321",
    email: "gabes@ajst.tn",
    established: 1975,
    featured: false
  }
]

export function ClubsMapSection() {
  const [selectedClub, setSelectedClub] = useState<typeof tunisiaClubs[0] | null>(null)
  const [hoveredClub, setHoveredClub] = useState<number | null>(null)

  return (
    <section id="clubs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Nos <span className="gradient-text-accent font-extrabold">Clubs</span> en Tunisie
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plus de 30 clubs actifs répartis dans tous les gouvernorats de Tunisie, 
            chacun développant l'excellence scientifique dans sa région.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] relative overflow-hidden animate-fade-up">
              <CardContent className="p-0 h-full">
                {/* Tunisia Map SVG Outline */}
                <div className="relative w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-full max-w-md mx-auto mb-8">
                      {/* Simplified Tunisia outline with club pins */}
                      <svg viewBox="0 0 400 300" className="w-full h-auto">
                        {/* Tunisia outline */}
                        <path
                          d="M50 80 Q60 70 80 75 L120 70 Q140 65 160 70 L200 75 Q220 80 240 85 L280 90 Q300 95 320 100 L340 110 Q350 120 345 140 L340 160 Q335 180 325 200 L315 220 Q300 240 280 250 L260 255 Q240 260 220 255 L200 250 Q180 245 160 240 L140 235 Q120 230 100 220 L80 210 Q60 200 50 180 L45 160 Q40 140 42 120 L45 100 Q47 90 50 80 Z"
                          fill="hsl(var(--muted))"
                          stroke="hsl(var(--border))"
                          strokeWidth="2"
                          className="transition-colors duration-300"
                        />
                        
                        {/* Club pins */}
                        {tunisiaClubs.map((club, index) => (
                          <g key={club.id}>
                            <circle
                              cx={100 + index * 40}
                              cy={120 + (index % 2) * 30}
                              r={hoveredClub === club.id ? "8" : "6"}
                              fill={club.featured ? "hsl(var(--accent))" : "hsl(var(--secondary))"}
                              className="cursor-pointer transition-all duration-300 animate-pulse"
                              style={{ animationDelay: `${index * 0.2}s` }}
                              onMouseEnter={() => setHoveredClub(club.id)}
                              onMouseLeave={() => setHoveredClub(null)}
                              onClick={() => setSelectedClub(club)}
                            />
                            <text
                              x={100 + index * 40}
                              y={135 + (index % 2) * 30}
                              textAnchor="middle"
                              className="text-xs font-medium fill-foreground cursor-pointer"
                              onClick={() => setSelectedClub(club)}
                            >
                              {club.governorate}
                            </text>
                          </g>
                        ))}
                      </svg>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-display font-bold">Carte Interactive des Clubs AJST</h3>
                      <p className="text-muted-foreground">
                        Cliquez sur les épingles pour découvrir nos clubs régionaux
                      </p>
                      <div className="flex justify-center space-x-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-accent rounded-full"></div>
                          <span>Club Principal</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-secondary rounded-full"></div>
                          <span>Club Régional</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Club Information Panel */}
          <div className="space-y-6">
            {selectedClub ? (
              <Card className="animate-scale-in">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-display">{selectedClub.name}</CardTitle>
                    {selectedClub.featured && (
                      <Badge className="bg-accent text-accent-foreground">
                        Club Principal
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-sm">{selectedClub.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-4 w-4 text-accent" />
                      <span className="text-sm">{selectedClub.members} membres actifs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-accent" />
                      <span className="text-sm">{selectedClub.contact}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-accent" />
                      <span className="text-sm">{selectedClub.email}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Disciplines</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedClub.disciplines.map((discipline) => (
                        <Badge key={discipline} variant="secondary">
                          {discipline}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-3">
                      Établi en {selectedClub.established}
                    </p>
                    <Button className="w-full" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visiter le Club
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-display font-semibold mb-2">
                    Sélectionnez un Club
                  </h3>
                  <p className="text-muted-foreground">
                    Cliquez sur une épingle de la carte pour voir les détails du club
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Quick Stats */}
            <Card className="animate-fade-up">
              <CardContent className="p-6">
                <h3 className="font-display font-semibold mb-4">Statistiques Réseau</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Clubs</span>
                    <span className="font-semibold">30+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Membres Actifs</span>
                    <span className="font-semibold">1000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Gouvernorats</span>
                    <span className="font-semibold">24/24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Disciplines</span>
                    <span className="font-semibold">15</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}