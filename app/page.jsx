'use client';
import '../styles/globals.css';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center py-20 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Jorniqo: Journey &amp; Innovation Combined</h1>
        <p className="text-xl max-w-2xl">Empowering your journey with AI-driven marketing and custom software solutions.</p>
      </section>
      {/* Services */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl shadow-xl bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-semibold mb-2">Marketing Consulting</h3>
            <p className="mb-4">Develop data-driven strategies, content plans, and digital campaigns that increase your visibility and engagement.</p>
            <p className="text-sm text-gray-500">NAICS 541613</p>
          </div>
          <div className="p-6 rounded-xl shadow-xl bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-semibold mb-2">Custom Software &amp; AI Solutions</h3>
            <p className="mb-4">Build tailored applications, chatbots and AI experiences that streamline operations and delight customers.</p>
            <p className="text-sm text-gray-500">NAICS 541511</p>
          </div>
        </div>
      </section>
      {/* AI Content Studio */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">AI Content Studio</h2>
        <p className="max-w-3xl mx-auto text-center mb-4">We create emotionally compelling short stories featuring AI-generated characters. These stories inspire and connect with your audience across TikTok, Instagram, and YouTube.</p>
      </section>
      {/* Learning &amp; Resources */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-8">Learning &amp; Resources</h2>
        <p className="max-w-3xl mx-auto text-center mb-4">Explore our courses, guides and blog posts on marketing, AI, entrepreneurship and digital nomadism.</p>
      </section>
      {/* Affiliate Marketplace */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Affiliate Marketplace</h2>
        <p className="max-w-3xl mx-auto text-center mb-4">Discover our curated recommendations for books, travel gear, tech tools and health products to enhance your journey.</p>
      </section>
      {/* About &amp; Mission */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-8">About Jorniqo</h2>
        <p className="max-w-3xl mx-auto text-center mb-4">Founded by a passionate entrepreneur from Texas with a mission to empower others through innovative technology and storytelling, Jorniqo believes that everyone’s journey can lead to meaningful change.</p>
      </section>
      {/* Contact */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <p className="max-w-3xl mx-auto text-center mb-6">Interested in working with us or learning more? Reach out today.</p>
        <div className="flex justify-center">
          <a href="mailto:info@jorniqo.com" className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">Contact Us</a>
        </div>
      </section>
    </main>
  );
}
