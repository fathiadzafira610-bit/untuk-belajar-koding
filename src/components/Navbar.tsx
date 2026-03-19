import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

interface NavbarProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }

    setIsMobileMenuOpen(false)
  }

  return (

<motion.nav
initial={{ y: -100 }}
animate={{ y: 0 }}
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
${isScrolled 
? 'backdrop-blur-md bg-gradient-to-r from-pink-500/70 to-purple-500/70 border-b border-white/20' 
: 'bg-gradient-to-r from-pink-500 to-purple-500'}`}
>

<div className="container mx-auto px-4">

<div className="flex items-center justify-between h-16 md:h-20">

{/* KIRI - LOGO */}
<h1 className="text-xl font-bold text-white">
Fathia's Portfolio
</h1>

{/* MENU DESKTOP */}
<div className="hidden md:flex items-center gap-8">

{navItems.map((item) => (

<a
key={item.label}
href={item.href}
onClick={(e) => {
e.preventDefault()
scrollToSection(item.href)
}}
className="text-white font-medium hover:text-purple-200 transition"
>

{item.label}

</a>

))}

<Button
variant="ghost"
size="icon"
onClick={toggleTheme}
className="rounded-full"
>

{isDark 
? <Sun className="h-5 w-5"/> 
: <Moon className="h-5 w-5"/>}

</Button>

</div>

{/* MOBILE BUTTON */}
<div className="flex items-center gap-2 md:hidden">

<Button
variant="ghost"
size="icon"
onClick={toggleTheme}
className="rounded-full"
>

{isDark 
? <Sun className="h-5 w-5"/> 
: <Moon className="h-5 w-5"/>}

</Button>

<Button
variant="ghost"
size="icon"
onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
>

{isMobileMenuOpen 
? <X className="h-5 w-5"/> 
: <Menu className="h-5 w-5"/>}

</Button>

</div>

</div>

</div>

{/* MOBILE MENU */}

<AnimatePresence>

{isMobileMenuOpen && (

<motion.div
initial={{ opacity:0 , height:0 }}
animate={{ opacity:1 , height:'auto' }}
exit={{ opacity:0 , height:0 }}
className="md:hidden bg-white/10 backdrop-blur-md"
>

<div className="flex flex-col px-4 py-4 gap-4">

{navItems.map((item)=>(
<a
key={item.label}
href={item.href}
onClick={(e)=>{
e.preventDefault()
scrollToSection(item.href)
}}
className="text-white font-medium hover:text-purple-200"
>

{item.label}

</a>
))}

</div>

</motion.div>

)}

</AnimatePresence>

</motion.nav>

  );
}
