import Link from 'next/link';
import LeadCaptureForm from './components/LeadCaptureForm';

const courses = [
  {
    icon: '🌐',
    title: 'Full-Stack Web Development',
    duration: '6 Months',
    fee: '₹18,000',
    desc: 'HTML, CSS, JS, React, Node.js, MongoDB. Build real-world projects and deploy live apps.',
    tag: 'Most Popular',
    forDegree: 'BCA · MCA · B.Tech (any)',
  },
  {
    icon: '🧮',
    title: 'DSA & Competitive Coding',
    duration: '4 Months',
    fee: '₹12,000',
    desc: 'Arrays, Linked Lists, Trees, Graphs, DP. Crack coding interviews at TCS, Infosys, and startups.',
    tag: 'Interview Ready',
    forDegree: 'B.Tech CSE/IT · MCA · BCA 3rd yr',
  },
  {
    icon: '🤖',
    title: 'Python / AI / ML',
    duration: '5 Months',
    fee: '₹15,000',
    desc: 'Python, NumPy, Pandas, ML algorithms, model building and deployment.',
    tag: 'Future Tech',
    forDegree: 'Any degree · No prior coding needed',
  },
  {
    icon: '⚙️',
    title: 'C / C++ Programming',
    duration: '3 Months',
    fee: '₹8,000',
    desc: 'Programming fundamentals, OOP, STL, competitive coding with C++.',
    tag: 'Strong Foundation',
    forDegree: 'BCA 1st yr · B.Tech 1st yr · 12th pass',
  },
];

const batches = [
  { course: 'Full-Stack Web Dev', date: 'June 1, 2026', time: 'Morning  9–11 AM', seats: 8, color: 'border-blue-400' },
  { course: 'DSA & Competitive Coding', date: 'June 1, 2026', time: 'Evening  6–8 PM', seats: 6, color: 'border-green-400' },
  { course: 'Python / AI / ML', date: 'June 15, 2026', time: 'Morning  10–12 PM', seats: 10, color: 'border-purple-400' },
  { course: 'C / C++ Programming', date: 'June 15, 2026', time: 'Evening  5–7 PM', seats: 12, color: 'border-orange-400' },
];

