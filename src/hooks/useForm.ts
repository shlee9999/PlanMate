import { useState } from 'react'

type RegisterProps = {
  maxLength?: number
}

const DEFAULT_MAX_LENGTH = 10
/**
 *
 * @returns register, handleSubmit
 */
function useForm<T extends { [key: string]: string }>() {
  const [values, setValues] = useState<T>({} as T)

  const handleSubmit = (userCallback: (data: T) => void) => {
    return (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      for (const key in values) {
        if (values[key].length === 0) return
      }
      userCallback(values)
    }
  }

  const register = (key: string, { maxLength = DEFAULT_MAX_LENGTH }: RegisterProps = {}) => {
    const handleChange = (e) => {
      const newValue = e.target.value
      if (newValue.length <= maxLength) setValues((prev) => ({ ...prev, [key]: newValue }))
    }
    return {
      value: values[key] || '',
      onChange: handleChange,
    }
  }
  const setValue = ({ key, value }: { key: keyof T; value: string }) => {
    setValues((prev) => ({ ...prev, [key]: value }))
  }
  return { register, handleSubmit, setValue }
}

export default useForm
