import { useMediaQuery } from '@vueuse/core'
import { BREAKPOINTS } from '@/shared/config/breakpoints'

export function useBreakpoint() {
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.tablet - 1}px)`)
  const isTablet = useMediaQuery(`(min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop - 1}px)`)
  const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.desktop}px)`)

  return {
    isMobile,
    isTablet,
    isDesktop,
  }
}