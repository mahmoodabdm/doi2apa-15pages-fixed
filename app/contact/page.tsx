"use client";
import { useState } from "react";
export default function Page() {
  const [sent,setSent]=useState(false);
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8 bg-white mt-8 rounded-xl shadow">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="mb-6 text-gray-700">Have a question, bug report, or suggestion? We reply within 24 hours.</p>
        {!sent ? (
          <form onSubmit={(e)=>{e.preventDefault(); setSent(true);}} className="space-y-4">
            <input required placeholder="Your Email" className="w-full p-3 border rounded-lg" />
            <input required placeholder="Subject" className="w-full p-3 border rounded-lg" />
            <textarea required placeholder="Your Message" rows={5} className="w-full p-3 border rounded-lg"></textarea>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold">Send Message</button>
          </form>
        ) : (
          <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-green-800">Thank you! Your message has been received. We'll reply within 24h at support@doi2apa.com</div>
        )}
        <div className="mt-8 pt-6 border-t text-gray-600">
          <p><b>Email:</b> support@doi2apa.com</p>
          <p><b>Location:</b> Baghdad, Iraq - Serving researchers worldwide</p>
        </div>
      </div>
    </main>
  )
}
