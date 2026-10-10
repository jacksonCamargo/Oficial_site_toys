import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site-data";

const titulo = "Toys Sublimação | Produtos personalizados sob medida";
const descricao =
  "Canecas, camisetas, chaveiros e muito mais, personalizados com sua arte. Qualidade premium, feito à mão em São Paulo. Peça pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titulo,
    template: "%s | Toys Sublimação",
  },
  description: descricao,
  keywords: [
    "sublimação",
    "produtos personalizados",
    "caneca personalizada",
    "camiseta personalizada",
    "chaveiro personalizado",
    "Toys Sublimação",
    "São Paulo",
  ],
  authors: [{ name: "Toys Sublimação" }],
  openGraph: {
    title: titulo,
    description: descricao,
    url: siteUrl,
    siteName: "Toys Sublimação",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Toys Sublimação — produtos personalizados por sublimação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descricao,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
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
