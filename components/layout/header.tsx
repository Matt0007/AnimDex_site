"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { ICONS_NAV, NAV_LINKS } from "@/lib/constants/layout/header";
import { signOut, useSession } from "next-auth/react";

export function Header() {
    const { data: session } = useSession();
  return (
    <header className="top-0 z-50 w-full border-b bg-background/90 shadow-sm backdrop-blur-md">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Left: Mobile Menu + Desktop AnimDex + Nav */}
        <div className="flex items-center gap-6">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-transparent"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetTitle className="text-2xl font-bold text-primary mb-4 p-3">
                AnimDex
              </SheetTitle>
              <div className="flex flex-col gap-4">
                <nav className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => (
                    <Button
                      key={link.href}
                      variant="ghost"
                      asChild
                      className="justify-start text-base font-medium hover:bg-transparent"
                    >
                      <Link className="ps-6" href={link.href}>
                        {link.label}
                      </Link>
                    </Button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop: AnimDex + Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/">
              <span className="text-2xl font-bold text-primary">AnimDex</span>
            </Link>

            <nav className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  asChild
                  className="hover:text-foreground text-sm font-medium"
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
            </nav>
          </div>
        </div>

        {/* Center: Mobile AnimDex */}
        <Link href="/" className="md:hidden">
          <span className="text-3xl font-bold text-primary">AnimDex</span>
        </Link>

        {/* Right: User Icon */}
        <div className="flex items-center gap-2">
          {ICONS_NAV.map((item, i) => {
            if (item.logout && !session?.user) return null;

            return item.logout ? (
              <Button
                variant="ghost"
                key={i}
                onClick={() => signOut({ callbackUrl: "/" })}
                className="flex items-center gap-2"
              >
                {item.icons}
              </Button>
            ) : (
              <Button key={item.href} variant="ghost" size="icon" asChild>
                <Link href={item.href}>{item.icons}</Link>
              </Button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
