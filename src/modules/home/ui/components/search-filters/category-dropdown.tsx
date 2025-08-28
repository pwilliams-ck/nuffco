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
            "h-9 px-4 bg-transparent border-transparent font-medium text-slate-700 dark:text-slate-300 transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white rounded-md",
            // Special styling for All Industries button
            category.name === "All Industries" && "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 border text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50",
            isActive && !isNavigationHovered && "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold",
            isOpen && "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold",
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
