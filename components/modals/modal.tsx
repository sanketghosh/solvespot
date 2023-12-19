"use client";

import React, { useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type ModalProps = {
  title?: string;
  description?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  disabled?: boolean;
  primaryButtonLabel?: string;
  onSubmit: () => void;
  isModalOpen?: boolean;
  onModalClose: () => void;
};

export default function Modal({
  title,
  description,
  body,
  footer,
  disabled,
  primaryButtonLabel,
  onSubmit,
  isModalOpen,
  onModalClose,
}: ModalProps) {
  const handleModalSubmit = useCallback(() => {
    if (!disabled) {
      onSubmit();
    }
  }, [onSubmit, disabled]);

  return (
    <Dialog open={isModalOpen}>
      <DialogContent closeDialog={onModalClose}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{body}</div>
        {primaryButtonLabel && (
          <Button onClick={handleModalSubmit}>{primaryButtonLabel}</Button>
        )}
        <div>{footer}</div>
      </DialogContent>
    </Dialog>
  );
}
