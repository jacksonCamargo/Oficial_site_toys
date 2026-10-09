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

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="card-surface relative w-full max-w-lg rounded-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-surface-border text-muted hover:text-gold-soft"
        >
          ✕
        </button>

        <div className="relative mb-5 aspect-square overflow-hidden rounded-xl bg-background-elevated">
          <Image src={produto.imagem} alt={produto.nome} fill className="object-contain p-6" sizes="500px" />
        </div>

        <span className="text-xs uppercase tracking-wide text-gold">{produto.categoria}</span>
        <h3 className="mt-1 font-serif-display text-2xl text-foreground">{produto.nome}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{produto.descricao}</p>
        <p className="mt-4 text-xl font-semibold text-gold-soft">
          R$ {produto.preco.toFixed(2).replace(".", ",")}
        </p>

        <a
          href={contato.whatsappMensagem(
            `Oi! Tenho interesse no produto "${produto.nome}" (R$ ${produto.preco
              .toFixed(2)
              .replace(".", ",")}).`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block w-full rounded-full bg-gold px-6 py-3 text-center font-semibold text-background transition-colors hover:bg-gold-soft"
        >
          Pedir pelo WhatsApp
        </a>
      </div>
    </div>
  );
}
