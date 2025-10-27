import type { TextareaHTMLAttributes } from "react";


interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'type'> {
  label: string;
}

export default function TextAreaInput({ label, name, value, onChange, required = false}: TextAreaProps) {
  return (
    <div className='mb-4'>
        <label htmlFor={name} className='block font-semibold'>{label}</label>
        <textarea 
            id={name}
            value={value}
            onChange={onChange}
            required={required}
            className="border border-gray-500 outline-0 focus:border-white w-full px-3 py-1.5 rounded-md"
        />
    </div>
  )
}
