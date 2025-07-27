import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleMode = () => {
    const newMode = !isDark
    setIsDark(newMode)
    
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleMode}
      className="relative overflow-hidden transition-smooth hover-glow"
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all duration-500 ${
        isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
      }`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-500 ${
        isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
      }`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}