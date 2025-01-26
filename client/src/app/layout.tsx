import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stock Data Visualizer",
  description: "Stock Data Visualizer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center h-screen w-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
