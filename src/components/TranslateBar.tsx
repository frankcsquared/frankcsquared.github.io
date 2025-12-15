import { useEffect } from "react";
import { Globe } from "lucide-react";

const TranslateBar = () => {
  useEffect(() => {
    const initGoogleTranslate = () => {
      const google = (window as any).google;
      const element = document.getElementById("google_translate_element");

      if (!google || !google.translate || !element || element.innerHTML.trim() !== "") {
        return;
      }

      new google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages:
            "en,es,fr,de,it,pt,ru,ja,ko,zh-CN,zh-TW,ar,hi,vi,th,pl,nl,tr,id,fa,tl",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
          multilanguagePage: true,
        },
        "google_translate_element"
      );
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

  return (
    <div className="sticky top-0 z-50 w-full bg-primary text-primary-foreground py-2 px-4 flex items-center justify-center gap-2 text-sm">
      <Globe className="h-4 w-4" />
      <span className="font-medium">Translate this page:</span>
      <div id="google_translate_element" className="relative" />
    </div>
  );
};

export default TranslateBar;
