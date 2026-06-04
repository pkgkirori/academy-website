import IQTest from '../components/IQTest';
import Link from 'next/link';

const companies = [
  { name: 'TCS', type: 'Service', openings: '40,000+', minSalary: '₹3.5 LPA', role: 'Software Engineer' },
  { name: 'Infosys', type: 'Service', openings: '30,000+', minSalary: '₹3.6 LPA', role: 'System Engineer' },
  { name: 'Wipro', type: 'Service', openings: '20,000+', minSalary: '₹3.5 LPA', role: 'Project Engineer' },
  { name: 'HCL', type: 'Service', openings: '15,000+', minSalary: '₹3.8 LPA', role: 'Software Developer' },
  { name: 'Accenture', type: 'Consulting', openings: '25,000+', minSalary: '₹4.5 LPA', role: 'Associate SE' },
  { name: 'Cognizant', type: 'Service', openings: '18,000+', minSalary: '₹4 LPA', role: 'Programmer Analyst' },
  { name: 'Flipkart', type: 'Product', openings: '2,000+', minSalary: '₹18 LPA', role: 'SDE-1' },
  { name: 'Amazon', type: 'Product', openings: '5,000+', minSalary: '₹20 LPA', role: 'SDE-1' },
  { name: 'Google', type: 'Product', openings: '500+', minSalary: '₹30 LPA', role: 'Software Engineer' },
  { name: 'Microsoft', type: 'Product', openings: '1,000+', minSalary: '₹25 LPA', role: 'SWE' },
  { name: 'Startups', type: 'Startup', openings: '1,00,000+', minSalary: '₹5–15 LPA', role: 'Various' },
  { name: 'Capgemini', type: 'Service', openings: '10,000+', minSalary: '₹3.8 LPA', role: 'Analyst' },
];

