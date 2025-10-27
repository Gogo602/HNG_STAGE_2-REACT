import type { ModalProps } from "../../types";


export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    if (!isOpen) return null;

  return (
      <div className="fixed inset-0  flex items-center justify-center z-1000 backdrop-blur-sm w-full">
          <div onClick={(e) => e.stopPropagation()} className="bg-gray-600 space-y-4 p-5 shadow-2xl max-w-lg w-full m-4  flex flex-col max-h-[95vh] overflow-hidden rounded-lg border">
                <div className='flex items-center justify-between border-b-3 border-gray-300 pb-4'>
                    <h2 className="font-bold text-xl">{title}</h2>
                        <button onClick={onClose} className="text-4xl text-blue-700">
                            &times;
                        </button>
                </div>

              <div className="mt-3 overflow-y-scroll hide-bar">
                  {children}
              </div>
          </div>
    </div>
  )
}
