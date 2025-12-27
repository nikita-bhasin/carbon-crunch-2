import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Carbon2
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the transformation towards sustainable technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                At Carbon2, we believe that technology and sustainability go hand in hand.
                Our mission is to create innovative solutions that not only meet today's
                needs but also protect tomorrow's world.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We're committed to reducing carbon footprints while delivering exceptional
                performance and value to our customers. Every product we develop, every
                service we offer, is designed with environmental responsibility at its core.
              </p>
              <p className="text-lg text-gray-600">
                Join us in building a sustainable future, one innovation at a time.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the global leader in sustainable technology, inspiring change
                    and creating a positive impact on the planet.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>Sustainability First</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>Innovation Driven</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>Customer Focused</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>Transparent & Honest</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'CEO & Founder', desc: '20+ years in sustainable tech' },
              { name: 'Michael Chen', role: 'CTO', desc: 'Innovation and product development expert' },
              { name: 'Emily Rodriguez', role: 'Head of Sustainability', desc: 'Environmental science leader' },
              { name: 'David Thompson', role: 'VP of Engineering', desc: 'Building scalable solutions' },
              { name: 'Lisa Park', role: 'Head of Marketing', desc: 'Spreading the sustainable message' },
              { name: 'James Wilson', role: 'VP of Operations', desc: 'Ensuring excellence in delivery' },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From startup to industry leader
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { year: '2018', title: 'Founded', desc: 'Carbon2 was founded with a vision to revolutionize sustainable technology' },
                { year: '2019', title: 'First Product Launch', desc: 'Launched our first sustainable solution, serving 100+ customers' },
                { year: '2021', title: 'Global Expansion', desc: 'Expanded operations to 25 countries across 5 continents' },
                { year: '2023', title: 'Industry Recognition', desc: 'Received multiple awards for innovation and sustainability' },
                { year: '2024', title: 'Today', desc: 'Serving 10,000+ customers worldwide with cutting-edge solutions' },
              ].map((milestone, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0 w-24 text-primary-600 font-bold text-lg">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

