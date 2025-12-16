import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Disclaimer */}
        <div className="text-sm text-muted-foreground text-center mb-6 pb-6 border-b border-border">
          All information was taken from BC Cancer and was adapted for this initiative.
        </div>

        {/* Verifiers Section */}
        <div className="mb-6 pb-6 border-b border-border">
          <h4 className="text-sm font-semibold text-foreground mb-3 text-center">Translation Verifiers</h4>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-lg">🇫🇷</span>
              <span className="text-sm text-muted-foreground">French - Placeholder</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🇨🇳</span>
              <span className="text-sm text-muted-foreground">Chinese - Frank Chen</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" fill="currentColor" />
            <span className="text-sm text-muted-foreground">
              © 2025 Translate Oncology Initiative. All rights reserved.
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            Advancing cancer care through research and collaboration
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
