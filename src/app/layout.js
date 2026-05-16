export const metadata = {
  title: 'Nexview',
  description: 'Nexview App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif', background: '#0f172a', color: '#f1f5f9' }}>
        {children}
      </body>
    </html>
  );
}
