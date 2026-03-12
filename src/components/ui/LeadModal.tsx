"use client";

import React, { useEffect } from "react";
import { X } from "@phosphor-icons/react";
import { LeadForm } from "./LeadForm";
import { useModal } from "@/context/ModalContext";

export function LeadModal() {
  const { isOpen, closeModal } = useModal();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleKey);

    return () => document.removeEventListener("keydown", handleKey);
  }, [closeModal]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 bg-dark/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeModal}
      />

      <div
        className={`relative z-10 w-full max-w-lg transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        <button
          onClick={closeModal}
          className="absolute -top-4 -right-4 z-20 w-10 h-10 bg-accent text-white flex items-center justify-center hover:bg-accent-h transition-colors duration-200"
          aria-label="Закрыть"
        >
          <X size={20} weight="bold" />
        </button>

        <LeadForm animateOnScroll={false} />
      </div>
    </div>
  );
}
