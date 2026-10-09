import { contato } from "@/lib/site-data";
import Reveal from "./Reveal";

const itens = [
  { titulo: "WhatsApp", valor: contato.telefoneExibicao, href: contato.whatsapp },
  { titulo: "E-mail", valor: contato.email, href: `mailto:${contato.email}` },
  { titulo: "Localização", valor: contato.cidade, href: undefined },
];

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28">
      <Reveal className="mx-auto max-w-4xl px-5 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-gold">Fale com a gente</p>
        <h2 className="mt-3 font-serif-display text-3xl font-semibold text-foreground md:text-4xl">
          Entre em Contato
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Pronto para criar algo único? Chame no WhatsApp e vamos acertar cada detalhe do seu
          pedido.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {itens.map((item) =>
            item.href ? (
              <a
                key={item.titulo}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card-surface rounded-xl p-6 transition-colors hover:border-gold/60"
              >
                <h3 className="text-sm font-medium text-gold-soft">{item.titulo}</h3>
                <p className="mt-2 text-foreground">{item.valor}</p>
              </a>
            ) : (
              <div key={item.titulo} className="card-surface rounded-xl p-6">
                <h3 className="text-sm font-medium text-gold-soft">{item.titulo}</h3>
                <p className="mt-2 text-foreground">{item.valor}</p>
              </div>
            )
          )}
        </div>

        <a
          href={contato.whatsappMensagem("Oi! Encontrei a Toys Sublimação pelo site e quero fazer um pedido.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full bg-gold px-10 py-3.5 font-semibold text-background transition-transform hover:scale-[1.02] hover:bg-gold-soft"
        >
          Iniciar conversa no WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
