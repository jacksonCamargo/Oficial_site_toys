import Image from "next/image";
import type { Produto } from "@/lib/site-data";

export default function ProductCard({
  produto,
  onClick,
  claro = false,
}: {
  produto: Produto;
  onClick: () => void;
  claro?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={
        claro
          ? "group flex flex-col rounded-2xl border border-[color:var(--papel-borda)] bg-white p-4 text-left shadow-sm transition-colors hover:border-[color:var(--papel-acento)]"
          : "card-surface group flex flex-col rounded-2xl p-4 text-left transition-colors hover:border-gold/60"
      }
    >
      <div
        className={`relative mb-4 aspect-square overflow-hidden rounded-xl ${
          claro ? "bg-[color:var(--papel-img-bg)]" : "bg-background-elevated"
        }`}
      >
        <Image
          src={produto.imagem}
          alt={produto.nome}
          fill
          className="object-contain p-5 transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
        />
        {produto.destaque && !claro && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-1 text-[11px] font-semibold text-background">
            Destaque
          </span>
        )}
        {produto.ilustracao && (
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
              claro ? "bg-[color:var(--papel-selo)] text-[color:var(--papel-selo-texto)]" : "bg-surface-border text-muted"
            }`}
          >
            Ilustração
          </span>
        )}
      </div>
      <span className={`text-xs uppercase tracking-wide ${claro ? "text-[color:var(--papel-acento-forte)]" : "text-gold"}`}>
        {produto.categoria}
      </span>
      <h3
        className={`mt-1 font-serif-display text-lg ${claro ? "text-[color:var(--papel-titulo)]" : "text-foreground"}`}
      >
        {produto.nome}
      </h3>
      <p className={`mt-1 line-clamp-2 text-sm ${claro ? "text-[color:var(--papel-texto)]" : "text-muted"}`}>
        {produto.descricao}
      </p>
      <p className={`mt-3 font-semibold ${claro ? "text-[color:var(--papel-acento-forte)]" : "text-gold-soft"}`}>
        {produto.precoAPartir ? "a partir de " : ""}
        R$ {produto.preco.toFixed(2).replace(".", ",")}
      </p>
    </button>
  );
}
