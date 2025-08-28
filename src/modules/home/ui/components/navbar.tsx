"use client";

import Link from "next/link";

// import { Poppins } from "next/font/google";

import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["700"],
// });

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
        isActive &&
          "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold",
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/", children: "Our Products" },
  { href: "/about", children: "About" },
  { href: "/chat-widget", children: "Chat Widget" },
  { href: "/phone-interaction", children: "Phone Interaction" },
  { href: "/email-automation", children: "Email Automation" },
  { href: "/booking-appointments", children: "Booking" },
  { href: "/communications-suite", children: "Full Suite" },
];

export const Navbar = () => {
  const pathName = usePathname();

  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  return (
    <nav className="h-16 pr-6 flex border-b border-slate-200 dark:border-slate-700 justify-between font-medium bg-white dark:bg-slate-900 relative shadow-sm">
      <Link href="/" className="pl-6 flex items-center flex-shrink-0">
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

      <div className="items-center gap-4 hidden lg:flex">
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
        <div className="hidden lg:flex items-center gap-3">
          <Button
            asChild
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 h-10 transition-colors duration-200"
          >
            <Link href="/admin">Dashboard</Link>
          </Button>
          <ThemeToggle />
        </div>
      ) : (
        <div className="hidden lg:flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium px-4 h-10 transition-colors duration-200"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button
            asChild
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 h-10 transition-colors duration-200 shadow-sm"
          >
            <Link href="/sign-up">Start Free Trial</Link>
          </Button>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};
