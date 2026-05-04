'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'

interface ThemeSwitchProps {
  className?: string
}

export function ThemeSwitch({ className = '' }: ThemeSwitchProps) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  // Check current theme on component mount
  React.useEffect(() => {
    const savedTheme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    setTheme(savedTheme as 'light' | 'dark')
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  // Toggle theme
  const toggleTheme = React.useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }, [theme])

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-primary dark:text-white hover:opacity-80 transition-all active:scale-95 overflow-hidden ${className}`}
      aria-label="Toggle theme"
    >
      <Sun
        className={`absolute h-5 w-5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === 'light' 
            ? 'scale-100 rotate-0 opacity-100' 
            : 'scale-0 rotate-90 opacity-0'
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === 'dark' 
            ? 'scale-100 rotate-0 opacity-100' 
            : 'scale-0 -rotate-90 opacity-0'
        }`}
      />
    </button>
  )
}
