# Ejemplo de modales globales en ReactJs


Muchas veces necesitamos tener modales que se renderizan globalmente y no dentro del componente que los abre.
Un claro ejemplo se da en Next.js: tenemos un botón de eliminar en una tarjeta de una lista de elementos que permite abrir un modal para eliminar el elemento. Una vez eliminado, cuando la acción del servidor valida la página, esta se vuelve a renderizar y la tarjeta de ese elemento deja de existir, junto con el modal ya que estaba siendo renderizado dentro de la tarjeta. Esto nos impide mostrar un mensaje de eliminación exitosa o ejecutar otro tipo de acción posterior.
    

## Implementación

1) Instalamos [zustand](https://zustand-demo.pmnd.rs/) para el manejo de estados globales


2) Creamos un hook [useModals](./src/hooks/use-modals.ts) que se encargará de manejar los modales globales


3) Creamos un componente [ModalsWrapper](./src/components/modals-wrapper.tsx) que se encargará de renderizar los modales globales

4) Agregamos el componente ```ModalsWrapper``` en el componente raíz de la aplicación o layout

5) Los componentes modal deben implementar la interface ```ModalProps``` como en el ejemplo [Modal](./src/components/modal.tsx)

6) Para abrir un modal usamos el hook ```useModals``` y llamamos al método ```openModal``` pasando como parámetro el componente modal que queremos abrir como en el ejemplo [EmulatePagesRouter](./src/App.tsx#EmulatePagesRouter)