const degreeGuide = [
  {
    degree: 'BCA (1st–2nd year)',
    icon: '📘',
    path: 'C/C++ first → then Full-Stack Web Dev',
    why: 'Build your programming logic first. Web dev becomes 2× easier after C++.',
  },
  {
    degree: 'BCA (3rd year / Fresher)',
    icon: '🎯',
    path: 'DSA + Full-Stack Web Dev (parallel)',
    why: 'Placements are close. You need both interview skills and a project portfolio.',
  },
  {
    degree: 'MCA (1st–2nd year)',
    icon: '📗',
    path: 'DSA + Full-Stack Web Dev',
    why: 'You already have CS basics. Skip the basics, go straight to what companies test.',
  },
  {
    degree: 'B.Tech CSE / IT',
    icon: '🏗️',
    path: 'DSA (primary) + mock interviews',
    why: 'Your college gave you theory. You need 200+ problems solved under real pressure.',
  },
  {
    degree: 'B.Tech non-CS (ECE, Mech…)',
    icon: '🔄',
    path: 'Python / Full-Stack from scratch',
    why: 'Start clean. Python is the gentlest entry to software. Full-Stack makes you hireable fast.',
  },
  {
    degree: 'M.Tech / MCA Final',
    icon: '🚀',
    path: 'DSA intensive + System Design basics',
    why: 'At M.Tech level companies expect stronger problem-solving. Focus on depth, not breadth.',
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-5">
              For BCA · MCA · B.Tech students in Hisar
            </span>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight text-gray-900">
              Your college taught theory.<br />
              <span className="text-blue-600">We teach you how to get hired.</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-lg">
              Most BCA, MCA & B.Tech graduates in Hisar struggle to crack software interviews —
              not because they are not smart, but because their college never taught what companies actually test.
              <strong className="text-gray-800"> We fix that.</strong>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Book Free Demo Class
              </Link>
              <Link href="/courses" className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                View Courses
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm">
              <span className="flex items-center gap-1.5 text-orange-600 font-semibold">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse inline-block" />
                Next batch: June 1, 2026
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">Limited seats per batch</span>
            </div>
          </div>

          <div>
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      {/* ── Mentor Credibility Strip ── */}
      <section className="bg-gray-900 border-b border-gray-800 px-4 sm:px-6 py-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-lg flex-shrink-0">P</div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">IIT Alumnus · 8 Years at Top Companies</p>
              <p className="text-blue-300 text-xs">Peak salary: ₹80–90 LPA · Founder</p>
            </div>
          </div>
          <div className="hidden sm:block text-gray-600 text-2xl font-thin">+</div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-black text-lg flex-shrink-0">N</div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">NIT Alumnus · 8 Years at Top Companies</p>
              <p className="text-indigo-300 text-xs">Peak salary: ₹80–90 LPA · Co-founder</p>
            </div>
          </div>
          <div className="hidden sm:block h-10 border-l border-gray-700" />
          <p className="text-gray-300 text-sm max-w-xs text-center sm:text-left">
            Your mentors have <strong className="text-white">been there</strong>. They teach from the inside — not from a textbook.
          </p>
        </div>
      </section>

      {/* ── "Does this sound like you?" — Pain points ── */}
      <section className="bg-gray-900 px-4 sm:px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white text-center mb-2">
            Does any of this sound familiar?
          </h2>
          <p className="text-gray-400 text-center text-sm mb-10">If yes — you are exactly who CodeLab Hisar is built for.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { quote: '"I have a BCA degree but failed TCS NQT twice. I don\'t know what I\'m doing wrong."', who: 'BCA Graduate' },
              { quote: '"My college taught Java theory for 3 years. I still can\'t build a single working project."', who: 'B.Tech CSE Student' },
              { quote: '"I\'m in MCA 2nd year. Campus placements are in 6 months. I barely know DSA."', who: 'MCA Student' },
              { quote: '"I\'m a B.Tech ECE student. I want to switch to software. I don\'t know where to start."', who: 'B.Tech non-CS Student' },
            ].map((p, i) => (
              <div key={i} className="bg-gray-800 border border-gray-700 rounded-2xl p-5">
                <p className="text-gray-300 text-sm italic leading-relaxed">{p.quote}</p>
                <p className="mt-3 text-xs font-bold text-blue-400">{p.who}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── College vs Industry Gap ── */}
      <section className="px-4 sm:px-6 py-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900">
            What your college teaches <span className="text-red-500">vs</span> what companies test
          </h2>
          <p className="text-gray-500 mt-2 text-sm">This gap is why most Hisar graduates struggle in interviews.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="bg-red-50 p-6">
            <h3 className="font-black text-red-700 mb-5 flex items-center gap-2">
              <span className="text-xl">🏫</span> What your college covers
            </h3>
            <ul className="space-y-3">
              {[
                'Theory notes on OS, DBMS, Networks',
                'Java programs copied from textbooks',
                'Semester exam pattern (memorise & write)',
                'CGPA and attendance focus',
                'Viva questions from a fixed set',
                'C programs that print Fibonacci series',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                  <span className="text-red-400 font-bold mt-0.5">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-green-50 p-6 border-l border-gray-200">
            <h3 className="font-black text-green-700 mb-5 flex items-center gap-2">
              <span className="text-xl">🏢</span> What TCS / Infosys / startups test
            </h3>
            <ul className="space-y-3">
              {[
                'Live DSA problem solving in 45 minutes',
                'Build and explain a real project end-to-end',
                'Write clean code under time pressure',
                'GitHub portfolio with deployed projects',
                'Communication — explain your thought process',
                'React, Node.js, APIs — not textbook Java',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-center mt-6 text-sm text-gray-500">
          CodeLab Hisar teaches exactly what is in the right column.{' '}
          <Link href="/courses" className="text-blue-600 font-semibold hover:underline">See our full syllabus →</Link>
        </p>
      </section>

      {/* ── Which course for your degree ── */}
      <section className="bg-blue-600 px-4 sm:px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-white">Which course is right for your degree?</h2>
            <p className="text-blue-200 mt-2 text-sm">Pick your degree — we tell you exactly where to start.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {degreeGuide.map((d, i) => (
              <div key={i} className="bg-white rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{d.icon}</span>
                  <h3 className="font-black text-gray-900 text-sm">{d.degree}</h3>
                </div>
                <p className="text-xs font-bold text-blue-600 mb-1">Recommended path:</p>
                <p className="text-sm font-semibold text-gray-800 mb-2">{d.path}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{d.why}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-blue-200 text-sm">
            Not sure?{' '}
            <a href="https://wa.me/919992233434" target="_blank" rel="noopener noreferrer" className="text-white font-semibold underline">
              WhatsApp us
            </a>{' '}
            — we will help you decide in 5 minutes.
          </p>
        </div>
      </section>

      {/* ── Upcoming Batches ── */}
      <section className="px-4 sm:px-6 py-14 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-gray-900">Upcoming <span className="text-blue-600">Batches</span></h2>
          <p className="text-gray-500 mt-1 text-sm">Seats are limited. Secure yours with a free demo class.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {batches.map((b, i) => (
            <div key={i} className={`bg-white border-l-4 ${b.color} border border-gray-100 rounded-2xl p-5 flex items-center justify-between`}>
              <div>
                <p className="font-bold text-gray-800">{b.course}</p>
                <p className="text-sm text-gray-500 mt-0.5">{b.date} · {b.time}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="inline-block text-xs font-bold bg-orange-50 text-orange-600 border border-orange-200 px-2 py-1 rounded-lg">
                  {b.seats} seats left
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Book Your Free Demo Class →
          </Link>
        </div>
      </section>

      {/* ── CodeLab vs Others ── */}
      <section className="bg-gray-50 px-4 sm:px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-gray-900">Why CodeLab Hisar — not other institutes?</h2>
            <p className="text-gray-500 mt-1 text-sm">A simple comparison.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm rounded-2xl overflow-hidden border border-gray-200">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-300">IECS / Sarva</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-300">Online Courses</th>
                  <th className="px-4 py-3 text-center font-semibold text-blue-300">CodeLab Hisar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {[
                  ['Focus', 'Govt certs (CCC, DCA)', 'Self-paced videos', 'Software job placement'],
                  ['Target student', 'Basic IT literacy', 'Anyone, no structure', 'BCA / MCA / B.Tech'],
                  ['Interview prep', '✗ None', '✗ None', '✓ Full mock interviews'],
                  ['Projects built', '✗ None', '⚡ Incomplete', '✓ 2–3 deployed projects'],
                  ['Offline classes', '✓ Yes', '✗ No', '✓ Yes, in Hisar'],
                  ['DSA training', '✗ No', '⚡ Partial', '✓ 150+ problems solved'],
                  ['Placement support', '✗ No', '✗ No', '✓ Resume + referrals'],
                ].map(([feature, col1, col2, col3], i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">{feature}</td>
                    <td className="px-4 py-3 text-center text-gray-400">{col1}</td>
                    <td className="px-4 py-3 text-center text-gray-400">{col2}</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-600">{col3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Courses ── */}
      <section className="px-4 sm:px-6 py-14 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900">Our <span className="text-blue-600">Courses</span></h2>
          <p className="text-gray-500 mt-2 text-sm">Each course is built around what interviewers actually ask — not what textbooks say.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow relative flex flex-col">
              <span className="absolute top-4 right-4 text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">
                {c.tag}
              </span>
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">{c.title}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-blue-600 font-medium">{c.duration}</span>
                <span className="text-gray-300">·</span>
                <span className="text-xs font-bold text-gray-700">{c.fee}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{c.desc}</p>
              <p className="mt-3 text-xs text-gray-400 border-t border-gray-50 pt-3">Best for: {c.forDegree}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/courses" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            View Full Syllabus →
          </Link>
        </div>
      </section>

      {/* ── ROI framing ── */}
      <section className="bg-blue-600 px-4 sm:px-6 py-12 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black mb-6">The Return on Investment</h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: 'DSA Course fee', value: '₹12,000' },
              { label: 'Fresher salary at TCS', value: '₹3.5 LPA' },
              { label: 'Fee recovered in', value: '41 days' },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-black">{s.value}</p>
                <p className="text-blue-200 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-blue-200 text-xs mt-6">Based on TCS NQT 2025 fresher package. Results vary by company and performance.</p>
        </div>
      </section>

      {/* ── Success Stories snippet ── */}
      <section className="px-4 sm:px-6 py-14 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-gray-900">From <span className="text-blue-600">Our Students</span></h2>
          <p className="text-gray-500 mt-2 text-sm">Honest accounts — including the hard parts.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { initials: 'PY', color: 'bg-pink-500', name: 'Priya Yadav', degree: 'B.Tech CSE · TCS System Engineer', quote: 'Failed TCS NQT twice before CodeLab. Cleared it after 4 months of DSA practice here. The mock interviews were exactly like the real thing.', salary: '₹3.8 LPA' },
            { initials: 'RS', color: 'bg-blue-500', name: 'Rahul Sharma', degree: 'B.A. Graduate · Junior Frontend Dev', quote: 'Applied to 40+ companies before getting an offer. It took 7 months. But I\'m in the industry now and growing fast.', salary: '₹2.8 LPA' },
            { initials: 'DB', color: 'bg-green-600', name: 'Deepak Bansal', degree: '12th Pass · Frontend Intern', quote: 'Got a paid internship before even starting college. ₹8,000/month at 18 with real work experience.', salary: '₹8k/month' },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className={`${s.color} text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs flex-shrink-0`}>{s.initials}</div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{s.name}</p>
                  <p className="text-xs text-gray-400">{s.degree}</p>
                </div>
                <span className="ml-auto text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{s.salary}</span>
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed">&ldquo;{s.quote}&rdquo;</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/success-stories" className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
            Read All Stories →
          </Link>
        </div>
      </section>

      {/* ── Blog Teaser ── */}
      <section className="bg-gray-50 px-4 sm:px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-gray-900">From the <span className="text-blue-600">Blog</span></h2>
            <p className="text-gray-500 mt-2 text-sm">Tips, guides, and honest career advice for Hisar students.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'BCA ke baad kya karein? Complete roadmap for 2026', date: 'May 18, 2026', tag: 'BCA', mins: '5 min' },
              { title: 'Top 10 DSA Questions Every Fresher Must Know', date: 'May 15, 2026', tag: 'DSA', mins: '8 min' },
              { title: 'How to Land a Paid Internship in 90 Days', date: 'May 10, 2026', tag: 'Career', mins: '6 min' },
            ].map((b, i) => (
              <Link href="/blog" key={i} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow block">
                <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{b.tag}</span>
                <h3 className="mt-3 font-bold text-gray-800 text-sm leading-snug">{b.title}</h3>
                <p className="mt-2 text-xs text-gray-400">{b.date} · {b.mins} read</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/blog" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              Read All Posts →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="px-4 sm:px-6 py-20 text-center">
        <h2 className="text-4xl font-black text-gray-900">
          Stop struggling with interviews.<br />
          <span className="text-blue-600">Start getting offers.</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Come for a free demo class. No commitment, no fees. Just 2 hours that might change where your career goes.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors">
            Book Free Demo Class
          </Link>
          <a href="https://wa.me/919992233434" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-colors">
            WhatsApp: 9992233434
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">Next batch starts June 1, 2026 · Hisar · Limited seats</p>
      </section>
    </>
  );
}
