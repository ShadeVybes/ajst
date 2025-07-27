import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Instagram, Facebook, Youtube, Mail } from "lucide-react"

const footerLinks = {
  "À Propos": [
    { name: "Notre Histoire", href: "#about" },
    { name: "Mission & Vision", href: "#about" },
    { name: "Leadership", href: "#about" },
    { name: "Partenaires", href: "#about" }
  ],
  "Activités": [
    { name: "Clubs Scientifiques", href: "#activities" },
    { name: "Camps d'Été", href: "#activities" },
    { name: "Séminaires", href: "#activities" },
    { name: "Nuit des Étoiles", href: "#activities" }
  ],
  "Ressources": [
    { name: "Médias", href: "#media" },
    { name: "Actualités", href: "#news" },
    { name: "Publications", href: "#news" },
    { name: "Archives", href: "#media" }
  ]
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Mail, href: "mailto:contact@ajst.tn", label: "Email" }
]

export function Footer() {
  return (
    <footer className="bg-gradient-cosmic text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-accent rounded-full animate-glow-pulse"></div>
              <span className="font-display font-bold text-2xl">AJST</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Association Jeunes Science de Tunisie - Formant les scientifiques 
              de demain depuis 1959. Explorez, innovez, créez avec nous.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-accent transition-smooth hover-glow"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display font-semibold text-lg mb-4 text-accent">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-smooth hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Association Jeunes Science de Tunisie. Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-smooth">
              Politique de Confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-smooth">
              Mentions Légales
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-smooth">
              Conditions d'Utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}