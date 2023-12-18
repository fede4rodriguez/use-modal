
import { Modal, Props } from './components/modal'
import { ModalsWrapper } from './components/modals-wrapper'
import { useModals } from './hooks/use-modals'

function App() {
  

  return (
    <main className='min-h-screen grid place-content-center gap-4'>
      <header className='max-w-md'>
        <h1 className='text-4xl font-bold mb-4'>Ejemplo de modales globales en ReactJs</h1>
        <p>
          Muchas veces necesitamos tener modales que se renderizan globalmente y no en el componente que lo abre
        </p> 
        <p>
          Un claro ejemplo se da en NextJs: Un botón de eliminar en una card de una lista de elementos, 
          al abrir el modal y eliminar el elemento, la server action refresca la pagina, 
          la card deja de existir, y el modal junto con la card, eso no nos permite mostrar un mensaje de eliminado con éxito.
        </p>        
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
