import Link from 'next/link';

const posts = [
  {
    title: 'How to Start Learning Programming from Scratch — A Complete Guide',
    excerpt: 'Never coded before? No problem. Here\'s exactly how to start: which language to pick, what to study first, and how to avoid the most common beginner mistakes.',
    tag: 'Beginners',
    date: 'May 18, 2026',
    mins: '5 min',
    emoji: '🚀',
  },
  {
    title: 'Top 10 DSA Questions Every Fresher Must Know Before Interviews',
    excerpt: 'These 10 problem patterns cover 80% of what companies ask in online assessments. Solve these and you\'re interview-ready.',
    tag: 'DSA',
    date: 'May 15, 2026',
    mins: '8 min',
    emoji: '🧮',
  },
  {
    title: 'How to Land a Paid Internship in 90 Days (Step-by-Step)',
    excerpt: 'A practical 90-day plan to get your first paid software internship — with daily tasks, resume tips, and the exact message template that gets replies.',
    tag: 'Career',
    date: 'May 12, 2026',
    mins: '6 min',
    emoji: '💼',
  },
  {
    title: 'React vs Angular vs Vue — Which Should You Learn in 2026?',
    excerpt: 'For freshers, this question creates unnecessary confusion. Here\'s the simple answer based on job market demand and learning curve.',
    tag: 'Web Dev',
    date: 'May 10, 2026',
    mins: '4 min',
    emoji: '⚛️',
  },
  {
    title: 'How to Crack TCS NQT 2026 — Pattern, Syllabus, and Tips',
    excerpt: 'TCS hires 40,000+ freshers every year. Here\'s everything you need to know about their National Qualifier Test — sections, difficulty, and preparation strategy.',
    tag: 'Placement',
    date: 'May 8, 2026',
    mins: '7 min',
    emoji: '🏆',
  },
  {
    title: 'Python vs Java vs C++ — Which is the Best First Language?',
    excerpt: 'Stop overthinking this. We break down each language by difficulty, job market, and use cases so you can decide in 5 minutes.',
    tag: 'Beginners',
    date: 'May 5, 2026',
    mins: '5 min',
    emoji: '🐍',
  },
  {
    title: 'LeetCode vs Codeforces vs HackerRank — Where Should You Practice DSA?',
    excerpt: 'Different platforms serve different goals. Here\'s which one to use based on whether you\'re preparing for interviews, competitive programming, or job tests.',
    tag: 'DSA',
    date: 'May 2, 2026',
    mins: '4 min',
    emoji: '💻',
  },
  {
    title: 'How Much Does a Software Engineer Actually Earn in India? (2026 Data)',
    excerpt: 'Exact salary data across company types — from TCS to Google. Including fresher, 2-year, and 5-year salary progression.',
    tag: 'Career',
    date: 'Apr 28, 2026',
    mins: '6 min',
    emoji: '💰',
  },
  {
    title: '5 GitHub Projects That Will Impress Any Interviewer',
    excerpt: 'Not all projects are equal. These 5 types of projects stand out on resumes because they show initiative, problem-solving, and real-world thinking.',
    tag: 'Projects',
    date: 'Apr 25, 2026',
    mins: '5 min',
    emoji: '⭐',
  },
  {
    title: 'What Happens if You Study Code for Just 1 Hour Daily for 6 Months?',
    excerpt: 'We tracked the progress of students who committed to just 1 focused hour per day. The results were surprising. Here\'s what happened.',
    tag: 'Motivation',
    date: 'Apr 20, 2026',
    mins: '3 min',
    emoji: '📈',
  },
  {
    title: 'The Truth About AI Replacing Software Engineers (Honest Take)',
    excerpt: 'Everyone is worried. Here\'s the realistic assessment of which coding jobs AI will affect, which it won\'t, and what skills make you future-proof.',
    tag: 'AI',
    date: 'Apr 15, 2026',
    mins: '7 min',
    emoji: '🤖',
  },
  {
    title: 'How to Write a Resume That Gets Shortlisted — For Freshers',
    excerpt: 'Your resume gets 6 seconds of attention. Here\'s exactly what to include (and what to cut) to pass the recruiter\'s first scan.',
    tag: 'Career',
    date: 'Apr 10, 2026',
    mins: '5 min',
    emoji: '📄',
  },
];

const tagColors: Record<string, string> = {
  Beginners: 'bg-green-100 text-green-700',
  DSA: 'bg-blue-100 text-blue-700',
  Career: 'bg-purple-100 text-purple-700',
  'Web Dev': 'bg-cyan-100 text-cyan-700',
  Placement: 'bg-yellow-100 text-yellow-700',
  Projects: 'bg-orange-100 text-orange-700',
  Motivation: 'bg-pink-100 text-pink-700',
  AI: 'bg-indigo-100 text-indigo-700',
};

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 py-14 text-center">
        <h1 className="text-4xl font-black text-gray-900">CodeLab <span className="text-blue-600">Blog</span></h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Tips, tutorials, career advice, and real stories to help you succeed in tech.
          Updated regularly by our instructors and students.
        </p>
      </section>

      {/* Featured Post */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
          <span className="inline-block text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full mb-3">Featured Post</span>
          <h2 className="text-2xl font-black leading-tight mb-2">{posts[0].title}</h2>
          <p className="text-blue-100 text-sm mb-4">{posts[0].excerpt}</p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-blue-200">{posts[0].date}</span>
            <span className="text-xs text-blue-200">·</span>
            <span className="text-xs text-blue-200">{posts[0].mins} read</span>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-xl font-black text-gray-800 mb-6">All Articles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post, i) => (
            <article key={i} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col">
              <div className="text-3xl mb-3">{post.emoji}</div>
              <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 w-fit ${tagColors[post.tag] || 'bg-gray-100 text-gray-700'}`}>
                {post.tag}
              </span>
              <h3 className="font-bold text-gray-800 text-sm leading-snug flex-1">{post.title}</h3>
              <p className="text-xs text-gray-500 mt-2 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-50">
                <span className="text-xs text-gray-400">{post.date}</span>
                <span className="text-xs text-gray-300">·</span>
                <span className="text-xs text-gray-400">{post.mins} read</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gray-50 px-4 sm:px-6 py-14 text-center">
        <h2 className="text-2xl font-black text-gray-900">Get New Posts Delivered</h2>
        <p className="mt-2 text-gray-600">Join 500+ students getting weekly coding and career tips.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a href="https://wa.me/919992233434" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors">
            Follow on WhatsApp
          </a>
          <a href="https://instagram.com/codelabhisar" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
            Follow on Instagram
          </a>
        </div>
      </section>
    </>
  );
}
