import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 py-14 text-center">
        <h1 className="text-4xl font-black text-gray-900">About <span className="text-blue-600">CodeLab Hisar</span></h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          We started with one mission: make quality tech education accessible to every student in Hisar and beyond.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Our Story</h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                CodeLab Hisar was founded by software industry professionals who saw a massive gap: thousands of students in Haryana had the talent and hunger to get into tech, but lacked proper guidance and hands-on training.
              </p>
              <p>
                Online courses existed, but they were unstructured, impersonal, and incomplete. Students needed real classrooms, real mentors, and real accountability. That&apos;s why we started CodeLab Hisar.
              </p>
              <p>
                We built an offline, in-person coaching centre in Hisar where every student gets individual attention, practical projects, and complete interview preparation. We don&apos;t just teach code — we build careers.
              </p>
            </div>
          </div>
          <div className="bg-blue-50 rounded-3xl p-8">
            <div className="space-y-4">
              {[
                { label: 'Founded', value: '2025' },
                { label: 'Location', value: 'Hisar, Haryana' },
                { label: 'Students trained', value: '50+' },
                { label: 'Placement rate', value: '80%+' },
                { label: 'Courses offered', value: '4' },
                { label: 'Teaching mode', value: 'Offline Classroom' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between border-b border-blue-100 pb-3">
                  <span className="text-sm text-gray-500">{item.label}</span>
                  <span className="text-sm font-bold text-gray-800">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 px-4 sm:px-6 py-14">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <span className="text-4xl block mb-4">🎯</span>
            <h3 className="text-xl font-black text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To provide world-class, affordable, offline coding education to students in Hisar and Haryana.
              We want every student — regardless of background, stream, or college — to have a fair shot at a
              high-paying software career.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <span className="text-4xl block mb-4">🔭</span>
            <h3 className="text-xl font-black text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become Haryana&apos;s most trusted coding institution where 1000+ students are placed in
              tech companies every year. We envision a Hisar where tech careers are not just for IIT graduates,
              but accessible to every motivated learner.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Your Mentors */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">Meet Your Mentors</h2>
        <p className="text-center text-gray-500 text-sm mb-10">Not just teachers. Engineers who lived what they teach.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-black flex-shrink-0">P</div>
              <div>
                <h3 className="text-lg font-black text-gray-900">Pankaj</h3>
                <span className="text-sm text-blue-600 font-semibold">Founder & Lead Instructor</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="text-blue-700 font-bold text-sm">IIT Alumnus</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">8 Years Industry</span>
              <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">₹80–90 LPA Peak</span>
              <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Product Companies</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Spent 8 years building software at top product companies. Has personally been through DSA rounds, system design interviews, and MAANG-level hiring from the inside. Knows exactly what companies look for — and what most colleges never teach.
            </p>
            <p className="text-gray-400 text-xs italic border-l-2 border-blue-200 pl-3">
              &ldquo;I left a ₹80 LPA job to build something that changes careers in my home region. That decision keeps me motivated every day.&rdquo;
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center text-white text-2xl font-black flex-shrink-0">N</div>
              <div>
                <h3 className="text-lg font-black text-gray-900">Co-Founder</h3>
                <span className="text-sm text-indigo-600 font-semibold">Senior Instructor</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="text-indigo-700 font-bold text-sm">NIT Alumnus</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">8 Years Industry</span>
              <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">₹80–90 LPA Peak</span>
              <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">Full-Stack Expert</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              8 years of hands-on software engineering at product companies. Deep expertise in full-stack development and algorithms. Brings real-world engineering practices — code reviews, system design, production debugging — into every class session.
            </p>
            <p className="text-gray-400 text-xs italic border-l-2 border-indigo-200 pl-3">
              &ldquo;The gap between what colleges teach and what companies hire for is enormous. That gap is exactly what we fix at CodeLab.&rdquo;
            </p>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
          <p className="text-blue-800 font-bold">IIT + NIT · 16 years combined industry experience · ₹80–90 LPA each</p>
          <p className="text-blue-600 text-sm mt-1">When your teachers have been at the top, they know exactly how to get you there.</p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">What Makes Us Different</h2>
        <div className="space-y-4">
          {[
            {
              icon: '🏫',
              title: 'Offline, In-Person Classes',
              desc: 'We believe in-person learning is irreplaceable for coding. You can ask questions instantly, see your mentor code in real-time, and learn from other students\' mistakes too.',
            },
            {
              icon: '🎓',
              title: 'IITian + NITian Instructors — ₹80 LPA Industry Experience',
              desc: 'Your instructors are an IIT and NIT alumnus with 8 years each in top product companies at ₹80–90 LPA. They left industry to teach you exactly what it takes — because they\'ve done it themselves. No other institute in Hisar has this.',
            },
            {
              icon: '🗺️',
              title: 'Personalized Career Roadmaps',
              desc: 'Every student is different. We assess your background, goals, and timeline, and create a custom plan — which course, which company to target, what salary to expect.',
            },
            {
              icon: '💡',
              title: 'Projects Over Theory',
              desc: 'We prioritize building things over memorizing concepts. Every course ends with 2–3 deployable projects you can show in interviews.',
            },
            {
              icon: '📋',
              title: 'End-to-End Placement Support',
              desc: 'Resume building, LinkedIn optimization, mock interviews, soft skills training, and referrals. We stay with you until you get the offer.',
            },
            {
              icon: '📍',
              title: 'Local, Affordable, and Accessible',
              desc: 'Quality tech education in Hisar. No need to spend lakhs on distant institutes. We\'re here, affordable, and we deliver results.',
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-sm transition-shadow">
              <span className="text-3xl mt-1 flex-shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-blue-600 text-white px-4 sm:px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-8">Our Values</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Honesty', icon: '🤝', desc: 'We tell you the truth about what it takes to get a software job — no false promises, no shortcuts.' },
              { title: 'Consistency', icon: '📅', desc: 'We teach students that daily practice beats occasional brilliance. 1 hour every day is better than 10 hours once a week.' },
              { title: 'Results', icon: '🏆', desc: 'We measure our success by our students\' placements. If you don\'t get hired, we haven\'t done our job.' },
            ].map((v, i) => (
              <div key={i} className="text-center p-6 bg-blue-700 rounded-2xl">
                <span className="text-4xl block mb-3">{v.icon}</span>
                <h3 className="font-black text-lg mb-2">{v.title}</h3>
                <p className="text-blue-100 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-16 text-center">
        <h2 className="text-3xl font-black text-gray-900">Come Visit Us</h2>
        <p className="mt-3 text-gray-600 max-w-lg mx-auto">
          The best way to know if CodeLab is right for you is to visit, talk to our instructors, and meet current students.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Get in Touch
          </Link>
          <a href="https://wa.me/919992233434" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors">
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
