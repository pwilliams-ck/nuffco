"use client";

import { useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { NavbarSidebar } from "./navbar-sidebar";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg transition-colors",
        isActive && "!border-primary border-1 dark:border-2",
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathName = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  return (
    <nav className="h-16 pr-6 flex border-b justify-between font-medium">
      <Link href="/" className="pl-6 flex items-center">
        <Image
          src="/plain-logo.png"
          alt="Logo"
          width={200}
          height={100}
          className="dark:hidden"
        />
        <Image
          src="/plain-logo-dark.png"
          alt="Logo"
          width={200}
          height={100}
          className="hidden dark:block"
        />
      </Link>

      <NavbarSidebar
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
        items={navbarItems}
      />

      <div className="items-center gap-4 hidden lg:flex xl:pl-40">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathName === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      {session.data?.user ? (
        <div className="hidden lg:flex">
          <Button
            asChild
            variant="secondary"
            className="bg-transparent border-l border-t-0 border-b-0 border-r mr-6 px-12 h-full rounded-none hover:bg-sky-400 dark:hover:bg-amber-600"
          >
            <Link href="/admin">Dashboard</Link>
          </Button>
          <ThemeToggle />
        </div>
      ) : (
        <div className="hidden lg:flex">
          <Button
            asChild
            variant="secondary"
            className="bg-transparent border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none hover:bg-sky-400 dark:hover:bg-amber-600"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="bg-transparent border-l border-t-0 border-b-0 border-r mr-6 px-12 h-full rounded-none hover:bg-sky-400 dark:hover:bg-amber-600"
          >
            <Link href="/sign-up">Register</Link>
          </Button>
          <ThemeToggle />
        </div>
      )}
      <div className="flex lg:hidden items-center justify-center">
        <Button
          variant="ghost"
          className="size-12 border-transparent"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
