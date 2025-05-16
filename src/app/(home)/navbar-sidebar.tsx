import Link from "next/link";

import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetContent,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="flex items-center w-full text-left text-base font-medium p-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              {item.children}
            </Link>
          ))}
          <div className="border-t">
            <Link
              href="/sign-in"
              className="flex items-center w-full text-left text-base font-medium p-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className="flex items-center w-full text-left text-base font-medium p-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              Register
            </Link>
            <div className="pl-3 pt-4">
              <ThemeToggle />
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
