import { create } from "zustand";

interface RegisterModal {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useRegisterModal = create<RegisterModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;
