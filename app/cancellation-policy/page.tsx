// ==================== CANCELLATION POLICY PAGE ====================
// File: app/cancellation-policy/page.tsx

import { XCircle, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function CancellationPolicyPage() {
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
            <span className="text-gray-900 font-medium">Cancellation Policy</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl mb-6 shadow-lg">
            <XCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cancellation Policy</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understand our cancellation terms for services and products. We aim to provide flexibility while maintaining operational efficiency.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last Updated: December 2025</p>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 text-blue-600 font-bold">1</span>
              Service Cancellations
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <p className="font-semibold text-gray-900">IT Services & Cyber Security:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cancellation possible before project initiation with full refund</li>
                <li>After initiation, cancellation subject to work completed billing</li>
                <li>Minimum 48-hour notice required for scheduled maintenance or consultations</li>
                <li>Ongoing subscription services require 30-day cancellation notice</li>
              </ul>
              
              <p className="font-semibold text-gray-900 mt-6">Digital Marketing Services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Campaign cancellations accepted before launch with full refund</li>
                <li>Running campaigns can be cancelled with pro-rata billing</li>
                <li>Monthly retainer agreements require 30-day notice for cancellation</li>
              </ul>

              <p className="font-semibold text-gray-900 mt-6">Skills Development Programs:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Free cancellation up to 14 days before program start</li>
                <li>50% fee applicable for cancellations 7-13 days before start</li>
                <li>No refund for cancellations less than 7 days before start</li>
                <li>Transfer to future sessions available with 50% transfer fee</li>
              </ul>

              <p className="font-semibold text-gray-900 mt-6">Finance Audit Services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cancellation before audit commencement: full refund</li>
                <li>Cancellation after commencement: billed for work completed</li>
                <li>Rescheduling available once without penalty</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold">2</span>
              Product Order Cancellations
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <p className="font-semibold text-gray-900">Before Shipping:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Orders can be cancelled free of charge before shipment</li>
                <li>Cancellation requests must be made within 24 hours of order placement</li>
                <li>Full refund processed within 5-7 business days</li>
              </ul>
              
              <p className="font-semibold text-gray-900 mt-6">After Shipping:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Orders cannot be cancelled once shipped</li>
                <li>Follow our Return & Refund Policy for shipped items</li>
                <li>Refuse delivery if you no longer want the item (refund minus shipping costs)</li>
              </ul>

              <p className="font-semibold text-gray-900 mt-6">Custom/Personalized Products:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cancellation only possible within 2 hours of order placement</li>
                <li>Once production begins, orders cannot be cancelled</li>
                <li>Non-refundable once manufacturing/customization is initiated</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 text-purple-600 font-bold">3</span>
              Investor Program Cancellations
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Investment commitments can be withdrawn before finalization</li>
                <li>Cancellation must be submitted in writing via email</li>
                <li>Processing fees (if any) are non-refundable</li>
                <li>Consultation fees paid are not refundable after services rendered</li>
                <li>No penalties for cancellation before investment execution</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3 text-orange-600 font-bold">4</span>
              Social Welfare & Divine Industries
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <p className="font-semibold text-gray-900">Social Welfare Programs:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Donations are non-refundable and non-cancellable</li>
                <li>Program enrollments can be cancelled before program start</li>
                <li>Volunteer commitments should provide 7-day notice for cancellation</li>
              </ul>
              
              <p className="font-semibold text-gray-900 mt-6">Divine Industries:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Standard product cancellation terms apply</li>
                <li>Custom religious items follow custom product cancellation policy</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3 text-red-600 font-bold">5</span>
              Cancellation Process
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <p>To cancel an order or service:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email us at info@payzonindia.com with your order/service ID</li>
                <li>Call our customer support at +91 755 485 9540</li>
                <li>Provide cancellation reason (optional but helps us improve)</li>
                <li>Wait for cancellation confirmation via email</li>
                <li>Refunds (if applicable) processed according to refund policy timelines</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3 text-teal-600 font-bold">6</span>
              Force Majeure
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <p>Payzon India reserves the right to cancel or reschedule services due to circumstances beyond our control, including natural disasters, government regulations, pandemics, or technical failures. In such cases, customers will be offered:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Full refund of any advance payments</li>
                <li>Rescheduling to a mutually agreed date</li>
                <li>Credit toward future services</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 text-indigo-600 font-bold">7</span>
              Important Notes
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cancellation policies may vary based on promotional offers or special agreements</li>
                <li>All cancellations are subject to verification and approval</li>
                <li>Multiple cancellations may result in account restrictions</li>
                <li>Payzon India reserves the right to modify this policy with prior notice</li>
                <li>For specific queries, please contact our customer support team</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="mb-6 text-blue-100">
            If you have any questions about our cancellation policy, please contact us.
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