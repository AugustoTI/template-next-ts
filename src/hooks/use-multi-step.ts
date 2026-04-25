'use client'

import { useCallback, useEffect, useState } from 'react'

interface UseMultiStepParams {
  steps: number
  defaultStep?: number
}

export function useMultiStep({ steps, defaultStep = 1 }: UseMultiStepParams) {
  const [currentStep, setCurrentStep] = useState(defaultStep)

  useEffect(() => {
    setCurrentStep(defaultStep)
  }, [defaultStep])

  const nextStep = useCallback(() => {
    setCurrentStep(prev => Math.min(prev + 1, steps))
  }, [steps])

  const previousStep = useCallback(() => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }, [])

  const goTo = useCallback(
    (index: number) => {
      setCurrentStep(Math.max(1, Math.min(index, steps)))
    },
    [steps],
  )

  return {
    goTo,
    steps,
    nextStep,
    previousStep,
    currentStep,
    isFirstStep: currentStep === 1,
    isLastStep: currentStep === steps,
  }
}
