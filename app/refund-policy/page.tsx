// File: app/refund-policy/page.tsx

import { RefreshCw, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      {/* <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition">
              <img src="/images/logo.png" alt="Payzon India" className="w-12 h-12" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Payzon India
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div> */}

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 mt-[250px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">Refund Policy</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl mb-6 shadow-lg">
            <RefreshCw className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund Policy</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We strive for your complete satisfaction. Review our refund policy for different services and products offered by Payzon India.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last Updated: December 2025</p>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 text-blue-600 font-bold">1</span>
              Service-Based Refunds
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <p className="font-semibold text-gray-900">IT Services, Cyber Security, Digital Marketing:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Refunds are available within 7 days of service initiation if deliverables have not commenced</li>
                <li>Partial refunds may be issued based on work completed</li>
                <li>Custom project refunds are evaluated on a case-by-case basis</li>
              </ul>
              
              <p className="font-semibold text-gray-900 mt-6">Skills Development Programs:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Full refund available if cancellation is made 14 days before program start date</li>
                <li>50% refund if cancelled 7-13 days before start date</li>
                <li>No refund for cancellations made less than 7 days before start date</li>
              </ul>

              <p className="font-semibold text-gray-900 mt-6">Finance Audit & Investor Programs:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Consultation fees are non-refundable once services have been rendered</li>
                <li>Audit services can be refunded if cancelled before initiation</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold">2</span>
              Product-Based Refunds
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <p className="font-semibold text-gray-900">Physical Products (Toys, Artificial Jewellery, Clothing, Electronics):</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Full refund available within 14 days of delivery for unused, unopened items</li>
                <li>Items must be returned in original packaging with all tags intact</li>
                <li>Electronics require original packaging and accessories for refund eligibility</li>
                <li>Defective items can be returned within 30 days for full refund or replacement</li>
              </ul>
              
              <p className="font-semibold text-gray-900 mt-6">Organic Products (Spices, Vegetables, Farming Products):</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Refund available within 7 days of delivery for quality issues</li>
                <li>Perishable items must be reported within 24 hours of delivery</li>
                <li>Photo evidence of damaged or substandard products required</li>
              </ul>

              <p className="font-semibold text-gray-900 mt-6">Divine Industries Products:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Refunds available within 14 days for unused items</li>
                <li>Damaged items eligible for full refund with photo documentation</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 text-purple-600 font-bold">3</span>
              Refund Process
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <p>To initiate a refund:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact our customer support with your order/service ID</li>
                <li>Provide reason for refund request and supporting documentation</li>
                <li>Our team will review within 2-3 business days</li>
                <li>Approved refunds will be processed within 7-10 business days</li>
                <li>Refunds will be credited to the original payment method</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3 text-orange-600 font-bold">4</span>
              Non-Refundable Items
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <p>The following are not eligible for refunds:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Customized or personalized products</li>
                <li>Downloaded digital content or software</li>
                <li>Services that have been fully rendered</li>
                <li>Perishable goods beyond the return window</li>
                <li>Social Welfare program donations</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3 text-red-600 font-bold">5</span>
              Shipping Costs
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <p>Return shipping costs are the responsibility of the customer unless the return is due to our error or a defective product. In such cases, we will provide a prepaid shipping label.</p>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="mb-6 text-blue-100">
            If you have any questions about our refund policy, please contact us.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Email</p>
                <p className="text-sm text-blue-100">info@payzonindia.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Phone</p>
                <p className="text-sm text-blue-100">+91 755 485 9540</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Address</p>
                <p className="text-sm text-blue-100">Bhopal, Madhya Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}