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
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-lime-400 dark:hover:bg-purple-600 hover:text-black dark:hover:text-white border-2 border-transparent hover:border-black dark:hover:border-white px-4 text-lg transition-all duration-200 font-bold uppercase tracking-wide hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-[1px] hover:-translate-y-[1px]",
        isActive &&
          "!border-black dark:!border-white border-2 bg-yellow-400 dark:bg-cyan-600 text-black dark:text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
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
    <nav className="h-16 pr-6 flex border-b-4 border-black dark:border-white justify-between font-medium bg-white dark:bg-black relative">
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
        <div className="hidden lg:flex">
          <Button
            asChild
            variant="elevated"
            className="bg-cyan-400 dark:bg-orange-600 border-2 border-black dark:border-white mr-6 px-8 h-12 my-2 font-black uppercase tracking-wide text-black dark:text-white hover:bg-lime-400 dark:hover:bg-purple-600"
          >
            <Link href="/admin">Dashboard</Link>
          </Button>
          <ThemeToggle />
        </div>
      ) : (
        <div className="hidden lg:flex">
          <Button
            asChild
            variant="elevated"
            className="bg-yellow-400 dark:bg-blue-600 border-2 border-black dark:border-white px-6 h-12 my-2 font-black uppercase tracking-wide text-black dark:text-white hover:bg-lime-400 dark:hover:bg-purple-600 mr-3"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button
            asChild
            variant="elevated"
            className="bg-pink-400 dark:bg-green-600 border-2 border-black dark:border-white mr-6 px-6 h-12 my-2 font-black uppercase tracking-wide text-black dark:text-white hover:bg-lime-400 dark:hover:bg-purple-600"
          >
            <Link href="/sign-up">Register</Link>
          </Button>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};
