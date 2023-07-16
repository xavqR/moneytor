import { useEffect, useState } from 'react'

export function useMatchMedia(mediaQuery: string, initialValue: boolean): boolean {
  const [isMatching, setIsMatching] = useState<boolean>(initialValue)

  useEffect(() => {
    const watcher = window.matchMedia(mediaQuery)
    setIsMatching(watcher.matches)
    const onWindowMediaQueryChange = (matches: MediaQueryListEvent) => {
      setIsMatching(matches.matches)
    }

    watcher.addEventListener('change', onWindowMediaQueryChange)

    return () => {
      return watcher.removeEventListener('change', onWindowMediaQueryChange)
    }
  }, [mediaQuery])

  return isMatching
}
