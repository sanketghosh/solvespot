"use client";

import Modal from "@/components/modals/modal";
import useRegisterModal from "@/hooks/useRegisterModal";

function Body() {
  return <h1>Register Modal</h1>;
}

export default function RegisterModal() {
  function onSubmit() {}

  const registerModal = useRegisterModal();

  return (
    <Modal
      title="Registration"
      description="Get registered and add your ticket"
      body={<Body />}
      onSubmit={onSubmit}
      onModalClose={registerModal.onClose}
      isModalOpen={registerModal.isOpen}
    />
  );
}
