import { useEffect, useState } from 'react';

export function useCalendarDayScrolling(relativeDiv: string, absoluteDiv: string): boolean {
  const [isScrolling, setIsScrolling] = useState<boolean>(false)

  useEffect(() => {
    const absElement = document.getElementById(absoluteDiv);
    const observedRelElement = document.getElementById(relativeDiv);
    let minScrollSize: number

    const resizeObserver = new ResizeObserver(
      (entries) => {
        if (absElement && absElement.clientHeight > entries[0].target.clientHeight) {
          if (minScrollSize === undefined) {
            minScrollSize = absElement.clientHeight
          } else {
            minScrollSize = minScrollSize ? minScrollSize : entries[0].target.clientHeight
          }
          setIsScrolling(true)
        }
        else if (entries[0].target.clientHeight > minScrollSize) {
          setIsScrolling(false)
        }
      }
    );

    if (observedRelElement) {
      resizeObserver.observe(observedRelElement)
    }
    return () => resizeObserver.disconnect()
  }, [absoluteDiv, relativeDiv])

  return isScrolling
}