import { Button } from '@/components/ui/button';

export const FloatingAdminButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a href="/admin">
        <Button
          size="icon"
          className="h-10 w-10 bg-orange-600 hover:bg-orange-700 text-white border border-orange-700"
          title="Admin Panel"
        >
          🔒
        </Button>
      </a>
    </div>
  );
};