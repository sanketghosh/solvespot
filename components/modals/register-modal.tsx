"use client";

import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import Modal from "@/components/modals/modal";
import { Input } from "@/components/ui/input";

interface FormBodyProps {
  variant: string;
}

function FormBody({ variant }: FormBodyProps) {
  // const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /* useCallback to toggle the variant */
  /* const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]); */

  interface IFormInput {
    name: string;
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  return (
    <form className="space-y-6 py-5">
      {variant === "REGISTER" && (
        <Input
          id="username"
          placeholder="Username"
          type="text"
          {...register("name", { required: true, maxLength: 15 })}
          disabled={isLoading}
        />
      )}
      <Input
        id="email"
        placeholder="Email address"
        type="email"
        {...register("email", { required: true })}
        disabled={isLoading}
      />
      <Input
        id="password"
        placeholder="Password"
        type="password"
        {...register("password", { required: true, maxLength: 30 })}
        disabled={isLoading}
      />
    </form>
  );
}

interface FormFooterProps {
  variant: string;
  toggleVariant: () => void;
}

function FormFooter({ variant, toggleVariant }: FormFooterProps) {
  return (
    <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
      <span>
        {variant === "LOGIN" ? "New to NexTalk ?" : "Already have an account ?"}
      </span>
      <span className="underline cursor-pointer" onClick={toggleVariant}>
        {variant === "LOGIN" ? "Create an account" : "Login"}
      </span>
    </div>
  );
}

export default function RegisterModal() {
  function onSubmit() {
    // Add registration submission logic here
  }

  const registerModal = useRegisterModal();

  return (
    <Modal
      title={registerModal.variant === "LOGIN" ? "Login" : "Register"}
      description={
        registerModal.variant === "LOGIN"
          ? "Welcome back! Login to continue."
          : "Get registered and add your ticket"
      }
      onModalClose={registerModal.onClose}
      isModalOpen={registerModal.isOpen}
      body={<FormBody variant={registerModal.variant} />}
      footer={
        <FormFooter
          variant={registerModal.variant}
          toggleVariant={registerModal.toggleVariant}
        />
      }
      onSubmit={onSubmit}
      primaryButtonLabel={
        registerModal.variant === "LOGIN" ? "Login" : "Register"
      }
    />
  );
}
