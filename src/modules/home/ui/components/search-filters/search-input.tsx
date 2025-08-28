"use client";

import { useState } from "react";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

import { BookmarkCheckIcon, ListFilterIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { CategoriesSidebar } from "./categories-sidebar";
import Link from "next/link";

interface Props {
  disabled?: boolean;
}

export const SearchInput = ({ disabled }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  return (
    <div className="flex items-center gap-2 w-full">
      <CategoriesSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input
          className="pl-8 h-9 dark:bg-secondary dark:text-primary"
          placeholder="Find local services..."
          disabled={disabled}
        />
      </div>
      <Button
        variant="elevated"
        className="h-9 w-9 shrink-0 flex lg:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <ListFilterIcon />
      </Button>
      {session.data?.user && (
        <Button
          asChild
          variant="elevated"
          className="h-9 bg-white dark:bg-white text-black dark:text-black dark:border-black dark:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <Link href="/library">
            <BookmarkCheckIcon />
            Library
          </Link>
        </Button>
      )}
      {/* TODO: Add library button */}
    </div>
  );
};
