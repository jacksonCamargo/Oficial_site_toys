import Image from "next/image";
import { contato } from "@/lib/site-data";

const ANO_ATUAL = 2026;

export default function Footer() {
  const ano = ANO_ATUAL;

  return (
    <footer className="border-t border-surface-border bg-background-elevated py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Toys Sublimação" width={32} height={32} className="h-8 w-8 rounded-full" />
              <span className="font-serif-display text-lg text-foreground">Toys Sublimação</span>
            </div>
            <p className="text-sm text-muted">
              Transformando suas ideias em produtos únicos, com qualidade premium.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gold-soft">Links rápidos</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#inicio" className="hover:text-gold-soft">Início</a></li>
              <li><a href="#produtos" className="hover:text-gold-soft">Produtos</a></li>
              <li><a href="#sobre" className="hover:text-gold-soft">Sobre</a></li>
              <li><a href="#contato" className="hover:text-gold-soft">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gold-soft">Categorias</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>Canecas</li>
              <li>Roupas</li>
              <li>Acessórios</li>
              <li>Decoração</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gold-soft">Contato</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>{contato.telefoneExibicao}</li>
              <li>{contato.email}</li>
              <li>{contato.cidade}</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href={contato.instagram} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-xs text-muted hover:border-gold hover:text-gold-soft">IG</a>
              <a href={contato.tiktok} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-xs text-muted hover:border-gold hover:text-gold-soft">TT</a>
              <a href={contato.whatsapp} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-xs text-muted hover:border-gold hover:text-gold-soft">WA</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-surface-border pt-6 text-center text-xs text-muted">
          © {ano} Toys Sublimação. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
