import "./globals.css";
import { poppins } from "./fonts";
import DarkModeToggle from "./components/DarkModeToggle";
import PageTransition from "./components/PageTransition";

export const metadata = {
  title: "Sahan Perera",
  description: "Sahan Perera's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0"
        />
      </head>
      <body className={poppins.className} suppressHydrationWarning>
        <DarkModeToggle />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
