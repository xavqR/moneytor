import { useState } from 'react'

export function useTitleLocation(currentLocationTitle: string): void {
  const [documentTitle] = useState<string>(currentLocationTitle)
  document.title = documentTitle
}