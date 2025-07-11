import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FloatingAdminButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a href="/admin">
        <Button
          size="icon"
          className="h-12 w-12 bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
          title="Admin Panel"
        >
          🔒
        </Button>
      </a>
    </div>
  );
};