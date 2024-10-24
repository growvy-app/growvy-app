import HeaderAuth from "@/components/header-auth";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col gap-20 items-center">
            <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
              <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                <div className="flex gap-5 items-center font-semibold">
                  <Link href={"/"}>Next.js Supabase Starter</Link>
                </div>
                <HeaderAuth />
              </div>
            </nav>
            <div className="flex flex-col gap-20 max-w-5xl p-5">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
