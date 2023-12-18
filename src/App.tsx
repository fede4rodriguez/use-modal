
import { Modal, Props } from './components/modal'
import { ModalsWrapper } from './components/modals-wrapper'
import { useModals } from './hooks/use-modals'

function App() {
  

  return (
    <main className='min-h-screen grid place-content-center gap-4'>
      <header className='max-w-md'>
        <h1 className='text-4xl font-bold mb-4'>Ejemplo de modales globales en ReactJs</h1>      
      </header>
      <EmulatePagesRouter />
      <ModalsWrapper />
    </main>
  )
}

function EmulatePagesRouter() {
  const { addModal } = useModals()

  const handleAddModal = () => {
    addModal<Props>({ Component: Modal, props: { text: 'Texto de prueba'}})
  }

  return (
    <section>    
      <button 
        className="mt-4 px-4 py-2 rounded-lg bg-zinc-500 text-white"
        onClick={handleAddModal}
      >
        Abrir modal
      </button>      
    </section>
  )

}


export default App
