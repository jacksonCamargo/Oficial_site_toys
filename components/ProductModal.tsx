"use client";

import Image from "next/image";
import { useEffect } from "react";
import { contato, type Produto } from "@/lib/site-data";

export default function ProductModal({
  produto,
  onClose,
}: {
  produto: Produto | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!produto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [produto, onClose]);

  if (!produto) return null;

  const claro = produto.categoria === "Papelaria";
  const precoTexto = `${produto.precoAPartir ? "a partir de " : ""}R$ ${produto.preco
    .toFixed(2)
    .replace(".", ",")}`;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className={
          claro
            ? "relative w-full max-w-lg rounded-2xl border border-[#e8d9e3] bg-white p-6"
            : "card-surface relative w-full max-w-lg rounded-2xl p-6"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className={`absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border ${
            claro
              ? "border-[#e8d9e3] text-[#8a7580] hover:text-[#c9789a]"
              : "border-surface-border text-muted hover:text-gold-soft"
          }`}
        >
          ✕
        </button>

        <div
          className={`relative mb-5 aspect-square overflow-hidden rounded-xl ${
            claro ? "bg-[#fdf6f8]" : "bg-background-elevated"
          }`}
        >
          <Image src={produto.imagem} alt={produto.nome} fill className="object-contain p-6" sizes="500px" />
          {produto.ilustracao && (
            <span
              className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                claro ? "bg-[#f2b5c4] text-[#6b2f41]" : "bg-surface-border text-muted"
              }`}
            >
              Ilustração
            </span>
          )}
        </div>

        <span className={`text-xs uppercase tracking-wide ${claro ? "text-[#c9789a]" : "text-gold"}`}>
          {produto.categoria}
        </span>
        <h3 className={`mt-1 font-serif-display text-2xl ${claro ? "text-[#4a3540]" : "text-foreground"}`}>
          {produto.nome}
        </h3>
        <p className={`mt-2 text-sm leading-relaxed ${claro ? "text-[#8a7580]" : "text-muted"}`}>
          {produto.descricao}
        </p>
        <p className={`mt-4 text-xl font-semibold ${claro ? "text-[#c9789a]" : "text-gold-soft"}`}>
          {precoTexto}
        </p>

        <a
          href={contato.whatsappMensagem(
            `Oi! Tenho interesse no produto "${produto.nome}" (${precoTexto}).`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={
            claro
              ? "mt-6 block w-full rounded-full bg-[#e0a9c0] px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-[#c9789a]"
              : "mt-6 block w-full rounded-full bg-gold px-6 py-3 text-center font-semibold text-background transition-colors hover:bg-gold-soft"
          }
        >
          Pedir pelo WhatsApp
        </a>
      </div>
    </div>
  );
}
