import Link from 'next/link';

const globalInspiration = [
  {
    name: 'Vijay Shekhar Sharma',
    title: 'Founder, Paytm',
    origin: 'Aligarh, UP · Delhi College of Engineering (not IIT)',
    worth: '₹7,000+ Crore',
    initials: 'VS',
    color: 'bg-blue-600',
    lesson: 'Studied at Delhi College of Engineering — a solid college, but not IIT. Grew up in a Hindi-medium school in Aligarh. Struggled badly with English. Was looked down upon by peers at top colleges. Built Paytm from a small Delhi apartment and made it India\'s largest fintech platform. He still says he thinks in Hindi.',
    keyTakeaway: 'Hindi-medium, non-IIT, small town. Still built a billion-dollar company.',
  },
  {
    name: 'Ritesh Agarwal',
    title: 'Founder, OYO Rooms',
    origin: 'Bissam Cuttack, Odisha (small town)',
    worth: '$500 million+',
    initials: 'RA',
    color: 'bg-orange-500',
    lesson: 'Dropped out of college at 19. Came from a small town nobody had heard of. Taught himself to code and build products. OYO became a global hospitality company in 80+ countries. He didn\'t wait for a degree — he built things and learned on the way.',
    keyTakeaway: 'A college degree is optional. Execution is not.',
  },
  {
    name: 'Jan Koum',
    title: 'Co-founder, WhatsApp',
    origin: 'Ukraine → USA (lived on food stamps)',
    worth: '$9 Billion',
    initials: 'JK',
    color: 'bg-green-600',
    lesson: 'Immigrated to the US at 16 with nothing. His family used food stamps. He taught himself programming by reading discarded computer manuals. Got rejected by Facebook. Then built WhatsApp in a garage and sold it to Facebook for $19 billion. Every programming manual he read at that age made him a billionaire.',
    keyTakeaway: 'Self-teaching works. Jan Koum is proof.',
  },
  {
    name: 'Byju Raveendran',
    title: 'Founder, BYJU\'S',
    origin: 'Azhikode, Kerala · Government Engineering College Kannur',
    worth: '$2 Billion+',
    initials: 'BR',
    color: 'bg-red-500',
    lesson: 'Son of two school teachers from a small Kerala village. Studied at a state government engineering college — not IIT, not NIT. Started teaching friends as a side gig, realised he had a gift for explaining concepts. Built BYJU\'S into the world\'s most valued edtech company at its peak. His entire story runs on teaching ability, not brand name.',
    keyTakeaway: 'Government college. Small village. World\'s biggest edtech.',
  },
  {
    name: 'Larry Ellison',
    title: 'Founder, Oracle',
    origin: 'South Side Chicago (poor family)',
    worth: '$150 Billion',
    initials: 'LE',
    color: 'bg-red-700',
    lesson: 'Dropped out of college twice. Grew up poor in Chicago. Taught himself programming by reading IBM manuals. Founded Oracle, which powers databases for most of the world\'s banks and governments. When people say you need a degree — remember Larry Ellison.',
    keyTakeaway: 'Dropped out twice. Still became one of the richest people alive.',
  },
  {
    name: 'Nithin Kamath',
    title: 'Founder, Zerodha',
    origin: 'Bengaluru · Bangalore University (regular college)',
    worth: '$3 Billion+',
    initials: 'NK',
    color: 'bg-yellow-600',
    lesson: 'Studied at Bangalore University — a regular state university, not IIT. Started trading at 17, failed multiple times, taught himself finance and tech by doing. Built Zerodha from scratch with his brother in a small office. Today it is India\'s largest stockbroker with 1.5 crore+ customers. He never took a rupee of venture capital.',
    keyTakeaway: 'Regular university. Zero VC funding. India\'s largest stockbroker.',
  },
];

const studentStories = [
  {
    name: 'Priya Yadav',
    from: 'B.Tech CSE (2023 passout), Hisar',
    role: 'System Engineer',
    company: 'TCS, Gurugram',
    salary: '₹3.8 LPA',
    course: 'DSA & Competitive Coding',
    duration: '4 months prep',
    initials: 'PY',
    color: 'bg-pink-500',
    story: 'I had a B.Tech in CSE but kept failing TCS NQT — twice. My college taught C++ theory but never how to actually solve problems under time pressure. The DSA course at CodeLab was different. We solved problems live, with the instructor explaining each step. By month 3 I was solving medium LeetCode questions. Cleared TCS NQT in my third attempt. First salary credited on October 1st.',
    honest: 'It took 3 attempts to crack NQT. Month 2 was extremely frustrating.',
  },
  {
    name: 'Rahul Sharma',
    from: 'B.A. (Political Science), Hisar',
    role: 'Junior Frontend Developer',
    company: 'IT startup, Delhi (remote)',
    salary: '₹2.8 LPA',
    course: 'Full-Stack Web Dev',
    duration: '7 months',
    initials: 'RS',
    color: 'bg-blue-500',
    story: 'Everyone — my parents, relatives, even some instructors — told me that a B.A. student can\'t get into software. I joined CodeLab to prove them wrong. It wasn\'t easy. The first two months I barely understood JavaScript. But by month 5 I had built my first React project. I applied to 40+ companies before getting an offer from a Delhi startup. The salary isn\'t huge yet, but I\'m in the industry now.',
    honest: 'Applied to 40+ companies. Took 7 months. First job salary is modest — but growth is fast in startups.',
  },
  {
    name: 'Deepak Bansal',
    from: '12th Pass (Science), Hisar',
    role: 'Frontend Intern',
    company: 'EdTech company, Chandigarh',
    salary: '₹8,000/month stipend',
    course: 'Full-Stack Web Dev',
    duration: '6 months',
    initials: 'DB',
    color: 'bg-green-600',
    story: 'I joined right after 12th boards while waiting for college admissions. My parents thought I was wasting time. But in 6 months I built a portfolio with 3 projects and landed a paid internship. ₹8,000/month isn\'t a big salary, but I\'m 18 years old, learning real skills, and earning while most of my friends are just studying theory in college. The internship may convert to full-time by next year.',
    honest: 'Stipend is small. But at 18, with real work experience, the future outlook is strong.',
  },
  {
    name: 'Kavita Bishnoi',
    from: 'Diploma (Mechanical Engg.), Hisar',
    role: 'Junior Developer (QA + Frontend)',
    company: 'IT services firm, Chandigarh',
    salary: '₹3.2 LPA',
    course: 'C/C++ → Full-Stack Web Dev',
    duration: '9 months',
    initials: 'KB',
    color: 'bg-purple-500',
    story: 'Switching from mechanical to software felt impossible. I had never used a computer for anything serious. I started with C/C++ to build logic, then moved to web development. Nine months is a long time — I won\'t lie, there were moments I wanted to quit. But each week I could see myself improving. My first project was a mess. My last one is deployed live. That difference is real.',
    honest: 'Took 9 months of consistent studying. There were multiple low points.',
  },
];

