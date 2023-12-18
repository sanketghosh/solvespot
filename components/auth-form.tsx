"use client";

import { useCallback, useState } from "react";
import { FieldValue, useForm } from "react-hook-form";
import { Input } from "./ui/input";

/* COMPONENTS */

export default function AuthForm() {
  /* form variant */
  type Variant = "LOGIN" | "REGISTER";

  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /* useCallback to toggle the variant */
  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

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
          placeholder="Your Username"
          type="text"
          {...register("name", { required: true, maxLength: 30 })}
          disabled={isLoading}
        />
      )}
    </form>
  );
}
