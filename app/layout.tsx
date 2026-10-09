import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toys Sublimação | Produtos personalizados sob medida",
  description:
    "Canecas, camisetas, chaveiros e muito mais, personalizados com sua arte. Qualidade premium, feito à mão em São Paulo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
