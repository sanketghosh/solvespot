import { create } from "zustand";

type Variant = "LOGIN" | "REGISTER";

interface RegisterModal {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  variant: Variant;
  toggleVariant: () => void;
}

const useRegisterModal = create<RegisterModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  variant: "LOGIN",
  toggleVariant: () =>
    set((state) => ({
      variant: state.variant === "LOGIN" ? "REGISTER" : "LOGIN",
    })),
}));

export default useRegisterModal;
