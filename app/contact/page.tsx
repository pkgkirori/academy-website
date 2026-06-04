'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', degree: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 py-14 text-center">
        <h1 className="text-4xl font-black text-gray-900">Book a <span className="text-blue-600">Free Demo Class</span></h1>
        <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto">
          Come in for 2 hours. See how we teach. Meet the instructor. Talk to current students.
          No fees, no commitment — just clarity.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium bg-orange-50 border border-orange-200 text-orange-700 px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse inline-block" />
          Next batch starts June 1, 2026 · Seats filling fast
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left — Contact Info */}
          <div className="space-y-5">
            <h2 className="text-xl font-black text-gray-900">Reach Us</h2>

            <a href="tel:9992233434" className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📞</div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Call us</p>
                <p className="font-bold text-gray-800">+91 9992233434</p>
                <p className="text-xs text-gray-400">Mon–Sat, 9 AM – 8 PM</p>
              </div>
            </a>

            <a
              href="https://wa.me/919992233434"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-green-50 border border-green-100 rounded-2xl hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">WhatsApp — fastest reply</p>
                <p className="font-bold text-gray-800">+91 9992233434</p>
                <p className="text-xs text-green-600">Usually replies within 30 minutes</p>
              </div>
            </a>

            <a href="mailto:info@codelabhisar.com" className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">✉️</div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Email</p>
                <p className="font-bold text-gray-800">info@codelabhisar.com</p>
              </div>
            </a>

            <a
              href="https://instagram.com/codelabhisar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 rounded-2xl hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Instagram</p>
                <p className="font-bold text-gray-800">@codelabhisar</p>
                <p className="text-xs text-purple-600">Daily tips & student updates</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📍</div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Location</p>
                <p className="font-bold text-gray-800">Hisar, Haryana</p>
                <p className="text-xs text-gray-400">Exact address shared on WhatsApp</p>
              </div>
            </div>

            {/* Centre Hours */}
            <div className="bg-gray-50 rounded-2xl p-5">
              <h3 className="font-bold text-gray-800 mb-3 text-sm">Centre Hours</h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
                  { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
                  { day: 'Sunday', time: '10:00 AM – 2:00 PM' },
                ].map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-gray-500">{h.day}</span>
                    <span className="font-medium text-gray-800">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <h2 className="text-xl font-black text-gray-900 mb-2">Book Your Free Demo Class</h2>
            <p className="text-sm text-gray-500 mb-6">Fill this in — we will call you to confirm the slot.</p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-3">✅</div>
                <h3 className="text-xl font-bold text-green-800">Booked!</h3>
                <p className="text-green-700 mt-2">We&apos;ll call <strong>{form.phone}</strong> within a few hours to confirm your demo slot.</p>
                <p className="text-sm text-green-600 mt-2">
                  Or reach us faster on{' '}
                  <a href="https://wa.me/919992233434" className="underline font-medium">WhatsApp: 9992233434</a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp Number *"
                  required
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  required
                  value={form.degree}
                  onChange={e => setForm({ ...form, degree: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="">Your current degree / background *</option>
                  <option value="bca">BCA (1st / 2nd year)</option>
                  <option value="bca3">BCA (3rd year / Fresher)</option>
                  <option value="mca">MCA (1st / 2nd year)</option>
                  <option value="btech-cs">B.Tech CSE / IT</option>
                  <option value="btech-non-cs">B.Tech non-CS (ECE, Mech, Civil…)</option>
                  <option value="mtech">M.Tech / MCA Final</option>
                  <option value="12th">12th Pass</option>
                  <option value="other">Other</option>
                </select>
                <select
                  required
                  value={form.course}
                  onChange={e => setForm({ ...form, course: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="">Which course interests you? *</option>
                  <option value="fullstack">Full-Stack Web Development (6 months · ₹18,000)</option>
                  <option value="dsa">DSA & Competitive Coding (4 months · ₹12,000)</option>
                  <option value="python">Python / AI / ML (5 months · ₹15,000)</option>
                  <option value="cpp">C / C++ Programming (3 months · ₹8,000)</option>
                  <option value="unsure">Not sure — help me decide</option>
                </select>
                <textarea
                  placeholder="Any specific questions? (optional)"
                  rows={3}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  Book My Free Demo Class →
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Prefer WhatsApp?{' '}
                  <a href="https://wa.me/919992233434" className="text-green-600 font-medium">Message us directly</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="px-4 sm:px-6 pb-10 max-w-5xl mx-auto">
        <h2 className="text-xl font-black text-gray-900 mb-4">Find Us in Hisar</h2>
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            title="CodeLab Hisar Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55941.73437423437!2d75.68529!3d29.15195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232b600000001%3A0x8e6b2a7d7d7d7d7d!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">
          Exact address shared via WhatsApp after you book a demo class.
        </p>
      </section>

      {/* Student FAQ */}
      <section className="bg-gray-50 px-4 sm:px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">Student Questions</h2>
          <p className="text-center text-gray-500 text-sm mb-8">Things BCA / MCA / B.Tech students usually ask us.</p>
          <div className="space-y-4">
            {[
              { q: 'My college already teaches programming. Why do I need CodeLab?', a: 'College teaches you to pass exams. Companies test live problem-solving, DSA, real projects, and communication under pressure. These are different skills. Most BCA/BTech students discover this gap only when they start applying for jobs — we bridge it before that happens.' },
              { q: 'I\'m in 1st year BCA. Is it too early to join?', a: 'Not at all. Starting in 1st year with C/C++ foundations puts you 2 years ahead of your classmates. By 3rd year you\'ll have real projects on GitHub when others are just starting to think about placements.' },
              { q: 'I failed TCS NQT / campus interviews. Can you help?', a: 'Yes — this is exactly who we help most. The DSA + mock interview course is specifically designed for students who have the degree but failed the interview. Most students see improvement within the first month.' },
              { q: 'Do I need any prior coding knowledge?', a: 'No. We have separate starting points for complete beginners (C/C++ first) and students who already know basics (DSA or Full-Stack directly).' },
              { q: 'Is there an EMI option for fees?', a: 'Yes. We offer 2–3 month installment plans. Discuss when you visit or WhatsApp us.' },
              { q: 'Can I attend a demo class before deciding?', a: 'Absolutely — that is what the demo class is for. Walk in, attend 2 hours, see the teaching style, talk to current students. No fee, no form, no pressure.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 text-sm mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent FAQ */}
      <section className="px-4 sm:px-6 py-14 max-w-3xl mx-auto">
        <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">For Parents</h2>
        <p className="text-center text-gray-500 text-sm mb-8">Common questions from parents before enrolling their child.</p>
        <div className="space-y-4">
          {[
            { q: 'Is this a recognised / government-certified course?', a: 'Our courses are industry-aligned, not government-certificate programmes. We focus on getting your child a software job — which is what employers value, not a certificate. However, students who want government certifications (like NIELIT O-Level) can pursue those alongside.' },
            { q: 'What is the fee and is there a guarantee?', a: 'Fees range from ₹8,000 (C/C++) to ₹18,000 (Full-Stack). We offer a full refund if your child is not satisfied after the first week. We also provide placement support — resume building, mock interviews, and referrals — until they get placed.' },
            { q: 'My child already goes to college. Can they manage both?', a: 'Yes. We offer morning and evening batches specifically so students can attend classes alongside college. Many of our students are in 2nd or 3rd year of BCA/MCA/BTech while studying with us.' },
            { q: 'What kind of job will my child get after this?', a: 'Realistic first jobs range from ₹2.5 LPA (internships, small IT firms) to ₹6 LPA (product startups, mid-tier MNCs). Students who invest in DSA training target TCS/Infosys at ₹3.5–4.5 LPA. Salaries grow fast in tech — 2–3 years of experience typically doubles the starting salary.' },
            { q: 'How is this different from the computer classes near our home?', a: 'Local institutes like IECS and Sarva teach basic computer literacy — CCC, DCA, MS Office, Tally. These are for general computer skills, not software engineering jobs. CodeLab specifically trains for software company interviews, coding rounds, and building deployable projects.' },
          ].map((faq, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-gray-800 text-sm mb-2">{faq.q}</h3>
              <p className="text-sm text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
          <p className="text-sm text-blue-800 font-medium">Parents are welcome to visit the centre with their child. We are happy to answer your questions in person.</p>
          <a href="tel:9992233434" className="inline-block mt-3 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
            Call Us: 9992233434
          </a>
        </div>
      </section>
    </>
  );
}
