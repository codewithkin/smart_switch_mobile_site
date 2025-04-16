import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

function ContentSheet() {
  const navLinks = [
    { name: "home", href: "/" },
    { name: "cart", href: "/cart" },
    { name: "about", href: "/about" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full h-full flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle className="text-xl">Smart Switch Mobile</SheetTitle>
        </SheetHeader>
        {/* Links */}
        <ul className="flex flex-col gap-4 items-center font-medium text-slate-600">
          {navLinks.map(
            (link: { name: string; href: string }, index: number) => (
              <li key={index}>
                <Link
                  className="capitalize hover:text-slate-950"
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ),
          )}
        </ul>

        <SheetFooter>
          {/* CTA */}
          <Button variant="default" size="lg" asChild>
            <Link href="/shop">Show Now</Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

function MobileNavbar() {
  return (
    <>
      {/* Visible when navbar is closed  */}
      <nav className="flex justify-between items-center md:hidden p-4 shadow-sm border-b">
        <h2 className="text-xl font-semibold">Smart Switch Mobile</h2>
        <ContentSheet />
      </nav>
    </>
  );
}

export default MobileNavbar;
