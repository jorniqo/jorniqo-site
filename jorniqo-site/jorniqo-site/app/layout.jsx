export const metadata = {
  title: "jorniqo",
  description: "Strategy, Automation & Creative Tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
