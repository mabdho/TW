import BlogsPage from '@/pages/blogs';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export { Page };

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <BlogsPage />
      <Footer />
    </div>
  );
}

export const documentProps = {
  title: 'Travel Blogs & Guides - TravelWanders',
  description: 'Discover travel inspiration through our collection of travel blogs, guides, and stories. Get insider tips, destination guides, and travel advice for your next adventure.'
};