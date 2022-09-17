import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  idLabel: string
  textLabel: string
}

export function Input({ idLabel, textLabel, ...rest }: Props) {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={idLabel} className="text-white font-semibold"> { textLabel } </label>
      <input 
        id={idLabel}
        className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
        { ...rest }
      />
    </div>
  )
}