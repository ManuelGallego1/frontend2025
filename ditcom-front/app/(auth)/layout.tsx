export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-madimi">
        {children}
      </body>
    </html>
  );
}
