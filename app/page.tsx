export const metadata = {
  title: "code4career | Offline Coding Academy by Industry Experts",
  description:
    "code4career is an offline coding academy founded by industry experts. Opening soon in Hisar. Learn practical tech skills and build your career.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">code4career</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#courses" className="hover:text-blue-600">Courses</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-8 py-20 text-center bg-gray-50">
        <h2 className="text-4xl font-bold leading-tight">
          We are <span className="text-blue-600">code4career</span>
        </h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
          An <strong>offline coding academy</strong> founded by <strong>industry experts</strong>.
          We are opening our branch in <strong>Hisar</strong> soon.  
          Learn practical tech skills and launch your career with us.
        </p>

        <div className="mt-8">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700">
            Launching Soon 🚀
          </button>
        </div>
      </section>

      {/* Why code4career */}
      <section id="about" className="px-8 py-16 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center">
          Why choose code4career?
        </h3>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 border rounded-lg">
            <h4 className="font-semibold text-lg">Offline Learning</h4>
            <p className="mt-3 text-gray-600">
              Hands-on classes with real-time guidance from industry experts.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h4 className="font-semibold text-lg">Industry Expertise</h4>
            <p className="mt-3 text-gray-600">
              Learn from professionals with real work experience in tech.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h4 className="font-semibold text-lg">Career-Focused</h4>
            <p className="mt-3 text-gray-600">
              Our goal is simple — equip you with skills to land your first tech job.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section id="courses" className="px-8 py-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-center">Upcoming Courses</h3>

        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white border rounded-lg">
            <h4 className="font-semibold text-lg">Full-Stack Web Development</h4>
            <p className="mt-2 text-gray-600">
              Learn HTML, CSS, JavaScript, React, and backend basics in classroom sessions.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-lg">
            <h4 className="font-semibold text-lg">Data Structures & Algorithms</h4>
            <p className="mt-2 text-gray-600">
              Strengthen problem-solving skills for interviews.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-16 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold">Contact Us</h3>
        <p className="mt-4 text-gray-600">
          Mobile: <strong>9992233434</strong> <br />
          Email: <strong>helpdesk@code4career.com</strong>
        </p>
        <p className="mt-4 text-gray-600">
          We’ll be happy to answer your questions about courses and enrollment.
        </p>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 text-center">
        <h3 className="text-3xl font-bold">We are opening our branch in Hisar soon!</h3>
        <p className="mt-4 text-gray-600">
          Stay tuned for updates and course announcements.
        </p>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 text-center text-sm text-gray-500 border-t">
        Mobile: 9992233434 | Email: helpdesk@code4career.com <br />
        © {new Date().getFullYear()} code4career. All rights reserved.
      </footer>
    </main>
  );
}
