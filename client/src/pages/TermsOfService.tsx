import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileTextIcon, UsersIcon, ShieldIcon, AlertTriangleIcon, ScaleIcon, MailIcon } from '@/components/icons/LightweightIcons';
import { useEffect } from 'react';

export default function TermsOfService() {
  useEffect(() => {
    // Update title and meta description to match HTML
    document.title = "Terms of Service & User Agreement - TravelWanders";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terms of Service for TravelWanders - Understand the rules and guidelines for using our travel guide platform and services.');
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
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2">
                <FileTextIcon className="w-4 h-4 mr-2" />
                Terms of Service
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read our terms of service to understand the rules and guidelines for using TravelWanders.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: January 11, 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Agreement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UsersIcon className="w-5 h-5 text-blue-600" />
                  Agreement to Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  By accessing and using TravelWanders ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-gray-600">
                  These Terms of Service apply to all users of the website, including without limitation users who are browsers, vendors, customers, merchants, and contributors of content.
                </p>
              </CardContent>
            </Card>

            {/* Use License */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ScaleIcon className="w-5 h-5 text-green-600" />
                  Use License
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Permission is granted to temporarily download one copy of the materials on TravelWanders for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldIcon className="w-5 h-5 text-purple-600" />
                  User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Account Security</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>You are responsible for maintaining the confidentiality of your account</li>
                    <li>You must notify us immediately of any unauthorized access</li>
                    <li>You are liable for all activities that occur under your account</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Content Guidelines</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Do not post content that is illegal, offensive, or harmful</li>
                    <li>Respect intellectual property rights</li>
                    <li>Do not engage in spam or harassment</li>
                    <li>Provide accurate information in reviews and comments</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Service Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangleIcon className="w-5 h-5 text-orange-600" />
                  Service Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We strive to provide continuous service, but we do not guarantee that our website will be available 100% of the time. We may experience downtime due to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Scheduled maintenance and updates</li>
                  <li>Technical issues or server problems</li>
                  <li>Third-party service interruptions</li>
                  <li>Force majeure events</li>
                </ul>
                <p className="text-gray-600">
                  We reserve the right to modify or discontinue our service at any time without prior notice.
                </p>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangleIcon className="w-5 h-5 text-red-600" />
                  Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Excludes all representations and warranties relating to this website and its contents</li>
                  <li>Does not guarantee the accuracy of travel information or recommendations</li>
                  <li>Is not responsible for any loss or damage arising from your use of this website</li>
                  <li>Does not warrant that the website will be constantly available or error-free</li>
                </ul>
              </CardContent>
            </Card>

            {/* Travel Information */}
            <Card>
              <CardHeader>
                <CardTitle>Travel Information Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Travel information provided on TravelWanders is for general guidance only. We strongly recommend that you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Verify all travel requirements and restrictions before traveling</li>
                  <li>Check with official government sources for current travel advisories</li>
                  <li>Obtain appropriate travel insurance</li>
                  <li>Consult with travel professionals for specific advice</li>
                  <li>Research local laws and customs of your destination</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ScaleIcon className="w-5 h-5 text-indigo-600" />
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  In no event shall TravelWanders or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TravelWanders, even if TravelWanders or its authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
                <p className="text-gray-600">
                  Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle>Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card>
              <CardHeader>
                <CardTitle>Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We reserve the right to revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MailIcon className="w-5 h-5 text-blue-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MailIcon className="w-4 h-4" />
                    <span>legal@travelwanders.com</span>
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