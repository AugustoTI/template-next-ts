import React, { type Dispatch, type SetStateAction } from 'react'

interface UseStepActions {
  goToNextStep: () => void
  goToPrevStep: () => void
  reset: () => void
  canGoToNextStep: boolean
  canGoToPrevStep: boolean
  setStep: Dispatch<SetStateAction<number>>
}

type SetStepCallbackType = (step: number | ((step: number) => number)) => void

export function useStep(
  maxStep: number,
  defaultStep: number = 1,
): [number, UseStepActions] {
  const [currentStep, setCurrentStep] = React.useState(defaultStep)

  const canGoToNextStep = currentStep + 1 <= maxStep
  const canGoToPrevStep = currentStep - 1 > 0

  const setStep = React.useCallback<SetStepCallbackType>(
    step => {
      // Allow value to be a function so we have the same API as useState
      const newStep = step instanceof Function ? step(currentStep) : step

      if (newStep >= 1 && newStep <= maxStep) {
        setCurrentStep(newStep)
        return
      }

      throw new Error('Step not valid')
    },
    [maxStep, currentStep],
  )

  const goToNextStep = React.useCallback(() => {
    if (canGoToNextStep) {
      setCurrentStep(step => step + 1)
    }
  }, [canGoToNextStep])

  const goToPrevStep = React.useCallback(() => {
    if (canGoToPrevStep) {
      setCurrentStep(step => step - 1)
    }
  }, [canGoToPrevStep])

  const reset = React.useCallback(() => {
    setCurrentStep(defaultStep)
  }, [defaultStep])

  return [
    currentStep,
    {
      goToNextStep,
      goToPrevStep,
      canGoToNextStep,
      canGoToPrevStep,
      setStep,
      reset,
    },
  ]
}
