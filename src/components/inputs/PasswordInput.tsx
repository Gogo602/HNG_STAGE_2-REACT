import type { TInput } from "../../types";


export default function PasswordInput({ label, name, value, onChange, required = false}: TInput) {
  return (
    <div className='mb-4'>
        <label htmlFor={name} className='block font-semibold mb-1'>{label}</label>
        <input 
            type="password"
            id={name}
            value={value}
            onChange={onChange}
            required={required}
            className="border border-gray-500 outline-0 focus:border-white w-full px-3 py-1.5 rounded-md"
        />
    </div>
  )
}
