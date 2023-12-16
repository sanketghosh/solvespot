import { create } from "zustand";

interface AddTicketModal {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useAddTicketModal = create<AddTicketModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddTicketModal;
