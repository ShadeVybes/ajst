import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { LanguageToggle } from "@/components/ui/language-toggle"
import { useLanguage } from "@/components/providers/LanguageProvider"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { name: t.nav.home, href: '#hero' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.activities, href: '#activities' },
    { name: 'Nos Clubs', href: '#clubs' },
    { name: 'Nuit des Étoiles', href: '#nuit-etoiles' },
    { name: t.nav.media, href: '#media' },
    { name: t.nav.news, href: '#news' },
    { name: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Prevent scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed z-50 transition-smooth ${
      isScrolled 
        ? 'top-0 left-0 right-0 bg-background/90 backdrop-blur-lg shadow-elegant border-b border-border/50' 
        : 'top-2 left-2 right-2 md:top-0 md:left-0 md:right-0 bg-black/30 backdrop-blur-md border border-white/20 md:border-0 rounded-lg md:rounded-none shadow-lg'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 z-50">
            <div className="w-8 h-8 bg-gradient-accent rounded-full animate-glow-pulse"></div>
            <span className={`font-display font-bold text-xl transition-smooth ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>AJST</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative transition-smooth group ${
                  isScrolled 
                    ? 'text-foreground hover:text-accent' 
                    : 'text-white hover:text-accent'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2 z-50">
            <div className={isScrolled ? '' : 'text-white'}>
              <LanguageToggle />
            </div>
            <div className={isScrolled ? '' : 'text-white'}>
              <ModeToggle />
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden transition-smooth relative ${
                isScrolled ? 'text-foreground hover:text-accent' : 'text-white hover:text-accent'
              }`}
            >
              <div className={`transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
                <Menu className="h-6 w-6" />
              </div>
              <div className={`absolute transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`}>
                <X className="h-6 w-6" />
              </div>
            </Button>
          </div>
        </div>

        {/* Simple Mobile & Tablet Navigation */}
        <div className={`
          md:hidden fixed inset-0 top-0 z-40
          transition-all duration-300 ease-out
          ${isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
          }
        `}>
          {/* Simple White Background */}
          <div className="absolute inset-0 bg-white"></div>

          {/* Simple Menu Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8">
            {/* Simple Navigation List */}
            <div className="space-y-6">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    block w-full text-left text-2xl font-display text-primary
                    py-4 border-b border-gray-200
                    transition-all duration-200
                    hover:text-accent hover:border-accent
                    ${isMenuOpen 
                      ? 'opacity-100' 
                      : 'opacity-0'
                    }
                  `}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' 
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Simple Controls */}
            <div className={`
              flex items-center justify-center space-x-8 mt-12 pt-8 border-t border-gray-200
              transition-all duration-200
              ${isMenuOpen 
                ? 'opacity-100' 
                : 'opacity-0'
              }
            `}
            style={{ 
              transitionDelay: isMenuOpen ? `${navItems.length * 50}ms` : '0ms' 
            }}>
              <LanguageToggle />
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}