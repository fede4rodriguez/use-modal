import { ModalProps } from "../hooks/use-modals"

export interface Props {
  text: string
}

export function Modal({ close, props }: ModalProps<Props>) {
  const { text } = props

  return (
    <div 
      onClick={close}
      className="fixed inset-0 bg-black/60 grid place-content-center"
    >
      <div className="p-8 rounded-lg bg-zinc-300">
          <h1 className="text-xl font-bold">{text}</h1>
          <button
            className="mt-4 px-4 py-2 rounded-lg bg-zinc-500 text-white"
            onClick={close}
          >
            Cerrar modal
          </button>
      </div>
    </div>
    
  )
}