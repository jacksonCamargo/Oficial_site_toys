import Reveal from "./Reveal";

const passos = [
  {
    numero: "01",
    titulo: "Escolha o produto",
    texto: "Navegue pelo catálogo e escolha a peça que combina com o que você quer criar.",
  },
  {
    numero: "02",
    titulo: "Envie sua arte",
    texto: "Mande a foto, logo ou texto que você quer na peça — direto pelo WhatsApp.",
  },
  {
    numero: "03",
    titulo: "A gente aprova com você",
    texto: "Confirmamos o layout, o valor e o prazo antes de qualquer coisa ir pra produção.",
  },
  {
    numero: "04",
    titulo: "Produção e entrega",
    texto: "Com tudo certo, produzimos com cuidado e enviamos até você.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-14 text-center md:mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-gold">Passo a passo</p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-foreground md:text-4xl">
            Como funciona
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Do pedido à entrega, simples e sem surpresas.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {passos.map((passo, i) => (
            <Reveal key={passo.numero} delay={i * 120}>
              <div className="card-surface relative h-full rounded-2xl p-6">
                <span className="font-serif-display text-4xl text-gold/30">{passo.numero}</span>
                <h3 className="mt-4 font-serif-display text-lg text-foreground">{passo.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{passo.texto}</p>
                {i < passos.length - 1 && (
                  <span className="pointer-events-none absolute right-[-14px] top-1/2 hidden h-px w-7 -translate-y-1/2 bg-gold/30 lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
