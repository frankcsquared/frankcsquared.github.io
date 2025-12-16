import { useEffect, useState, useRef } from "react";
import { Globe, ChevronUp } from "lucide-react";

const translations = [
  "Translate",
  "Traducir",
  "翻译",
  "Traduire",
  "ترجمة",
  "अनुवाद",
  "ਅਨੁਵਾਦ",
  "Isalin",
];

const FloatingTranslateButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLangIndex, setCurrentLangIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLangIndex((prev) => (prev + 1) % translations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const initGoogleTranslate = () => {
      const google = (window as any).google;
      const element = document.getElementById("floating_translate_element");

      if (!google || !google.translate || !element || element.innerHTML.trim() !== "") {
        return;
      }

      try {
        new google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "en,es,fr,de,it,pt,ru,ja,ko,zh-CN,zh-TW,ar,hi,vi,th,pl,nl,tr,id,fa,tl",
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true,
          },
          "floating_translate_element"
        );
      } catch (error) {
        console.error("[FloatingTranslateButton] Error initializing Google Translate", error);
      }
    };

    const loadScriptAndInit = () => {
      if ((window as any).google && (window as any).google.translate) {
        initGoogleTranslate();
        return;
      }

      if (!document.querySelector("script[data-google-translate]")) {
        (window as any).googleTranslateElementInit = () => {
          initGoogleTranslate();
        };

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        script.dataset.googleTranslate = "true";
        document.head.appendChild(script);
      }
    };

    loadScriptAndInit();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <div 
        className={`bg-background border border-border rounded-lg shadow-xl p-3 min-w-[220px] transition-all ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <p className="text-sm font-medium text-foreground mb-2">Select Language:</p>
        <div id="floating_translate_element" />
      </div>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
        aria-label="Translate this page"
      >
        <Globe className="h-5 w-5" />
        <span className="text-sm font-medium min-w-[60px] text-center transition-all duration-300">
          {translations[currentLangIndex]}
        </span>
        <ChevronUp className={`h-4 w-4 transition-transform ${isOpen ? "" : "rotate-180"}`} />
      </button>
    </div>
  );
};

export default FloatingTranslateButton;