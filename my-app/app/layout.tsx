export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html>
        <head />
        <body>
          <header>
            <h1>Meu Blog</h1>
            <nav>
              <a href="/">Início</a>
            </nav>
          </header>
          <main>{children}</main>
        </body>
      </html>
    );
  }
  