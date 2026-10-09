import Image from "next/image";
import { contato, produtos } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function Hero() {
  const destaques = produtos.filter((p) => p.destaque).slice(0, 2);

  return (
    <section
      id="inicio"
      className="hero-vignette relative flex min-h-[92vh] items-center pt-24 pb-16 md:pt-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        <Reveal className="space-y-7 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.25em] text-gold">
            Produtos personalizados por sublimação
          </p>
          <h1 className="font-serif-display text-4xl font-semibold leading-[1.1] text-foreground md:text-6xl">
            Sua ideia, impressa <span className="gold-text">com precisão</span>
          </h1>
          <p className="mx-auto max-w-md text-base leading-relaxed text-muted md:text-lg lg:mx-0">
            Canecas, camisetas, chaveiros e muito mais — personalizados sob medida, com
            qualidade premium e acabamento feito à mão em São Paulo.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={contato.whatsappMensagem("Oi! Quero fazer um orçamento de produto personalizado.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-gold px-8 py-3.5 text-center font-semibold text-background transition-transform hover:scale-[1.02] hover:bg-gold-soft sm:w-auto"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#produtos"
              className="w-full rounded-full border gold-border px-8 py-3.5 text-center font-medium text-foreground transition-colors hover:border-gold hover:text-gold-soft sm:w-auto"
            >
              Ver produtos
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {destaques.map((p, i) => (
            <Reveal key={p.id} delay={150 + i * 150} className={i === 1 ? "mt-10" : ""}>
              <div className="card-surface rounded-2xl p-4">
                <div className="relative mb-3 aspect-square overflow-hidden rounded-xl bg-background-elevated">
                  <Image src={p.imagem} alt={p.nome} fill className="object-contain p-4" sizes="200px" />
                </div>
                <h3 className="font-serif-display text-base text-foreground">{p.nome}</h3>
                <p className="mt-1 text-sm font-medium text-gold-soft">
                  R$ {p.preco.toFixed(2).replace(".", ",")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
