import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
