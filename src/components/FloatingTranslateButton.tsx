import { Globe } from "lucide-react";

const FloatingTranslateButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    setTimeout(() => {
      const select = document.querySelector(
        "#google_translate_element select.goog-te-combo"
      ) as HTMLSelectElement | null;
      
      if (select) {
        select.focus();
      }
    }, 300);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
      aria-label="Translate this page"
    >
      <Globe className="h-5 w-5" />
      <span className="text-sm font-medium">Translate</span>
    </button>
  );
};

export default FloatingTranslateButton;
