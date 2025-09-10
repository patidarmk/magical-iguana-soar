import { useLocation, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
        <Frown className="w-24 h-24 text-purple-400 mb-6" />
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white tracking-tight mb-2">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-6 max-w-md">
          Oops! The page you're looking for at <code className="bg-muted px-1.5 py-0.5 rounded-md font-mono text-sm">{location.pathname}</code> doesn't exist. It might have been moved or deleted.
        </p>
        <Button asChild size="lg">
          <Link to="/">
            Return to Home
          </Link>
        </Button>
    </div>
  );
};

export default NotFound;