"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import { Categories } from "./categories";
import { SearchInput } from "./search-input";
import { DEFAULT_BG_COLOR } from "@/modules/home/contsants";
import { BreadcrumbNavigation } from "./breadcrumb-navigation";

export const SearchFilters = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.categories.getMany.queryOptions());

  const params = useParams();
  const categoryParam = params.category as string | undefined;
  const activeCategory = categoryParam || "all";

  const activeCategoryData = data.find(
    (category) => category.slug === activeCategory,
  );

  // Force default color for "All Services" even if it exists in data
  const isAllServices = activeCategory === "all";
  const hasCustomColor = activeCategoryData?.color && !isAllServices;
  
  const activeCategoryColor = hasCustomColor ? activeCategoryData.color : null;
  const activeCategoryName = activeCategoryData?.name || null;
  
  // Use white text only when background is actually dark/black, otherwise black text
  const isUsingDefaultColor = !hasCustomColor;
  
  let textColorClass;
  if (isUsingDefaultColor) {
    // Using default background - white text only in dark mode when bg is actually dark
    textColorClass = "text-black dark:text-white";
  } else {
    // Category with custom color - black text (since category colors are typically light)
    textColorClass = "text-black";
  }

  const activeSubcategory = params.subcategory as string | undefined;
  const activeSubcategoryName =
    activeCategoryData?.subcategories?.find(
      (subcategory) => subcategory.slug === activeSubcategory,
    )?.name || null;

  return (
    <div
      className={`px-4 lg:px-12 py-4 border-b dark:hover:border-black ${textColorClass} flex flex-col gap-3 w-full ${isUsingDefaultColor ? DEFAULT_BG_COLOR : ''}`}
      style={activeCategoryColor ? { backgroundColor: activeCategoryColor } : {}}
    >
      <SearchInput />
      <div className="hidden lg:block">
        <Categories data={data} />
      </div>
      <BreadcrumbNavigation
        activeCategory={activeCategory}
        activeCategoryName={activeCategoryName}
        activeSubcategoryName={activeSubcategoryName}
      />
    </div>
  );
};

export const SearchFiltersLoading = () => {
  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full bg-secondary/10 dark:secondary/10">
      <SearchInput disabled />
      <div className="hidden lg:block">
        <div className="h-11" />
      </div>
    </div>
  );
};
