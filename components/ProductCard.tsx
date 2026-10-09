import Image from "next/image";
import type { Produto } from "@/lib/site-data";

export default function ProductCard({
  produto,
  onClick,
}: {
  produto: Produto;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="card-surface group flex flex-col rounded-2xl p-4 text-left transition-colors hover:border-gold/60"
    >
      <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-background-elevated">
        <Image
          src={produto.imagem}
          alt={produto.nome}
          fill
          className="object-contain p-5 transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
        />
        {produto.destaque && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-1 text-[11px] font-semibold text-background">
            Destaque
          </span>
        )}
      </div>
      <span className="text-xs uppercase tracking-wide text-gold">{produto.categoria}</span>
      <h3 className="mt-1 font-serif-display text-lg text-foreground">{produto.nome}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-muted">{produto.descricao}</p>
      <p className="mt-3 font-semibold text-gold-soft">
        R$ {produto.preco.toFixed(2).replace(".", ",")}
      </p>
    </button>
  );
}
