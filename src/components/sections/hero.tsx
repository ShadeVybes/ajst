import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/providers/LanguageProvider"
import { useState, useEffect } from "react"
import heroImage from "@/assets/hero-science.jpg"

export function HeroSection() {
  const { t } = useLanguage()
  const [counters, setCounters] = useState({
    clubs: 0,
    heritage: 0,
    scientists: 0,
    disciplines: 0
  })

  const finalValues = {
    clubs: 30,
    heritage: 60,
    scientists: 1000,
    disciplines: 15
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60 // 60 steps
    const interval = duration / steps

    const timer = setInterval(() => {
      setCounters(prev => ({
        clubs: Math.min(prev.clubs + finalValues.clubs / steps, finalValues.clubs),
        heritage: Math.min(prev.heritage + finalValues.heritage / steps, finalValues.heritage),
        scientists: Math.min(prev.scientists + finalValues.scientists / steps, finalValues.scientists),
        disciplines: Math.min(prev.disciplines + finalValues.disciplines / steps, finalValues.disciplines)
      }))
    }, interval)

    const timeout = setTimeout(() => {
      clearInterval(timer)
      setCounters(finalValues)
    }, duration)

    return () => {
      clearInterval(timer)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Young scientists in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-cosmic opacity-80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-beautiful-blue rounded-full animate-floating opacity-70"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-electric-purple rounded-full animate-floating opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-accent rounded-full animate-floating opacity-50" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-60 left-1/4 w-2 h-2 bg-beautiful-blue rounded-full animate-floating opacity-40" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-electric-purple rounded-full animate-floating opacity-30" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-white mt-24 md:mt-32 lg:mt-0">
            <span className="inline-block overflow-hidden">
              <span className="block animate-text-reveal" style={{ animationDelay: '0.2s' }}>
                {t.hero.title.split(' ').slice(0, 2).join(' ')}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-text-reveal gradient-text-accent font-extrabold" style={{ animationDelay: '0.5s' }}>
                {t.hero.title.split(' ').slice(2).join(' ')}
              </span>
            </span>
          </h1>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            <span className="block animate-text-reveal" style={{ animationDelay: '1s' }}>
              {t.hero.subtitle}
            </span>
            <br />
            <span className="text-accent font-medium block animate-text-reveal" style={{ animationDelay: '1.2s' }}>
              {t.hero.tagline}
            </span>
          </p>
        </div>

        <div className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '1.4s' }}>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow hover-lift transition-smooth text-lg px-8 py-6 group"
          >
            <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            {t.hero.exploreClubs}
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/50 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm bg-white/10 transition-smooth text-lg px-8 py-6 group"
          >
            {t.hero.ourHistory}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Animated Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up" style={{ animationDelay: '1.6s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-mono">
              {Math.round(counters.clubs)}+
            </div>
            <div className="text-gray-300 text-sm md:text-base">{t.hero.stats.activeClubs}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-mono">
              {Math.round(counters.heritage)}
            </div>
            <div className="text-gray-300 text-sm md:text-base">{t.hero.stats.heritage}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-mono">
              {Math.round(counters.scientists)}+
            </div>
            <div className="text-gray-300 text-sm md:text-base">{t.hero.stats.youngScientists}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-mono">
              {Math.round(counters.disciplines)}
            </div>
            <div className="text-gray-300 text-sm md:text-base">{t.hero.stats.disciplines}</div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-floating">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer group">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse group-hover:bg-white transition-colors"></div>
        </div>
        <p className="text-white/70 text-xs mt-2 text-center">Scroll</p>
      </div>
    </section>
  )
}