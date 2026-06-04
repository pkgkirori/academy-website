import Link from 'next/link';

const courses = [
  {
    icon: '🌐',
    title: 'Full-Stack Web Development',
    duration: '6 Months',
    fee: '₹18,000',
    tag: 'Most Popular',
    tagColor: 'bg-blue-100 text-blue-700',
    desc: 'Learn everything you need to build complete web applications — from UI design to server logic and database management.',
    syllabus: [
      { week: 'Month 1', topic: 'HTML & CSS', details: 'Tags, forms, flexbox, grid, responsive design, Bootstrap basics' },
      { week: 'Month 2', topic: 'JavaScript', details: 'Variables, loops, functions, DOM, events, ES6+, async/await' },
      { week: 'Month 3', topic: 'React.js', details: 'Components, props, state, hooks, routing, API calls' },
      { week: 'Month 4', topic: 'Node.js & Express', details: 'REST APIs, middleware, authentication, JWT tokens' },
      { week: 'Month 5', topic: 'MongoDB & Databases', details: 'CRUD, Mongoose, schema design, indexing' },
      { week: 'Month 6', topic: 'Projects & Deployment', details: 'Build 2 full-stack projects, deploy on Vercel & Render, GitHub portfolio' },
    ],
    jobs: ['Frontend Developer', 'Backend Developer', 'Full-Stack Developer', 'React Developer'],
  },
  {
    icon: '🧮',
    title: 'DSA & Competitive Coding',
    duration: '4 Months',
    fee: '₹12,000',
    tag: 'Interview Ready',
    tagColor: 'bg-green-100 text-green-700',
    desc: 'Master Data Structures and Algorithms — the core skill tested in every software engineering interview at any company.',
    syllabus: [
      { week: 'Month 1', topic: 'Programming Basics & Arrays', details: 'Loops, recursion, sorting, searching, two-pointer technique' },
      { week: 'Month 2', topic: 'Linked Lists, Stacks & Queues', details: 'Singly/doubly linked lists, stack applications, queue problems' },
      { week: 'Month 3', topic: 'Trees & Graphs', details: 'BST, BFS, DFS, shortest path, cycle detection' },
      { week: 'Month 4', topic: 'DP & Advanced Topics', details: 'Dynamic programming patterns, greedy, backtracking, mock interviews' },
    ],
    jobs: ['Software Engineer', 'SDE-1', 'Backend Engineer', 'Competitive Programmer'],
  },
  {
    icon: '🤖',
    title: 'Python / AI / ML',
    duration: '5 Months',
    fee: '₹15,000',
    tag: 'Future Tech',
    tagColor: 'bg-purple-100 text-purple-700',
    desc: 'Start from Python basics and advance to building real AI/ML models. The most in-demand skill of the decade.',
    syllabus: [
      { week: 'Month 1', topic: 'Python Basics', details: 'Variables, loops, functions, OOP, file handling, libraries' },
      { week: 'Month 2', topic: 'Data Analysis', details: 'NumPy, Pandas, Matplotlib, Seaborn — data cleaning and visualization' },
      { week: 'Month 3', topic: 'Machine Learning', details: 'Linear/logistic regression, decision trees, SVM, KNN with Scikit-learn' },
      { week: 'Month 4', topic: 'Deep Learning Intro', details: 'Neural networks, TensorFlow/Keras basics, CNNs for image tasks' },
      { week: 'Month 5', topic: 'Projects & Deployment', details: 'Build 2 ML projects, deploy with Flask/Streamlit, GitHub portfolio' },
    ],
    jobs: ['Python Developer', 'Data Analyst', 'ML Engineer', 'AI Developer'],
  },
  {
    icon: '⚙️',
    title: 'C / C++ Programming',
    duration: '3 Months',
    fee: '₹8,000',
    tag: 'Strong Foundation',
    tagColor: 'bg-orange-100 text-orange-700',
    desc: 'Build a rock-solid programming foundation. C/C++ sharpens your logic and opens doors to competitive programming and embedded systems.',
    syllabus: [
      { week: 'Month 1', topic: 'C Language Basics', details: 'Variables, data types, operators, loops, functions, arrays, pointers' },
      { week: 'Month 2', topic: 'C++ & OOP', details: 'Classes, objects, inheritance, polymorphism, encapsulation, templates' },
      { week: 'Month 3', topic: 'STL & Competitive Coding', details: 'Vectors, maps, sets, iterators, Codeforces/LeetCode problem solving' },
    ],
    jobs: ['C++ Developer', 'Game Developer', 'Embedded Engineer', 'Competitive Coder'],
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 py-14 text-center">
        <h1 className="text-4xl font-black text-gray-900">Our <span className="text-blue-600">Courses</span></h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Offline, classroom-based courses designed by industry experts. Every course includes
          projects, interview prep, and career support.
        </p>
      </section>

      {/* Course Cards */}
      <section className="px-4 sm:px-6 py-12 max-w-5xl mx-auto space-y-16">
        {courses.map((course, i) => (
          <div key={i} className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Course Header */}
            <div className="bg-white px-6 sm:px-8 pt-8 pb-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{course.icon}</span>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">{course.title}</h2>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${course.tagColor}`}>{course.tag}</span>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{course.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-blue-600">{course.fee}</p>
                  <p className="text-xs text-gray-400">One-time fee</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{course.desc}</p>

              {/* Job roles */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-gray-500 font-medium">Career paths:</span>
                {course.jobs.map((j, ji) => (
                  <span key={ji} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">{j}</span>
                ))}
              </div>
            </div>

            {/* Syllabus */}
            <div className="bg-gray-50 px-6 sm:px-8 py-6">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">Syllabus Breakdown</h3>
              <div className="space-y-3">
                {course.syllabus.map((s, si) => (
                  <div key={si} className="flex gap-4">
                    <div className="flex-shrink-0 w-24">
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">{s.week}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{s.topic}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{s.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white px-6 sm:px-8 py-5 border-t border-gray-100 flex flex-wrap gap-3">
              <Link href="/contact" className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
                Enroll in This Course
              </Link>
              <a href="https://wa.me/919992233434" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-green-600 text-white rounded-xl text-sm font-semibold hover:bg-green-700 transition-colors">
                Ask on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Bundle Note */}
      <section className="bg-blue-600 text-white px-4 sm:px-6 py-12 text-center">
        <h2 className="text-2xl font-black">Not sure which course to pick?</h2>
        <p className="mt-2 text-blue-100">Call us or WhatsApp — we&apos;ll help you choose the right path based on your goal.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-4">
          <a href="tel:9992233434" className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
            Call Now: 9992233434
          </a>
          <a href="https://wa.me/919992233434" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
