"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import type { ContactFormData } from "@/types";

interface ContactFormProps {
  variant?: "hero" | "section";
}

export function ContactForm({ variant = "section" }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // TODO: replace with real API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Form data:", data);
    reset();
  };

  const inputClass =
    "w-full px-4 py-3 bg-white border border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-light)] focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-200 rounded-sm text-sm";

  const errorClass = "text-red-500 text-xs mt-1";

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="font-semibold text-[var(--color-primary)]">
          Заявка отправлена!
        </p>
        <p className="text-sm text-[var(--color-text-muted)]">
          Мы перезвоним вам в течение 15 минут
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      {/* Name */}
      <div>
        <input
          {...register("name", { required: "Введите ваше имя" })}
          type="text"
          placeholder="Ваше имя *"
          className={inputClass}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <input
          {...register("phone", {
            required: "Введите номер телефона",
            pattern: {
              value: /^[\+\d\s\-\(\)]{7,20}$/,
              message: "Введите корректный номер",
            },
          })}
          type="tel"
          placeholder="Телефон *"
          className={inputClass}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      {/* Message (optional in section variant) */}
      {variant === "section" && (
        <div>
          <textarea
            {...register("message")}
            placeholder="Опишите задачу (необязательно)"
            rows={3}
            className={`${inputClass} resize-none`}
          />
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        disabled={isSubmitting}
      >
        {isSubmitting ? "Отправляем..." : "Оставить заявку"}
      </Button>

      <p className="text-xs text-center text-[var(--color-text-light)]">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="/privacy" className="underline hover:text-[var(--color-accent)]">
          политикой конфиденциальности
        </a>
      </p>
    </form>
  );
}
