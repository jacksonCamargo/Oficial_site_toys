"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { contato } from "@/lib/site-data";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#produtos", label: "Produtos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-surface-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:py-4">
        <Link href="#inicio" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Toys Sublimação"
            width={40}
            height={40}
            className="h-9 w-9 md:h-10 md:w-10 rounded-full"
            priority
          />
          <span className="font-serif-display text-lg md:text-xl tracking-wide text-foreground">
            Toys <span className="gold-text font-semibold">Sublimação</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-muted transition-colors hover:text-gold-soft"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={contato.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border gold-border bg-gold/10 px-5 py-2 text-sm font-medium text-gold-soft transition-colors hover:bg-gold hover:text-background"
          >
            Falar no WhatsApp
          </a>
        </div>

        <button
          className="md:hidden rounded-md border border-surface-border p-2 text-foreground"
          onClick={() => setAberto((v) => !v)}
          aria-label="Abrir menu"
        >
          <span className="block h-0.5 w-5 bg-foreground mb-1" />
          <span className="block h-0.5 w-5 bg-foreground mb-1" />
          <span className="block h-0.5 w-5 bg-foreground" />
        </button>
      </div>

      {aberto && (
        <div className="md:hidden border-t border-surface-border bg-background-elevated px-5 py-4">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setAberto(false)}
                className="text-sm text-muted hover:text-gold-soft"
              >
                {l.label}
              </a>
            ))}
            <a
              href={contato.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full border gold-border bg-gold/10 px-5 py-2 text-center text-sm font-medium text-gold-soft"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
