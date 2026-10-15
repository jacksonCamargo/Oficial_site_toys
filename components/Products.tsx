"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import Reveal from "./Reveal";
import { categorias, produtos, type Produto } from "@/lib/site-data";

export default function Products() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [selecionado, setSelecionado] = useState<Produto | null>(null);

  const filtrados = useMemo(() => {
    return produtos.filter((p) => {
      const combinaBusca =
        p.nome.toLowerCase().includes(busca.toLowerCase()) ||
        p.descricao.toLowerCase().includes(busca.toLowerCase());
      const combinaCategoria = categoria === "Todos" || p.categoria === categoria;
      return combinaBusca && combinaCategoria;
    });
  }, [busca, categoria]);

  const ehPapelaria = categoria === "Papelaria";

  return (
    <section id="produtos" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-10 text-center md:mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-gold">Catálogo</p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-foreground md:text-4xl">
            Nossos Produtos
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Cada peça é personalizada sob medida com a arte que você escolher.
          </p>
        </Reveal>

        <div className="mb-10 space-y-4">
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Pesquisar produtos..."
            className="mx-auto block w-full max-w-md rounded-full border border-surface-border bg-surface px-5 py-2.5 text-sm text-foreground placeholder:text-muted/70 focus:border-gold focus:outline-none"
          />
          <div className="flex flex-wrap justify-center gap-2">
            {categorias.map((cat) => {
              const ativa = categoria === cat;
              const papelariaPill = cat === "Papelaria";
              return (
                <button
                  key={cat}
                  onClick={() => setCategoria(cat)}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                    ativa
                      ? papelariaPill
                        ? "border-[color:var(--papel-acento-forte)] bg-[color:var(--papel-acento-forte)] text-white font-medium"
                        : "border-gold bg-gold text-background font-medium"
                      : papelariaPill
                        ? "border-[color:var(--papel-acento)]/50 text-[color:var(--papel-acento-forte)] hover:border-[color:var(--papel-acento)] hover:bg-[color:var(--papel-acento)]/10"
                        : "border-surface-border text-muted hover:border-gold/60 hover:text-gold-soft"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className={`rounded-3xl transition-colors duration-500 ${
            ehPapelaria ? "border border-[color:var(--papel-painel-borda)] bg-[color:var(--papel-painel-bg)] p-5 sm:p-8" : ""
          }`}
        >
          {ehPapelaria && (
            <p className="mb-6 text-center text-sm text-[color:var(--papel-texto)]">
              Linha de papelaria personalizada — as imagens abaixo são ilustrações de referência,
              o portfólio com fotos reais chega em breve.
            </p>
          )}

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {filtrados.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 90}>
                <ProductCard
                  produto={p}
                  onClick={() => setSelecionado(p)}
                  claro={p.categoria === "Papelaria"}
                />
              </Reveal>
            ))}
          </div>

          {filtrados.length === 0 && (
            <p className="py-12 text-center text-muted">Nenhum produto encontrado.</p>
          )}
        </div>
      </div>

      <ProductModal produto={selecionado} onClose={() => setSelecionado(null)} />
    </section>
  );
}
