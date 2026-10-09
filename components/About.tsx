import Image from "next/image";
import Reveal from "./Reveal";

const diferenciais = [
  {
    titulo: "Qualidade premium",
    texto: "Materiais de primeira linha e equipamentos calibrados para garantir um acabamento consistente.",
  },
  {
    titulo: "Produção ágil",
    texto: "Processo organizado do pedido à entrega, para você receber no prazo combinado.",
  },
  {
    titulo: "Atendimento próximo",
    texto: "Conversa direta pelo WhatsApp para tirar dúvidas e acertar cada detalhe da sua peça.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 space-y-8 lg:order-1">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gold">Nossa história</p>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold text-foreground md:text-4xl">
              Sobre a Toys Sublimação
            </h2>
          </div>

          <p className="leading-relaxed text-muted">
            Fundada em 2014 por Silas Bezerra e Jackson Anderson, a Toys Sublimação nasceu
            para transformar ideias em produtos únicos e personalizados. Após a saída de
            Silas, a empresa passou a ser conduzida por Jackson Anderson Camargo Tristão, que
            segue à frente do negócio oferecendo produtos de alta qualidade com tecnologia de
            ponta.
          </p>

          <div className="card-surface rounded-xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Fundador &amp; gestor</p>
            <p className="mt-2 font-serif-display text-lg text-foreground">
              Jackson Anderson Camargo Tristão
            </p>
          </div>

          <div className="space-y-5">
            {diferenciais.map((d) => (
              <div key={d.titulo} className="flex items-start gap-4">
                <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border gold-border text-xs font-semibold text-gold-soft">
                  ✓
                </span>
                <div>
                  <h3 className="font-medium text-foreground">{d.titulo}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{d.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full border gold-border opacity-40" />
            <Image
              src="/logo.png"
              alt="Logo Toys Sublimação"
              width={320}
              height={320}
              className="relative h-64 w-64 rounded-full object-contain shadow-2xl md:h-80 md:w-80"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
