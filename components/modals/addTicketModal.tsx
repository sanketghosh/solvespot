"use client";

import useAddTicketModal from "@/hooks/useAddTicketModal";
import Modal from "@/components/modals/modal";

function Body() {
  return <h1>Add Ticket Modal</h1>;
}

export default function AddTicketModal() {
  function onSubmit() {}

  const addTicketModal = useAddTicketModal();

  return (
    <Modal
      title="Add Ticket"
      description="Fill the details and add your tickets to solve problem"
      onModalClose={addTicketModal.onClose}
      isModalOpen={addTicketModal.isOpen}
      body={<Body />}
      onSubmit={onSubmit}
    />
  );
}
