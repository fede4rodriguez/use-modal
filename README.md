# Ejemplo de modales globales en ReactJs


Muchas veces necesitamos tener modales que se renderizan globalmentey no en el componente que lo abre.
Un claro ejemplo se da en NextJs: Un botón de eliminar en una card deuna lista de elementos, 
al abrir el modal y eliminar el elemento, la server action refrescala pagina, 
la card deja de existir, y el modal junto con la card, eso no nospermite mostrar un mensaje de eliminado con éxito.
    

## Implementación

1) Instalamos [zustand](https://zustand-demo.pmnd.rs/) para el manejo de estados globales


2) Creamos un hook [useModals](./src/hooks/use-modals.ts) que se encargará de manejar los modales globales


3) Creamos un componente [ModalsWrapper](./src/components/modals-wrapper.tsx) que se encargará de renderizar los modales globales

4) Agregamos el componente ```ModalsWrapper``` en el componente raíz de la aplicación o layout

5) Los componentes modal deben implementar la interface ```ModalProps``` como en el ejemplo [Modal](./src/components/modal.tsx)

6) Para abrir un modal usamos el hook ```useModals``` y llamamos al método ```openModal``` pasando como parámetro el componente modal que queremos abrir como en el ejemplo [EmulatePagesRouter](./src/App.tsx#EmulatePagesRouter)

