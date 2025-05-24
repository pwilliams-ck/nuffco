import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ReactNode } from "react";

type AlertPopupProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export const AlertPopup = ({ title, description, icon }: AlertPopupProps) => {
  return (
    <Alert className="my-12 w-96 bg-white dark:bg-gray-900 shadow-2xl border-2 border-orange-500 animate-pulse">
      {icon}
      <AlertTitle className="ml-2">{title}</AlertTitle>
      <AlertDescription className="ml-2">{description}</AlertDescription>
    </Alert>
  );
};
