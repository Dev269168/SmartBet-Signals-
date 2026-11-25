import "./globals.css";

export const metadata = {
  title: "SmartBet Signals",
  description: "Racing analysis and betting signals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
