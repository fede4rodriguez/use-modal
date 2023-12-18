import { create } from 'zustand'

export interface ModalProps<T = undefined> { 
  props: T,
  modalKey: string, 
  close: () => void 
}

interface UseModalProps<T> {
  Component: React.FC<ModalProps<T>>
  props?: T
}

interface UseModals {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modals: Array<UseModalProps<any> & { modalKey: string, close: ()=> void }>
  addModal: <T>(props: UseModalProps<T>) => void
  removeModal: ({modalKey}: { modalKey: string}) => void
  closeAllModals: () => void
}

export const useModals = create<UseModals>((set) => ({
  modals: [],
  addModal: <T>({ Component, props }: UseModalProps<T>) => {
    const newKey = Math.random().toString(36).substring(7)
    set((state) => ({ 
      modals: [...state.modals, { Component, props, modalKey: newKey, close: () => state.removeModal({modalKey: newKey}) }] 
    }))
  },
  removeModal: ({modalKey}: { modalKey: string}) => {
    set((state) => ({ modals: state.modals.filter((item) => item.modalKey !== modalKey) }));
  },
  closeAllModals: () => {
    set({ modals: [] });
  }
}))