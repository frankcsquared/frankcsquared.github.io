import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

const messages = [
  "Use the button in the bottom-right to translate this page",
  "Usa el botón en la parte inferior derecha para traducir esta página",
  "使用右下角的按钮翻译此页面",
  "Utilisez le bouton en bas à droite pour traduire cette page",
  "استخدم الزر في أسفل اليمين لترجمة هذه الصفحة",
  "इस पेज का अनुवाद करने के लिए नीचे दाईं ओर बटन का उपयोग करें",
  "ਇਸ ਪੰਨੇ ਦਾ ਅਨੁਵਾਦ ਕਰਨ ਲਈ ਹੇਠਾਂ ਸੱਜੇ ਪਾਸੇ ਬਟਨ ਦੀ ਵਰਤੋਂ ਕਰੋ",
  "Gamitin ang button sa ibabang-kanan upang isalin ang pahinang ito",
];

const TranslateBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-primary text-primary-foreground py-2 px-4 flex items-center justify-center gap-2 text-sm h-10">
      <Globe className="h-4 w-4" />
      <span 
        key={currentIndex}
        className="font-medium animate-fade-in"
      >
        {messages[currentIndex]}
      </span>
    </div>
  );
};

export default TranslateBar;