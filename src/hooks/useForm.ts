import { useState } from 'react'

type RegisterProps = {
  maxLength?: number
  //   required?: boolean
  //   validate?: (value: string) => void
}

const DEFAULT_MAX_LENGTH = 10

function useForm() {
  const [value, setValue] = useState('')
  const handleSubmit = (userCallback: (val: string) => void) => {
    return (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault() // 폼의 기본 제출 동작 방지
      if (!value) return // 아무것도 안쓰면 return
      userCallback(value) //user에게 value 전달
    }
  }

  const register = ({ maxLength }: RegisterProps = { maxLength: DEFAULT_MAX_LENGTH }) => {
    const handleChange = (maxLength) => (e) => {
      const newValue = e.target.value
      if (newValue.length <= maxLength) {
        setValue(newValue)
      }
    }

    return {
      value,
      onChange: handleChange(maxLength),
    }
  }

  return { register, handleSubmit, setValue }
}

export default useForm
