import { Globe } from "lucide-react";

const TranslateBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-primary text-primary-foreground py-2 px-4 flex items-center justify-center gap-2 text-sm h-10">
      <Globe className="h-4 w-4" />
      <span className="font-medium">Use the button in the bottom-right to translate this page</span>
    </div>
  );
};

export default TranslateBar;