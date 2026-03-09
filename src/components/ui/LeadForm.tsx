"use client";

import React, { useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import { Button } from "./Button";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
    agreed: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          description: formData.description,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ошибка отправки заявки");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка отправки заявки");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="reveal-x bg-white p-8 shadow-2xl flex flex-col items-center justify-center text-center min-h-125 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-accent" />
        <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-accent" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-accent" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-accent" />

        <div className="relative">
          <div className="absolute -inset-6 bg-accent/10 rounded-full animate-pulse" />
          <CheckCircle
            size={56}
            className="text-accent relative"
            weight="duotone"
          />
        </div>
        <p className="font-display text-text text-lg font-bold uppercase tracking-wide mt-6">
          Заявка принята!
        </p>
        <p className="font-body text-muted text-sm mt-2">
          Позвоним в ближайшее время
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="reveal-x bg-white p-8 shadow-2xl transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-accent/30 group-hover:border-accent transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-accent/30 group-hover:border-accent transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-accent/30 group-hover:border-accent transition-colors duration-300" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-accent/30 group-hover:border-accent transition-colors duration-300" />

      <div className="relative mb-8">
        <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent-h" />
        <h3 className="font-display text-xl font-black text-text uppercase tracking-wider pl-4">
          Получить консультацию
        </h3>
      </div>

      <div className="space-y-5">
        <div>
          <label className="font-mono text-[10px] text-muted uppercase tracking-widest mb-2 block">
            Имя *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border-2 border-border px-4 py-3 text-sm text-text bg-bg focus:outline-none focus:border-accent focus:bg-white transition-all placeholder:text-muted"
            placeholder="Ваше имя"
          />
        </div>

        <div>
          <label className="font-mono text-[10px] text-muted uppercase tracking-widest mb-2 block">
            Телефон *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border-2 border-border px-4 py-3 text-sm text-text bg-bg focus:outline-none focus:border-accent focus:bg-white transition-all placeholder:text-muted"
            placeholder="+7 (999) 123-45-67"
          />
        </div>

        <div>
          <label className="font-mono text-[10px] text-muted uppercase tracking-widest mb-2 block">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-2 border-border px-4 py-3 text-sm text-text bg-bg focus:outline-none focus:border-accent focus:bg-white transition-all placeholder:text-muted"
            placeholder="example@example.com"
          />
        </div>

        <div>
          <label className="font-mono text-[10px] text-muted uppercase tracking-widest mb-2 block">
            Описание проекта
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full border-2 border-border px-4 py-3 text-sm text-text bg-bg focus:outline-none focus:border-accent focus:bg-white transition-all resize-none placeholder:text-muted"
            placeholder="Расскажите о вашем проекте"
          />
        </div>

        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            name="agreed"
            id="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            required
            className="w-4 h-4 mt-0.5 border-2 border-border accent-accent cursor-pointer"
          />
          <label
            htmlFor="agreed"
            className="font-body text-[13px] text-muted leading-relaxed"
          >
            Я согласен на обработку персональных данных в соответствии с{" "}
            <a
              href="#"
              className="text-accent hover:text-accent-h transition-colors underline"
            >
              политикой конфиденциальности
            </a>
          </label>
        </div>
      </div>

      {error && (
        <div className="mt-5 p-4 bg-red-50 border-2 border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full mt-8"
        disabled={loading}
      >
        {loading ? "Отправка..." : "Отправить заявку"}
      </Button>
    </form>
  );
}