const motivations = [
  {
    title: 'You don\'t need a CS degree',
    icon: '🎓',
    desc: 'Jan Koum never graduated. Larry Ellison dropped out twice. Over 35% of Indian software engineers don\'t have a CS degree. Companies hire based on what you can build.',
  },
  {
    title: 'Age is not a barrier',
    icon: '⏰',
    desc: 'Ritesh Agarwal started at 19. Many career-switchers enter tech at 28–32. The industry judges your code, not your age.',
  },
  {
    title: 'Month 2 and 3 are the hardest',
    icon: '💪',
    desc: 'Every programmer hits a wall where nothing makes sense. This is not a sign you can\'t do it — it\'s the exact point where people who succeed push through.',
  },
  {
    title: 'Your background is context, not a limitation',
    icon: '✨',
    desc: 'Vijay Shekhar Sharma\'s Hindi-medium background didn\'t stop him. Your B.A., B.Com, or diploma gives you a unique perspective that pure CS graduates don\'t have.',
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 py-14 text-center">
        <h1 className="text-4xl font-black text-gray-900">Success <span className="text-blue-600">Stories</span></h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          From world-class founders who started with nothing, to CodeLab students taking their first steps.
          Proof that background doesn&apos;t decide your future — effort does.
        </p>
      </section>

      {/* Global Inspiration */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-black text-gray-900">People Who Proved Everyone Wrong</h2>
          <p className="text-gray-500 mt-1 text-sm">Real people. Real backgrounds. Real results. If they could do it, so can you.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {globalInspiration.map((p, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className={`${p.color} text-white w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0`}>
                  {p.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-gray-900">{p.name}</h3>
                  <p className="text-xs text-blue-600 font-semibold">{p.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{p.origin}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs font-bold text-green-600">{p.worth}</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">{p.lesson}</p>

              <div className="mt-3 bg-blue-50 rounded-xl px-3 py-2">
                <p className="text-xs font-bold text-blue-700">{p.keyTakeaway}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="border-t border-gray-100 py-2" />
      </div>

      {/* CodeLab Student Stories */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-black text-gray-900">From CodeLab Hisar Students</h2>
          <p className="text-gray-500 mt-1 text-sm">
            These are honest accounts — including the hard parts. No exaggeration.
          </p>
        </div>

        <div className="space-y-6">
          {studentStories.map((s, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${s.color} text-white w-12 h-12 rounded-xl flex items-center justify-center font-black flex-shrink-0`}>
                    {s.initials}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-gray-900">{s.name}</h3>
                    <p className="text-xs text-gray-400">{s.from}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="text-xs bg-blue-50 text-blue-700 font-medium px-2 py-0.5 rounded-full">{s.role} · {s.company}</span>
                      <span className="text-xs bg-green-50 text-green-700 font-bold px-2 py-0.5 rounded-full">{s.salary}</span>
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{s.course} · {s.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed border-l-4 border-gray-200 pl-4 italic">
                  &ldquo;{s.story}&rdquo;
                </p>

                <div className="mt-3 flex items-start gap-2 bg-yellow-50 border border-yellow-100 rounded-xl px-4 py-3">
                  <span className="text-yellow-500 font-bold text-xs flex-shrink-0 mt-0.5">Honest note:</span>
                  <p className="text-xs text-yellow-700">{s.honest}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-center text-gray-400">
          * Stories shared with student consent. Salaries and timelines reflect individual circumstances — results will vary.
        </p>
      </section>

      {/* Motivational Section */}
      <section className="bg-gray-50 px-4 sm:px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900">Things Worth <span className="text-blue-600">Remembering</span></h2>
            <p className="text-gray-500 mt-2 text-sm">For when you feel like giving up.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {motivations.map((m, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <span className="text-3xl mb-3 block">{m.icon}</span>
                <h3 className="font-bold text-gray-800 mb-2">{m.title}</h3>
                <p className="text-sm text-gray-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-blue-600 text-white px-4 sm:px-6 py-14 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl font-black leading-relaxed">
            &ldquo;The people you look up to were once exactly where you are — confused, doubting themselves, wondering if it&apos;s worth it. The only difference is they kept going.&rdquo;
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Start Your Story
            </Link>
            <Link href="/courses" className="px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              View Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
