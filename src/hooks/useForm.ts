import React, { LegacyRef } from 'react'
import { useState, useRef } from 'react'

type RegisterProps = {
  maxLength?: number
  isTextArea?: boolean
}

const DEFAULT_MAX_LENGTH = 10

function useForm<T extends { [key: string]: string }>() {
  const [values, setValues] = useState<T>({} as T)
  const inputRefs = useRef<{ [key in keyof T]?: React.RefObject<HTMLInputElement> }>({})
  const textareaRefs = useRef<{ [key in keyof T]?: React.RefObject<HTMLTextAreaElement> }>({})

  const handleSubmit = (userCallback: (data: T) => void) => {
    return (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      for (const key in values) {
        if (values[key].length === 0) return
      }
      userCallback(values)
    }
  }
  const registerInput = (key: keyof T, { maxLength = DEFAULT_MAX_LENGTH }: RegisterProps = {}) => {
    if (!inputRefs.current[key]) {
      inputRefs.current[key] = React.createRef<HTMLInputElement>()
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      if (newValue.length <= maxLength) setValues((prev) => ({ ...prev, [key]: newValue }))
    }
    return {
      ref: inputRefs.current[key] as React.RefObject<HTMLInputElement>,
      value: values[key] || '',
      onChange: handleChange,
    }
  }
  const registerTextarea = (key: keyof T, { maxLength = DEFAULT_MAX_LENGTH }: RegisterProps = {}) => {
    if (!textareaRefs.current[key]) {
      textareaRefs.current[key] = React.createRef<HTMLTextAreaElement>()
    }
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      console.log(e.target.value)
      const newValue = e.target.value
      if (newValue.length <= maxLength) setValues((prev) => ({ ...prev, [key]: newValue }))
    }
    return {
      ref: textareaRefs.current[key] as React.RefObject<HTMLTextAreaElement>,
      value: values[key] || '',
      onChange: handleChange,
    }
  }

  const setValue = (key: keyof T, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  const inputFocus = (key: keyof T) => {
    const ref = inputRefs.current[key]
    if (ref && ref.current) {
      ref.current.focus()
    }
  }
  const textareaFocus = (key: keyof T) => {
    const ref = textareaRefs.current[key]
    if (ref && ref.current) {
      ref.current.focus()
    }
  }

  return { registerInput, registerTextarea, handleSubmit, setValue, inputFocus, textareaFocus }
}

export default useForm
