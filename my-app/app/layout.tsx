import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <header>
          <nav>
            <a href="/">Início</a>
          </nav>
          <h1>My Blog - Dímerson</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 My Blog - Fatec. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
