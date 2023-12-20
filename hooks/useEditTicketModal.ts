import { create } from "zustand";

interface EditTicketModal {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useEditTicketModal = create<EditTicketModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditTicketModal;
