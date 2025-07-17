import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CookieIcon, SettingsIcon, EyeIcon, ShieldIcon, MailIcon } from '@/components/icons/SimpleIcons';
import { useEffect } from 'react';

export default function CookiePolicy() {
  useEffect(() => {
    // Update title and meta description to match HTML
    document.title = "Cookie Policy | TravelWanders Travel Guide Platform";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Cookie Policy for TravelWanders - Learn about how we use cookies and similar technologies to enhance your travel guide experience.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-4 py-2">
                <CookieIcon className="w-4 h-4 mr-2" />
                Cookie Policy
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn about how we use cookies and similar technologies to enhance your experience on TravelWanders.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: January 11, 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* What are Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CookieIcon className="w-5 h-5 text-orange-600" />
                  What Are Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide a better user experience.
                </p>
                <p className="text-gray-600">
                  Cookies contain information that is transferred to your computer's hard drive. They help us recognize you when you return to our website and remember your preferences.
                </p>
              </CardContent>
            </Card>

            {/* Types of Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SettingsIcon className="w-5 h-5 text-blue-600" />
                  Types of Cookies We Use
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <ShieldIcon className="w-4 h-4 text-green-600" />
                    Essential Cookies
                  </h3>
                  <p className="text-gray-600 mb-2">
                    These cookies are necessary for the website to function and cannot be switched off. They include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Session cookies to keep you logged in</li>
                    <li>Security cookies to protect against fraud</li>
                    <li>Functional cookies to remember your preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <EyeIcon className="w-4 h-4 text-purple-600" />
                    Analytics Cookies
                  </h3>
                  <p className="text-gray-600 mb-2">
                    These cookies help us understand how visitors interact with our website:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Google Analytics to track page views and user behavior</li>
                    <li>Performance cookies to identify popular content</li>
                    <li>Error tracking cookies to improve website stability</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <SettingsIcon className="w-4 h-4 text-indigo-600" />
                    Functional Cookies
                  </h3>
                  <p className="text-gray-600 mb-2">
                    These cookies enable enhanced functionality and personalization:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Language and region preferences</li>
                    <li>Search history and favorite destinations</li>
                    <li>Display preferences and accessibility settings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <EyeIcon className="w-4 h-4 text-orange-600" />
                    Marketing Cookies
                  </h3>
                  <p className="text-gray-600 mb-2">
                    These cookies are used to track visitors and display relevant advertisements:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Social media cookies for sharing content</li>
                    <li>Advertising cookies to show relevant travel deals</li>
                    <li>Retargeting cookies to show you relevant content</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Some cookies are set by third-party services that appear on our pages. We use the following third-party services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li><strong>Google Analytics:</strong> To understand how visitors use our website</li>
                  <li><strong>Google Maps:</strong> To provide interactive maps and location services</li>
                  <li><strong>Social Media Platforms:</strong> To enable social sharing features</li>
                  <li><strong>Content Delivery Networks:</strong> To improve website performance</li>
                </ul>
              </CardContent>
            </Card>

            {/* Managing Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SettingsIcon className="w-5 h-5 text-green-600" />
                  Managing Your Cookie Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Browser Settings</h3>
                  <p className="text-gray-600 mb-2">
                    You can control cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>See what cookies you have and delete them individually</li>
                    <li>Block third-party cookies</li>
                    <li>Block cookies from specific sites</li>
                    <li>Block all cookies</li>
                    <li>Delete all cookies when you close your browser</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Browser-Specific Instructions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Chrome</h4>
                      <p className="text-sm text-gray-600">Settings → Privacy and security → Cookies and other site data</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Firefox</h4>
                      <p className="text-sm text-gray-600">Options → Privacy & Security → Cookies and Site Data</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Safari</h4>
                      <p className="text-sm text-gray-600">Preferences → Privacy → Manage Website Data</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Edge</h4>
                      <p className="text-sm text-gray-600">Settings → Cookies and site permissions → Cookies and site data</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">Important Note</h3>
                  <p className="text-yellow-700">
                    Disabling cookies may affect the functionality of our website. Some features may not work properly without cookies enabled.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookie Consent */}
            <Card>
              <CardHeader>
                <CardTitle>Cookie Consent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  When you first visit our website, we'll ask for your consent to use cookies. You can:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your cookie preferences</li>
                </ul>
                <p className="text-gray-600">
                  You can change your cookie preferences at any time by clicking the "Cookie Settings" link in our footer.
                </p>
              </CardContent>
            </Card>

            {/* Updates to Policy */}
            <Card>
              <CardHeader>
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by updating the "Last updated" date at the top of this policy.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MailIcon className="w-5 h-5 text-blue-600" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  If you have any questions about our Cookie Policy, please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MailIcon className="w-4 h-4" />
                    <span>privacy@travelwanders.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}