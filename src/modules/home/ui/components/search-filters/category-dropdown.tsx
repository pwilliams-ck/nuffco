"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { useDropdownPosition } from "./use-dropdown-position";
import { SubcategoryMenu } from "./subcategory-menu";
import { CategoriesGetManyOutput } from "@/modules/categories/types";

interface Props {
  category: CategoriesGetManyOutput[1];
  isActive?: boolean;
  isNavigationHovered?: boolean;
}

export const CategoryDropdown = ({
  category,
  isActive,
  isNavigationHovered,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { getDropdownPosition } = useDropdownPosition(dropdownRef);

  const onMouseEnter = () => {
    if (category.subcategories) {
      setIsOpen(true);
    }
  };

  const onMouseLeave = () => setIsOpen(false);

  const dropdownPosition = getDropdownPosition();

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative">
        <Button
          variant="outline"
          className={cn(
            "h-9 px-4 bg-transparent border-transparent font-bold text-black dark:text-white transition-all duration-200 hover:bg-cyan-400 dark:hover:bg-orange-600 hover:border-black dark:hover:border-white hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] uppercase tracking-wide",
            // Special styling for All Industries button
            category.name === "All Industries" && "bg-pink-400 dark:bg-green-600 border-black dark:border-white border-2 text-black dark:text-white hover:bg-lime-400 dark:hover:bg-purple-600",
            isActive && !isNavigationHovered && "bg-yellow-400 dark:bg-cyan-600 border-black dark:border-white border-2 text-black dark:text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
            isOpen && "bg-yellow-400 dark:bg-cyan-600 border-black dark:border-white border-2 text-black dark:text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
          )}
        >
          <Link href={category.name === "All Industries" ? "/local-services" : `/${category.slug === "all" ? "" : category.slug}`}>
            {category.name}
          </Link>
        </Button>
        {category.subcategories && category.subcategories.length > 0 && (
          <div
            className={cn(
              "opacity-0 absolute -bottom-3 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-primary left-1/2 translate-x-1/2",
              isOpen && "opacity-100",
            )}
          />
        )}
      </div>

      <SubcategoryMenu
        category={category}
        isOpen={isOpen}
        position={dropdownPosition}
      />
    </div>
  );
};
