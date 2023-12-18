import { useModals } from "../hooks/use-modals";

export function ModalsWrapper() {
const { modals/*, closeAllModals*/ } = useModals()

  // se podrian cerrar los modales al navegar entre paginas con closeAllModals

  return (
    <>
      {
        modals?.map(({Component, props: props, modalKey, close}) => (
          <Component key={modalKey} modalKey={modalKey} props={props} close={close} />
        ))
      }
    </>
  )
}