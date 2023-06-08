import { useEffect, useState } from "react"

const useMatchMedia = (mediaQuery: string, initialValue: boolean) => {

  const [isMatching, setIsMatching] = useState(initialValue)

  useEffect(() => {

    const watcher = window.matchMedia(mediaQuery)
    setIsMatching(watcher.matches)

    const listener = (matches: MediaQueryListEvent) => {
      setIsMatching(matches.matches)
    }

    watcher.addEventListener('change', listener)

    return () => {
      return watcher.removeEventListener('change', listener)
    }
  }, [mediaQuery])

  return isMatching
}

export default useMatchMedia;