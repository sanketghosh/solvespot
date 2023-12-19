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
    <div>
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
      <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
        <span>
          {variant === "LOGIN"
            ? "New to NexTalk ?"
            : "Already have an account ?"}
        </span>
        <span className="underline cursor-pointer" onClick={toggleVariant}>
          {variant === "LOGIN" ? "Create an account" : "Login"}
        </span>
      </div>
    </div>
  );
}
