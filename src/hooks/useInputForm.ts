import { useState } from 'react'

type useInputFormResult = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void
]

const useInputForm = (defaultValue: string): useInputFormResult => {
  const [input, setInput] = useState(defaultValue)
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  return [input, handleInput]
}
export default useInputForm
