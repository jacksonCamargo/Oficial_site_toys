"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { contato } from "@/lib/site-data";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#produtos", label: "Produtos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

const ids = links.map((l) => l.href.slice(1));

export default function Header() {
  const [aberto, setAberto] = useState(false);
  const [ativo, setAtivo] = useState(ids[0]);

  // Acompanha qual seção está visível pra destacar o item certo no menu,
  // mesmo quando o usuário rola a página sem clicar em nada.
  useEffect(() => {
    const secoes = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (secoes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visiveis = entries.filter((e) => e.isIntersecting);
        if (visiveis.length > 0) {
          const maisVisivel = visiveis.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          );
          setAtivo(maisVisivel.target.id);
        }
      },
      { rootMargin: "-100px 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    secoes.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const irPara = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const alvo = document.getElementById(id);
    if (!alvo) return;

    const prefereReduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    alvo.scrollIntoView({ behavior: prefereReduzido ? "auto" : "smooth", block: "start" });
    setAtivo(id);
    setAberto(false);

    // mantém a URL navegável/compartilhável sem disparar outro salto de rolagem
    history.pushState(null, "", `#${id}`);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-surface-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:py-4">
        <a href="#inicio" onClick={(e) => irPara(e, "inicio")} className="flex items-center gap-3">
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
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const id = l.href.slice(1);
            const estaAtivo = ativo === id;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => irPara(e, id)}
                className={`relative py-1 text-sm tracking-wide transition-colors duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-gold after:transition-all after:duration-300 after:ease-out ${
                  estaAtivo
                    ? "text-gold-soft after:w-full"
                    : "text-muted after:w-0 hover:text-gold-soft hover:after:w-full"
                }`}
              >
                {l.label}
              </a>
            );
          })}
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

      <div
        className={`md:hidden overflow-hidden border-t border-surface-border bg-background-elevated transition-[max-height,opacity] duration-300 ease-out ${
          aberto ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-5 py-4">
          {links.map((l) => {
            const id = l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => irPara(e, id)}
                className={`text-sm transition-colors ${
                  ativo === id ? "text-gold-soft" : "text-muted hover:text-gold-soft"
                }`}
              >
                {l.label}
              </a>
            );
          })}
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
    </header>
  );
}