export default function CareerGuidePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 py-14 text-center">
        <h1 className="text-4xl font-black text-gray-900">Software Engineer <span className="text-blue-600">Career Guide</span></h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know — from zero to your first software job. No fluff, just facts.
        </p>
        {/* Table of Contents */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm">
          {['How to Get a Job', 'Types of Jobs', 'Interview Process', 'First Salary', 'Paid Internships', 'Top Companies', 'How Hard is Java', 'How Much to Study', 'IQ Test'].map((item, i) => (
            <a key={i} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors font-medium">
              {item}
            </a>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-20">

        {/* 1. How to Get a Software Engineer Job */}
        <section id="how-to-get-a-job">
          <h2 className="text-2xl font-black text-gray-900 mb-2">How to Get a Software Engineering Job</h2>
          <p className="text-gray-500 mb-6 text-sm">A step-by-step roadmap from beginner to employed.</p>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Learn a Programming Language', desc: 'Start with C++, Python, or Java. Focus on understanding logic, not memorizing syntax. Spend 1–2 months on this.' },
              { step: '2', title: 'Master Data Structures & Algorithms', desc: 'This is what companies test. Arrays, Linked Lists, Trees, Graphs, Dynamic Programming. Practice 150+ problems on LeetCode.' },
              { step: '3', title: 'Build Real Projects', desc: 'Build 2–3 projects you can demo. A portfolio website, a CRUD app, or an ML model. Projects show employers you can actually code.' },
              { step: '4', title: 'Learn CS Fundamentals', desc: 'Operating Systems, DBMS, Computer Networks, OOP. These are asked in technical rounds at almost every company.' },
              { step: '5', title: 'Build Your Resume & LinkedIn', desc: 'One-page resume with your skills, projects, and education. Active LinkedIn profile. Recruiters search here daily.' },
              { step: '6', title: 'Apply Aggressively', desc: 'Apply to 20–30 companies. Use LinkedIn, Internshala, Naukri, and company career pages. Don\'t wait for the perfect job.' },
              { step: '7', title: 'Crack the Interview', desc: 'Online test → Technical rounds → HR round. Each stage eliminates candidates. Prepare mock interviews.' },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-sm">{s.step}</div>
                <div className="bg-white border border-gray-100 rounded-2xl p-4 flex-1">
                  <h3 className="font-bold text-gray-800">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Types of Software Jobs */}
        <section id="types-of-jobs">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Types of Software Engineering Jobs</h2>
          <p className="text-gray-500 mb-6 text-sm">Choose a specialization that matches your interests and strengths.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Frontend Developer', icon: '🎨', desc: 'Builds the visual part of websites/apps. Uses HTML, CSS, JS, React. Most beginner-friendly entry point.' },
              { title: 'Backend Developer', icon: '⚙️', desc: 'Builds the server, database logic, and APIs. Uses Node.js, Python, Java. Higher pay on average.' },
              { title: 'Full-Stack Developer', icon: '🌐', desc: 'Works on both frontend and backend. Most versatile and in-demand role in startups.' },
              { title: 'Data Engineer / Analyst', icon: '📊', desc: 'Works with large datasets, builds data pipelines. Uses Python, SQL, Spark. Growing field.' },
              { title: 'DevOps Engineer', icon: '🔧', desc: 'Manages deployment, CI/CD, cloud infrastructure. Uses AWS/GCP, Docker, Kubernetes.' },
              { title: 'AI / ML Engineer', icon: '🤖', desc: 'Builds machine learning models and AI systems. Uses Python, TensorFlow, PyTorch. Very high salary.' },
              { title: 'Mobile Developer', icon: '📱', desc: 'Builds iOS (Swift) or Android (Kotlin) apps. React Native allows building both with one codebase.' },
              { title: 'QA / Test Engineer', icon: '🧪', desc: 'Tests software for bugs and quality assurance. Easier to enter and still pays well.' },
            ].map((job, i) => (
              <div key={i} className="flex gap-3 items-start p-4 bg-white border border-gray-100 rounded-2xl hover:shadow-sm transition-shadow">
                <span className="text-3xl">{job.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">{job.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{job.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Interview Process */}
        <section id="interview-process">
          <h2 className="text-2xl font-black text-gray-900 mb-2">What Do Companies Check in Interviews?</h2>
          <p className="text-gray-500 mb-6 text-sm">Here&apos;s what every software interview looks like, round by round.</p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-blue-600 px-5 py-3">
                <h3 className="text-white font-bold">Typical Interview Rounds</h3>
              </div>
              <div className="divide-y divide-gray-50">
                {[
                  { round: 'Round 1', name: 'Online Assessment (OA)', check: 'MCQs on aptitude, logical reasoning, and 1–2 coding questions. Time-pressured.' },
                  { round: 'Round 2', name: 'Technical Round 1', check: 'Live coding on DSA problems. You explain your thought process. LeetCode medium level.' },
                  { round: 'Round 3', name: 'Technical Round 2', check: 'CS fundamentals — OS, DBMS, Computer Networks, OOP. Questions on your projects.' },
                  { round: 'Round 4', name: 'System Design (Senior roles)', check: 'How would you design a system like WhatsApp? Not for freshers usually, but good to know.' },
                  { round: 'Round 5', name: 'HR Round', check: 'Communication, salary negotiation, company culture fit, "tell me about yourself".' },
                ].map((r, i) => (
                  <div key={i} className="px-5 py-4 flex gap-4 items-start">
                    <span className="flex-shrink-0 text-xs font-bold bg-blue-50 text-blue-700 px-2 py-1 rounded-lg">{r.round}</span>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{r.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{r.check}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                <h3 className="font-bold text-green-800 mb-3">They look for</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  {['Strong DSA skills', 'Clean code under pressure', 'CS fundamentals (OS, DBMS, CN)', 'Problem-solving approach', 'Good communication', 'Real project experience'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                <h3 className="font-bold text-red-800 mb-3">Common mistakes</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  {['Jumping to code without thinking', 'Not knowing your own projects', 'Skipping CS fundamentals', 'No practice on LeetCode', 'Poor communication of thought process', 'Giving up when stuck'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><span className="text-red-500 font-bold">✗</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. First Salary */}
        <section id="first-salary">
          <h2 className="text-2xl font-black text-gray-900 mb-2">What Software Engineers Actually Earn in India</h2>
          <p className="text-gray-500 mb-2 text-sm">
            Real numbers from{' '}
            <a href="https://www.levels.fyi/t/software-engineer/levels/entry-level/locations/india" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">levels.fyi</a>
            {' '}— the most trusted salary database for tech. These are <strong>total compensation</strong> (base + stocks + bonus), not just base salary.
          </p>
          <p className="text-xs text-gray-400 mb-6">Last updated: May 2026. If you start in 1st year of BCA/BTech, Tier 4 (MAANG) is a realistic 3–4 year goal. Your first job will likely be Tier 1 or 2 — and that is a great start.</p>

          {/* Tier cards */}
          <div className="space-y-6">

            {/* Tier 1 */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gray-100 px-5 py-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Tier 1 · Where most freshers start</span>
                  <h3 className="font-black text-gray-800 mt-0.5">Service & Mass-Hiring Companies</h3>
                </div>
                <span className="text-xl font-black text-gray-700">₹3.5 – 7 LPA</span>
              </div>
              <div className="divide-y divide-gray-50 bg-white">
                {[
                  { company: 'TCS', role: 'System Engineer', comp: '₹3.5 – 4.5 LPA', note: 'Largest fresher recruiter in India' },
                  { company: 'Infosys', role: 'Systems Engineer', comp: '₹3.6 – 5 LPA', note: 'On-campus & NQT hiring' },
                  { company: 'Wipro', role: 'Project Engineer', comp: '₹3.5 – 4.5 LPA', note: 'WILP & Elite track available' },
                  { company: 'Cognizant', role: 'Programmer Analyst', comp: '₹4 – 5.5 LPA', note: 'GenC program for freshers' },
                  { company: 'HCL', role: 'Software Engineer', comp: '₹3.8 – 5 LPA', note: 'TechBee & campus programs' },
                ].map((r, i) => (
                  <div key={i} className="px-5 py-3 flex items-center justify-between gap-4">
                    <div>
                      <span className="font-bold text-gray-800 text-sm">{r.company}</span>
                      <span className="text-gray-400 text-xs ml-2">{r.role}</span>
                      <p className="text-xs text-gray-400 mt-0.5">{r.note}</p>
                    </div>
                    <span className="text-sm font-bold text-gray-700 flex-shrink-0">{r.comp}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 px-5 py-4 border-t border-gray-100 grid sm:grid-cols-4 gap-4">
                {[
                  { label: 'Practicality', value: '★★★★★', sub: 'Very High', color: 'text-green-600' },
                  { label: 'Prep time', value: '4–8 months', sub: 'From any starting point', color: 'text-gray-700' },
                  { label: 'IQ / Aptitude', value: 'Average', sub: 'Basic logic + reasoning', color: 'text-gray-700' },
                  { label: 'What they test', value: 'Aptitude + Basic Code', sub: 'Loops, arrays, verbal, quant', color: 'text-gray-700' },
                ].map((m, i) => (
                  <div key={i}>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">{m.label}</p>
                    <p className={`font-black text-sm ${m.color}`}>{m.value}</p>
                    <p className="text-xs text-gray-400">{m.sub}</p>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 px-5 py-3 border-t border-green-100">
                <p className="text-xs text-green-800">
                  <strong>Reality check:</strong> Any BCA/MCA/BTech student who studies consistently for 4–8 months can crack Tier 1.
                  These companies run national tests (TCS NQT, Infosys Instep) open to all colleges. Your college name does not matter here — your score does.
                </p>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="border border-blue-200 rounded-2xl overflow-hidden">
              <div className="bg-blue-50 px-5 py-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-wide">Tier 2 · With strong DSA + real projects</span>
                  <h3 className="font-black text-gray-800 mt-0.5">Mid-tier MNCs & Indian Product Startups</h3>
                </div>
                <span className="text-xl font-black text-blue-700">₹8 – 25 LPA</span>
              </div>
              <div className="divide-y divide-gray-50 bg-white">
                {[
                  { company: 'Accenture', role: 'Associate SE', comp: '₹8 – 12 LPA', note: 'Advanced track (GDN)' },
                  { company: 'Capgemini', role: 'Analyst', comp: '₹7 – 10 LPA', note: 'App dev and infra roles' },
                  { company: 'Swiggy', role: 'SDE-1', comp: '₹22 LPA+', note: 'Levels.fyi verified TC' },
                  { company: 'Razorpay', role: 'SDE-1', comp: '₹24.8 LPA+', note: 'Levels.fyi verified TC' },
                  { company: 'Flipkart', role: 'SDE-1', comp: '₹19.6 LPA (median)', note: 'Levels.fyi · ₹9.6L – ₹23.5L range' },
                ].map((r, i) => (
                  <div key={i} className="px-5 py-3 flex items-center justify-between gap-4">
                    <div>
                      <span className="font-bold text-gray-800 text-sm">{r.company}</span>
                      <span className="text-gray-400 text-xs ml-2">{r.role}</span>
                      <p className="text-xs text-gray-400 mt-0.5">{r.note}</p>
                    </div>
                    <span className="text-sm font-bold text-blue-600 flex-shrink-0">{r.comp}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 px-5 py-4 border-t border-blue-100 grid sm:grid-cols-4 gap-4">
                {[
                  { label: 'Practicality', value: '★★★★☆', sub: 'High — needs dedication', color: 'text-blue-600' },
                  { label: 'Prep time', value: '12–18 months', sub: 'From BCA/BTech 1st year', color: 'text-gray-700' },
                  { label: 'IQ / Aptitude', value: 'Above Average', sub: 'Sharp logical thinking', color: 'text-gray-700' },
                  { label: 'What they test', value: 'DSA (Easy–Medium)', sub: '50–100 LeetCode + 1–2 projects', color: 'text-gray-700' },
                ].map((m, i) => (
                  <div key={i}>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">{m.label}</p>
                    <p className={`font-black text-sm ${m.color}`}>{m.value}</p>
                    <p className="text-xs text-gray-400">{m.sub}</p>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 px-5 py-3 border-t border-blue-100">
                <p className="text-xs text-blue-800">
                  <strong>Reality check:</strong> About 25–35% of students who genuinely grind DSA for 12–18 months reach Tier 2.
                  You need 50–100 LeetCode easy/medium problems solved, at least one solid deployed project, and decent communication.
                  No degree filter — Swiggy and Razorpay hire on merit.
                </p>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="border border-green-200 rounded-2xl overflow-hidden">
              <div className="bg-green-50 px-5 py-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Tier 3 · With very strong DSA + system design</span>
                  <h3 className="font-black text-gray-800 mt-0.5">High-growth Unicorns & Global Tech MNCs</h3>
                </div>
                <span className="text-xl font-black text-green-700">₹30 – 50 LPA</span>
              </div>
              <div className="divide-y divide-gray-50 bg-white">
                {[
                  { company: 'Zepto', role: 'SDE-1', comp: '₹34 – 72 LPA', note: 'Levels.fyi · highest-paying startup in India right now' },
                  { company: 'Uber India', role: 'SDE-1', comp: '₹36 LPA (median)', note: 'Levels.fyi verified TC' },
                  { company: 'Atlassian India', role: 'P30 (entry)', comp: '₹40.6 LPA+', note: 'Levels.fyi · Jira/Confluence maker' },
                  { company: 'Microsoft India', role: 'L59 (entry)', comp: '₹27.6 – 48.8 LPA', note: 'Levels.fyi verified TC' },
                ].map((r, i) => (
                  <div key={i} className="px-5 py-3 flex items-center justify-between gap-4">
                    <div>
                      <span className="font-bold text-gray-800 text-sm">{r.company}</span>
                      <span className="text-gray-400 text-xs ml-2">{r.role}</span>
                      <p className="text-xs text-gray-400 mt-0.5">{r.note}</p>
                    </div>
                    <span className="text-sm font-bold text-green-600 flex-shrink-0">{r.comp}</span>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 px-5 py-4 border-t border-green-100 grid sm:grid-cols-4 gap-4">
                {[
                  { label: 'Practicality', value: '★★★☆☆', sub: 'Moderate — serious grind', color: 'text-green-600' },
                  { label: 'Prep time', value: '2–3 years', sub: 'Start in 1st year, grind daily', color: 'text-gray-700' },
                  { label: 'IQ / Aptitude', value: 'High', sub: 'Strong pattern recognition', color: 'text-gray-700' },
                  { label: 'What they test', value: 'DSA (Medium–Hard)', sub: '150–250 LeetCode + system design', color: 'text-gray-700' },
                ].map((m, i) => (
                  <div key={i}>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">{m.label}</p>
                    <p className={`font-black text-sm ${m.color}`}>{m.value}</p>
                    <p className="text-xs text-gray-400">{m.sub}</p>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 px-5 py-3 border-t border-green-100">
                <p className="text-xs text-green-800">
                  <strong>Reality check:</strong> Roughly 10–15% of serious students who start in 1st year and practice daily for 2–3 years reach Tier 3.
                  IQ helps here — but more than IQ, it is the ability to see patterns across problems that matters. That is a trainable skill.
                  You need 150–250 LeetCode problems (including mediums and some hards), system design basics, and 2–3 strong projects.
                </p>
              </div>
            </div>

            {/* Tier 4 — MAANG */}
            <div className="border-2 border-purple-300 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-purple-200 uppercase tracking-wide">Tier 4 · The ceiling — for the truly committed</span>
                  <h3 className="font-black text-white mt-0.5">MAANG — Meta · Amazon · Apple · Netflix · Google</h3>
                </div>
                <span className="text-xl font-black text-yellow-300">₹28 – 67 LPA+</span>
              </div>
              <div className="divide-y divide-gray-50 bg-white">
                {[
                  { company: 'Google', role: 'L3 (entry)', comp: '₹42.5 – 67 LPA', note: 'Levels.fyi · highest paying in India · LeetCode hard level DSA required' },
                  { company: 'Amazon', role: 'SDE-1 (L4)', comp: '₹28 – 37 LPA', note: 'Levels.fyi · most accessible MAANG · DSA + Leadership Principles rounds' },
                  { company: 'Microsoft', role: 'L59 (entry)', comp: '₹27.6 – 48.8 LPA', note: 'Levels.fyi · Azure, GitHub, and product teams' },
                  { company: 'Meta', role: 'E3 (entry)', comp: '₹40 – 60 LPA*', note: 'Estimated · limited India data · Hyderabad office' },
                  { company: 'Apple', role: 'ICT2 (entry)', comp: '₹30 – 50 LPA*', note: 'Estimated · Hyderabad & Bengaluru offices' },
                ].map((r, i) => (
                  <div key={i} className="px-5 py-3 flex items-center justify-between gap-4">
                    <div>
                      <span className="font-bold text-gray-800 text-sm">{r.company}</span>
                      <span className="text-gray-400 text-xs ml-2">{r.role}</span>
                      <p className="text-xs text-gray-400 mt-0.5">{r.note}</p>
                    </div>
                    <span className="text-sm font-black text-purple-600 flex-shrink-0">{r.comp}</span>
                  </div>
                ))}
              </div>
              <div className="bg-purple-50 px-5 py-4 border-t border-purple-100 grid sm:grid-cols-4 gap-4">
                {[
                  { label: 'Practicality', value: '★★☆☆☆', sub: 'Hard — but very real', color: 'text-purple-600' },
                  { label: 'Prep time', value: '3–5 years', sub: 'Start in BCA/BTech 1st year', color: 'text-gray-700' },
                  { label: 'IQ / Aptitude', value: 'High–Very High', sub: 'OR: average IQ + 1000 hrs practice', color: 'text-gray-700' },
                  { label: 'What they test', value: 'DSA (Hard) + Thinking', sub: '300–500 LeetCode + system design', color: 'text-gray-700' },
                ].map((m, i) => (
                  <div key={i}>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">{m.label}</p>
                    <p className={`font-black text-sm ${m.color}`}>{m.value}</p>
                    <p className="text-xs text-gray-400">{m.sub}</p>
                  </div>
                ))}
              </div>
              <div className="bg-purple-50 px-5 py-3 border-t border-purple-100">
                <p className="text-xs text-purple-800">
                  <strong>Reality check:</strong> MAANG hires from <strong>all colleges</strong> — BCA, MCA, BTech, IIT — it does not matter.
                  They only care about how you think and code in that interview room.
                  About 2–5% of students who start in 1st year and grind consistently for 3–5 years crack MAANG.
                  High IQ accelerates the journey — but average IQ + 1,000 hours of deliberate practice gets you there too.
                  <strong> Starting early is your biggest advantage.</strong>
                </p>
              </div>
            </div>

          </div>

          <div className="mt-5 bg-gray-50 border border-gray-200 rounded-2xl p-4">
            <p className="text-xs text-gray-500">
              <strong>* TC = Total Compensation</strong> (base salary + stocks/RSUs + joining bonus). All figures are annual.
              Service company salaries are base-only. Product/MAANG figures include stocks.
              Source:{' '}
              <a href="https://www.levels.fyi/t/software-engineer/levels/entry-level/locations/india" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">levels.fyi India entry-level</a>
              {' '}· May 2026.
            </p>
          </div>
        </section>

        {/* 5. Paid Internships */}
        <section id="paid-internships">
          <h2 className="text-2xl font-black text-gray-900 mb-2">How to Get a Paid Internship</h2>
          <p className="text-gray-500 mb-6 text-sm">Internships are the fastest way to build real experience before your first job.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Internshala', icon: '🌐', desc: 'India\'s #1 internship platform. 1000s of paid opportunities. Apply with a resume. Stipend: ₹5,000 – ₹25,000/month.' },
              { title: 'LinkedIn', icon: '💼', desc: 'Connect with recruiters, apply directly. Optimize your profile with skills and projects. Many companies post here.' },
              { title: 'GitHub Projects', icon: '💻', desc: 'Contribute to open source. Many companies hire contributors as interns. Shows real coding ability.' },
              { title: 'College Network', icon: '🎓', desc: 'Alumni, seniors, professors can refer you. Never underestimate the power of warm introductions.' },
              { title: 'Direct Company Applications', icon: '🏢', desc: 'Visit company career pages. Amazon, Flipkart, Swiggy all post intern openings on their sites.' },
              { title: 'Referrals', icon: '🤝', desc: 'Ask anyone you know working in tech. A referral increases chances by 5x over cold applications.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-4 bg-white border border-gray-100 rounded-2xl">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-blue-50 border border-blue-100 rounded-2xl p-4">
            <p className="text-sm text-blue-800 font-medium">Pro tip: Build a project → Put it on GitHub → Share the link on LinkedIn → Message recruiters directly. This simple flow gets more internship offers than blindly applying.</p>
          </div>
        </section>

        {/* 6. Top Companies */}
        <section id="top-companies">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Top Companies Hiring Software Engineers in India</h2>
          <p className="text-gray-500 mb-6 text-sm">India is one of the world&apos;s largest tech talent markets with 5+ lakh software job openings annually.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-2xl overflow-hidden">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Company</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Openings/year</th>
                  <th className="px-4 py-3 text-left">Min. Salary</th>
                  <th className="px-4 py-3 text-left">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {companies.map((c, i) => (
                  <tr key={i} className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-3 font-bold text-gray-800">{c.name}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        c.type === 'Product' ? 'bg-blue-100 text-blue-700' :
                        c.type === 'Startup' ? 'bg-purple-100 text-purple-700' :
                        c.type === 'Consulting' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>{c.type}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{c.openings}</td>
                    <td className="px-4 py-3 font-semibold text-green-600">{c.minSalary}</td>
                    <td className="px-4 py-3 text-gray-500">{c.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 7. How Hard is Java */}
        <section id="how-hard-is-java">
          <h2 className="text-2xl font-black text-gray-900 mb-2">How Hard is Java?</h2>
          <p className="text-gray-500 mb-6 text-sm">One of the most common questions from beginners.</p>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-4">
            <p className="text-gray-700">Java is a <strong>medium-difficulty language</strong> — harder than Python, but not as complex as C++. Here&apos;s the honest breakdown:</p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Syntax', level: 'Medium', color: 'bg-yellow-100 text-yellow-700', desc: 'Verbose but very readable. Takes 2–4 weeks to get comfortable.' },
                { label: 'OOP Concepts', level: 'Easy–Medium', color: 'bg-green-100 text-green-700', desc: 'Java is built for OOP. Classes, objects, inheritance are intuitive here.' },
                { label: 'Job Market', level: 'Excellent', color: 'bg-blue-100 text-blue-700', desc: 'Java is used in banking, enterprise software, Android apps, and Spring Boot backends.' },
              ].map((item, i) => (
                <div key={i} className="p-4 border border-gray-100 rounded-xl">
                  <p className="text-xs text-gray-500 font-medium">{item.label}</p>
                  <span className={`inline-block mt-1 text-xs font-bold px-2 py-0.5 rounded-full ${item.color}`}>{item.level}</span>
                  <p className="text-xs text-gray-600 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-blue-800 font-medium">Verdict: If you&apos;re choosing between Java, Python, and C++ as your first language — start with Python. It&apos;s simpler. Then learn Java for backend/Android work. Both are highly employable.</p>
            </div>
          </div>
        </section>

        {/* 8. How Much to Study */}
        <section id="how-much-to-study">
          <h2 className="text-2xl font-black text-gray-900 mb-2">How Much Should You Study?</h2>
          <p className="text-gray-500 mb-6 text-sm">Consistency beats intensity. Here&apos;s a realistic daily plan.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { type: 'Student (School/College)', hours: '2–3 hrs/day', schedule: 'Morning 1 hr theory + Evening 1–2 hrs coding practice', timeline: 'Job-ready in 12 months' },
              { type: 'Dedicated Learner (No Job)', hours: '5–6 hrs/day', schedule: '3 hrs coding + 2 hrs theory + 1 hr revision/projects', timeline: 'Job-ready in 5–6 months' },
              { type: 'Working Professional', hours: '1–2 hrs/day', schedule: 'Early morning or night sessions. Weekend deep dives (4–5 hrs)', timeline: 'Job-ready in 15–18 months' },
            ].map((p, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 text-sm mb-2">{p.type}</h3>
                <p className="text-2xl font-black text-blue-600">{p.hours}</p>
                <p className="text-xs text-gray-500 mt-2">{p.schedule}</p>
                <p className="text-xs font-semibold text-green-600 mt-2">{p.timeline}</p>
              </div>
            ))}
          </div>
          <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5">
            <h3 className="font-bold text-yellow-800 mb-2">The Golden Rule</h3>
            <p className="text-sm text-yellow-700">
              <strong>1 hour of coding every day beats 7 hours on Sunday.</strong> Learning to code is like going to the gym — daily consistency builds the muscle. The biggest mistake is studying in bursts and taking 3-day breaks.
            </p>
          </div>
        </section>

        {/* 9. IQ Test */}
        <section id="iq-test">
          <h2 className="text-2xl font-black text-gray-900 mb-2">How Much IQ is Required for a Software Job?</h2>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6">
            <p className="text-gray-700 mb-4">
              The honest answer: <strong>no specific IQ number is required</strong>. Software engineering is about <em>learned skills</em>, not raw intelligence.
              Studies show that consistent practice, not IQ, predicts programming success.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: 'What actually matters', items: ['Consistency of practice', 'Logical thinking (trainable)', 'Ability to break problems down', 'Patience and perseverance'] },
                { title: 'What IQ helps with', items: ['Learning faster initially', 'Abstract problem solving', 'Pattern recognition in DSA', 'Algorithm optimization'] },
                { title: 'What IQ can\'t replace', items: ['Daily practice hours', 'Project experience', 'Communication skills', 'Interview preparation'] },
              ].map((col, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="text-xs font-bold text-gray-600 uppercase mb-3">{col.title}</h3>
                  <ul className="space-y-1.5">
                    {col.items.map((item, j) => (
                      <li key={j} className="text-xs text-gray-600 flex items-start gap-1.5">
                        <span className="text-blue-500 mt-0.5">•</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-gray-600 mb-6">Take this quick test to check your logical thinking ability:</p>
          <IQTest />
        </section>

      </div>

      {/* CTA */}
      <section className="bg-blue-600 text-white px-4 sm:px-6 py-14 text-center mt-12">
        <h2 className="text-3xl font-black">Ready to Start Your Journey?</h2>
        <p className="mt-2 text-blue-100 text-lg">Join CodeLab Hisar and get personalized guidance to land your first software job.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
            Enroll Now
          </Link>
          <Link href="/courses" className="px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            View Courses
          </Link>
        </div>
      </section>
    </>
  );
}
