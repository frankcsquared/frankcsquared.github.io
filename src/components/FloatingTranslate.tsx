import { useEffect } from "react";
import { Globe } from "lucide-react";

const FloatingTranslate = () => {
  useEffect(() => {
    const initGoogleTranslate = () => {
      const google = (window as any).google;
      const element = document.getElementById("google_translate_element");

      if (google && google.translate && element && element.innerHTML.trim() === "") {
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
      }
    };

    let attempts = 0;
    const interval = window.setInterval(() => {
      attempts += 1;
      initGoogleTranslate();
      if ((window as any).google || attempts > 20) {
        window.clearInterval(interval);
      }
    }, 500);

    return () => window.clearInterval(interval);
  }, []);

  const handleClick = () => {
    const select = document.querySelector(
      "#google_translate_element select.goog-te-combo"
    ) as HTMLSelectElement | null;

    if (select) {
      select.focus();
      const event = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      select.dispatchEvent(event);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-card border border-border rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      aria-label="Translate this page"
    >
      <Globe className="h-5 w-5 text-primary" />
      <div id="google_translate_element" className="relative"></div>
    </button>
  );
};

export default FloatingTranslate;
