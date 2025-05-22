import { RefObject } from "react";

// useDropdownPosition() is a function that keeps the dropdown area of the categories navbar
// in the same position, keeping the dropdown menu responsive for different screen sizes.
export const useDropdownPosition = (
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>,
) => {
  const getDropdownPosition = () => {
    if (!ref.current) return { top: 0, left: 0 };

    const rect = ref.current.getBoundingClientRect();
    const useDropdownWidth = 240; // Width of dropdown = w-60 = 15rem = 240px.

    // Calculate initial position
    let left = rect.left + window.scrollX;
    const top = rect.bottom + window.scrollY;

    // Check if dropdown would go off right edge of the viewport.
    if (left + useDropdownWidth > window.innerWidth) {
      // Align to right edge of button.
      left = rect.right + window.scrollX - useDropdownWidth;

      // If still off-screen, align to left edge of viewport with some padding.
      if (left < 0) {
        left = window.innerWidth - useDropdownWidth - 16;
      }
    }

    // Ensure dropdown does not go over left edge.
    if (left < 0) {
      left = 16;
    }

    return { top, left };
  };

  return { getDropdownPosition };
};
