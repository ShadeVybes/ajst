import { Globe, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage, type Language } from "@/lib/i18n"

const languages = [
  { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
  { code: 'en' as Language, name: 'English', flag: '��' },
  { code: 'ar' as Language, name: 'العربية', flag: '🇹🇳' },
]

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    // Add smooth transition effect
    document.documentElement.style.transition = 'opacity 0.3s ease-in-out'
    document.documentElement.style.opacity = '0.95'
    setTimeout(() => {
      document.documentElement.style.opacity = '1'
      document.documentElement.style.transition = ''
    }, 300)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="transition-smooth hover-glow"
        >
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="animate-scale-in">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`transition-smooth cursor-pointer flex items-center justify-between ${
              language === lang.code ? 'bg-accent text-accent-foreground' : ''
            }`}
          >
            <div className="flex items-center">
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </div>
            {language === lang.code && (
              <Check className="h-4 w-4" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}