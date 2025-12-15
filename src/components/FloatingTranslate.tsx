import { useEffect } from "react";
import { Globe } from "lucide-react";

const FloatingTranslate = () => {
  useEffect(() => {
    const initGoogleTranslate = () => {
      const google = (window as any).google;
      const element = document.getElementById("google_translate_element");

      if (!google || !google.translate || !element || element.innerHTML.trim() !== "") {
        return;
      }

      console.log("[FloatingTranslate] Initializing Google Translate widget");

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

    const updateBannerOffset = () => {
      const bannerFrame = document.querySelector(
        ".goog-te-banner-frame.skiptranslate"
      ) as HTMLIFrameElement | null;

      if (bannerFrame) {
        document.body.classList.add("google-translate-active");
      } else {
        document.body.classList.remove("google-translate-active");
      }
    };

    const loadScriptAndInit = () => {
      if ((window as any).google && (window as any).google.translate) {
        console.log("[FloatingTranslate] Google script already loaded");
        initGoogleTranslate();
        return;
      }

      if (!document.querySelector("script[data-google-translate]")) {
        console.log("[FloatingTranslate] Injecting Google Translate script");

        (window as any).googleTranslateElementInit = () => {
          console.log("[FloatingTranslate] googleTranslateElementInit callback");
          initGoogleTranslate();
          updateBannerOffset();
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

    const interval = window.setInterval(updateBannerOffset, 1000);

    return () => {
      window.clearInterval(interval);
      document.body.classList.remove("google-translate-active");
    };
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-card border border-border rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      aria-label="Translate this page"
    >
      <Globe className="h-5 w-5 text-primary" />
      <div id="google_translate_element" className="relative" />
    </div>
  );
};

export default FloatingTranslate;
