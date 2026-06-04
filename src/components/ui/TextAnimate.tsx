'use client'

import { memo, useEffect, useState } from 'react'
import {
  motion,
  useReducedMotion,
  type DOMMotionComponents,
  type MotionProps,
  type Variants,
} from 'motion/react'
import { cn } from '../../lib/cn'

type AnimationType = 'text' | 'word' | 'character' | 'line'
type AnimationVariant =
  | 'fadeIn'
  | 'blurIn'
  | 'blurInUp'
  | 'blurInDown'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'scaleUp'
  | 'scaleDown'

const motionElements = {
  article: motion.article,
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  li: motion.li,
  p: motion.p,
  section: motion.section,
  span: motion.span,
} as const

type MotionElementType = Extract<keyof DOMMotionComponents, keyof typeof motionElements>

interface TextAnimateProps extends Omit<MotionProps, 'children'> {
  children: string
  className?: string
  segmentClassName?: string
  delay?: number
  duration?: number
  variants?: Variants
  as?: MotionElementType
  by?: AnimationType
  startOnView?: boolean
  once?: boolean
  animation?: AnimationVariant
  accessible?: boolean
}

const defaultContainerVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
}

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const mobileMotionQuery = '(max-width: 767px)'

function useMobileMotionPreference() {
  const [shouldUseMobileMotion, setShouldUseMobileMotion] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(mobileMotionQuery).matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobileMotionQuery)
    const updatePreference = () => setShouldUseMobileMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  return shouldUseMobileMotion
}

const defaultItemAnimationVariants: Record<AnimationVariant, { container: Variants; item: Variants }> = {
  fadeIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    },
  },
  blurIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(10px)' },
      show: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.3 } },
    },
  },
  blurInUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
      show: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: {
          y: { duration: 0.3 },
          opacity: { duration: 0.4 },
          filter: { duration: 0.3 },
        },
      },
    },
  },
  blurInDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(10px)', y: -20 },
      show: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: {
          y: { duration: 0.3 },
          opacity: { duration: 0.4 },
          filter: { duration: 0.3 },
        },
      },
    },
  },
  slideUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { y: 20, opacity: 0 },
      show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    },
  },
  slideDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { y: -20, opacity: 0 },
      show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    },
  },
  slideLeft: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: 20, opacity: 0 },
      show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    },
  },
  slideRight: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: -20, opacity: 0 },
      show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    },
  },
  scaleUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { scale: 0.5, opacity: 0 },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.3,
          scale: { type: 'spring', damping: 15, stiffness: 300 },
        },
      },
    },
  },
  scaleDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { scale: 1.5, opacity: 0 },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.3,
          scale: { type: 'spring', damping: 15, stiffness: 300 },
        },
      },
    },
  },
}

const mobileItemAnimationVariants: Record<AnimationVariant, { container: Variants; item: Variants }> = {
  ...defaultItemAnimationVariants,
  blurIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 12 },
      show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    },
  },
  blurInUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 16 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          y: { duration: 0.25 },
          opacity: { duration: 0.3 },
        },
      },
    },
  },
  blurInDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: -16 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          y: { duration: 0.25 },
          opacity: { duration: 0.3 },
        },
      },
    },
  },
}

function TextAnimateBase({
  children,
  delay = 0,
  duration = 0.3,
  variants,
  className,
  segmentClassName,
  as: Component = 'p',
  startOnView = true,
  once = false,
  by = 'word',
  animation = 'fadeIn',
  accessible = true,
  ...props
}: TextAnimateProps) {
  const MotionComponent = motionElements[Component]
  const shouldReduceMotion = useReducedMotion()
  const shouldUseMobileMotion = useMobileMotionPreference()

  if (shouldReduceMotion) {
    return (
      <MotionComponent className={cn('whitespace-pre-wrap', className)} {...props}>
        {children}
      </MotionComponent>
    )
  }

  let segments: string[] = []
  switch (by) {
    case 'word':
      segments = children.split(/(\s+)/)
      break
    case 'character':
      segments = children.split('')
      break
    case 'line':
      segments = children.split('\n')
      break
    case 'text':
    default:
      segments = [children]
      break
  }

  const finalVariants = variants
    ? {
        container: {
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              opacity: { duration: 0.01, delay },
              delayChildren: delay,
              staggerChildren: duration / Math.max(segments.length, 1),
            },
          },
        },
        item: variants,
      }
    : {
        container: {
          ...(shouldUseMobileMotion ? mobileItemAnimationVariants : defaultItemAnimationVariants)[animation].container,
          show: {
            ...(shouldUseMobileMotion ? mobileItemAnimationVariants : defaultItemAnimationVariants)[animation].container.show,
            transition: {
              delayChildren: delay,
              staggerChildren: duration / Math.max(segments.length, 1),
            },
          },
        },
        item: (shouldUseMobileMotion ? mobileItemAnimationVariants : defaultItemAnimationVariants)[animation].item,
      }

  return (
    <MotionComponent
      variants={finalVariants.container as Variants}
      initial="hidden"
      whileInView={startOnView ? 'show' : undefined}
      animate={startOnView ? undefined : 'show'}
      className={cn('whitespace-pre-wrap', className)}
      viewport={{ once }}
      aria-label={accessible ? children : undefined}
      {...props}
    >
      {accessible && <span className="sr-only">{children}</span>}
      {segments.map((segment, index) => (
        <motion.span
          key={`${by}-${segment}-${index}`}
          variants={finalVariants.item}
          className={cn(by === 'line' ? 'block' : 'inline-block whitespace-pre', segmentClassName)}
          aria-hidden={accessible ? true : undefined}
        >
          {segment}
        </motion.span>
      ))}
    </MotionComponent>
  )
}

export const TextAnimate = memo(TextAnimateBase)
