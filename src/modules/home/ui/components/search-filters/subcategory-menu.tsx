import Link from "next/link";
import { Category } from "@/payload-types";

import { CategoriesGetManyOutput } from "@/modules/categories/types";

interface Props {
  category: CategoriesGetManyOutput[1];
  isOpen: boolean;
  position: { top: number; left: number };
}

export const SubcategoryMenu = ({ category, isOpen, position }: Props) => {
  if (
    !isOpen ||
    !category.subcategories ||
    category.subcategories.length === 0
  ) {
    return null;
  }

  const backgroundColor = category.color || "#F5F5F5";

  return (
    <div
      className="fixed z-100"
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      {/* Invisible bridge to maintain hover */}
      <div className="h-3 w-60" />
      <div
        style={{ backgroundColor }}
        className="w-60 text-slate-700 dark:text-slate-300 rounded-md overflow-hidden border border-slate-200 dark:border-slate-600 shadow-lg"
      >
        <div>
          {category.subcategories?.map((subcategory: Category) => (
            <Link
              key={subcategory.slug}
              href={`/${category.slug}/${subcategory.slug}`}
              className="w-full text-left p-4 hover:bg-secondary dark:hover:text-primary flex justify-between items-center hover:underline font-medium"
            >
              {subcategory.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
