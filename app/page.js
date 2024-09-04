import Head from 'next/head';
import WaitlistForm from '../components/WaitlistForm';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Head>
        <title>Join Our Waitlist</title>
      </Head>

      <header className="flex items-center justify-between p-4 lg:p-6">
        <div className="flex items-center">
          <img src="/leaf-icon.svg" alt="Logo" className="w-6 h-6 mr-2" />
          <span className="text-2xl font-bold text-white">Meal Planner</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white hover:underline">Meal Plans</a></li>
            <li><a href="#" className="text-white hover:underline">Pricing</a></li>
            <li><a href="#" className="text-white hover:underline">About</a></li>
            <li><a href="#" className="text-white hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <div className="waitlist-container">
        <main className="waitlist-form">
          <WaitlistForm />
        </main>
      </div>
    </div>
  );
}