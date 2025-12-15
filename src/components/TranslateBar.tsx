import { useEffect } from "react";
import { Globe } from "lucide-react";

const TranslateBar = () => {
  useEffect(() => {
    console.log("[TranslateBar] useEffect mounted");

    const initGoogleTranslate = () => {
      const google = (window as any).google;
      const element = document.getElementById("google_translate_element");

      console.log("[TranslateBar] initGoogleTranslate called", {
        hasGoogle: !!google,
        hasTranslate: !!google?.translate,
        hasElement: !!element,
        elementInnerHTML: element?.innerHTML,
      });

      if (!google || !google.translate || !element || element.innerHTML.trim() !== "") {
        console.warn("[TranslateBar] Conditions not met for init", {
          hasGoogle: !!google,
          hasTranslate: !!google?.translate,
          hasElement: !!element,
          elementInnerHTML: element?.innerHTML,
        });
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
          "google_translate_element"
        );
        console.log("[TranslateBar] Google Translate initialized successfully");
      } catch (error) {
        console.error("[TranslateBar] Error initializing Google Translate", error);
      }
    };

    const loadScriptAndInit = () => {
      console.log("[TranslateBar] loadScriptAndInit");

      if ((window as any).google && (window as any).google.translate) {
        console.log("[TranslateBar] Google Translate already present on window");
        initGoogleTranslate();
        return;
      }

      if (!document.querySelector("script[data-google-translate]")) {
        console.log("[TranslateBar] Injecting Google Translate script");

        (window as any).googleTranslateElementInit = () => {
          console.log("[TranslateBar] googleTranslateElementInit callback fired");
          initGoogleTranslate();
        };

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        script.dataset.googleTranslate = "true";
        script.onload = () => {
          console.log("[TranslateBar] Google Translate script loaded");
        };
        script.onerror = (event) => {
          console.error("[TranslateBar] Failed to load Google Translate script", event);
        };
        document.head.appendChild(script);
      } else {
        console.log("[TranslateBar] Google Translate script tag already present");
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
