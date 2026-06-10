'use client';
import { useState } from 'react';

export default function LeadCaptureForm() {
  const [form, setForm] = useState({ name: '', phone: '', course: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-3">🎉</div>
        <h3 className="text-xl font-bold text-green-800">Thank you, {form.name}!</h3>
        <p className="text-green-700 mt-2">We'll call you on <strong>{form.phone}</strong> within 24 hours.</p>
        <p className="text-green-600 text-sm mt-2">Meanwhile, explore our <a href="/courses" className="underline font-medium">courses</a>.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-1">Book a Free Demo Class</h3>
      <p className="text-sm text-gray-500 mb-5">2 hours. No fees. See how we teach before you decide.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Full Name"
          required
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="tel"
          placeholder="Mobile Number (WhatsApp)"
          required
          pattern="[0-9]{10}"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <select
          required
          value={form.course}
          onChange={e => setForm({ ...form, course: e.target.value })}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
        >
          <option value="">Which course interests you?</option>
          <option value="zero-to-hero">Zero to Hero — Software Engineer Program</option>
          <option value="fullstack">Full-Stack Web Development</option>
          <option value="dsa">DSA / Competitive Coding</option>
          <option value="python">Python / AI / ML</option>
          <option value="cpp">C / C++ / Java Programming</option>
          <option value="unsure">Not sure — help me decide</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm"
        >
          Book Free Demo Class →
        </button>
        <p className="text-xs text-gray-400 text-center">No spam. We'll only call once to understand your goals.</p>
      </form>
    </div>
  );
}
