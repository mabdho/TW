import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldIcon, EyeIcon, CookieIcon, DatabaseIcon, MailIcon, PhoneIcon } from '@/components/icons/LightweightIcons';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2">
                <ShieldIcon className="w-4 h-4 mr-2" />
                Privacy Policy
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your Privacy Matters
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to protecting your privacy and being transparent about how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: January 11, 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DatabaseIcon className="w-5 h-5 text-blue-600" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Email address (when you subscribe to our newsletter)</li>
                    <li>Name (when you create an account or contact us)</li>
                    <li>Location preferences (to provide relevant destination recommendations)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Usage Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Pages visited and time spent on our website</li>
                    <li>Search queries and destination preferences</li>
                    <li>Device information and browser type</li>
                    <li>IP address and general location data</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <EyeIcon className="w-5 h-5 text-green-600" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Provide personalized travel recommendations and destination guides</li>
                  <li>Improve our website functionality and user experience</li>
                  <li>Send you relevant travel tips and destination updates (with your consent)</li>
                  <li>Analyze website traffic and user behavior to enhance our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Ensure website security and prevent fraud</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldIcon className="w-5 h-5 text-purple-600" />
                  Data Protection & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Security Measures</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>SSL encryption for all data transmission</li>
                    <li>Secure servers with regular security updates</li>
                    <li>Access controls and authentication protocols</li>
                    <li>Regular security audits and monitoring</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Data Retention</h3>
                  <p className="text-gray-600">
                    We retain your personal information only as long as necessary to provide our services and comply with legal obligations. You can request deletion of your data at any time.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CookieIcon className="w-5 h-5 text-orange-600" />
                  Cookies & Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-600">
                    We use essential cookies to ensure our website functions properly and to remember your preferences.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-600">
                    We use analytics cookies to understand how visitors interact with our website and improve user experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Managing Cookies</h3>
                  <p className="text-gray-600">
                    You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldIcon className="w-5 h-5 text-red-600" />
                  Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Objection:</strong> Object to processing of your personal data</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
                </ul>
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
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MailIcon className="w-4 h-4" />
                    <span>privacy@travelwanders.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <PhoneIcon className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card>
              <CardHeader>
                <CardTitle>Policy Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}