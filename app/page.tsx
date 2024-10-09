import Image from 'next/image';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/theme-toggle';
import { NavMenu } from '@/components/nav-menu';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold">DENIS DINKEVYCH</h1>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <NavMenu />
          </div>
        </div>
      </header>

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <section className="lg:col-span-1">
              <div className="flex flex-col items-center lg:items-start">
                <Image
                  src="https://i.postimg.cc/qRgMhzw7/photo-2024-10-04-15-18-10.jpg"
                  alt="Denis Dinkevych"
                  width={250}
                  height={250}
                  className="rounded-full mb-8 w-48 h-48 sm:w-64 sm:h-64 object-cover"
                />
                <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">Talent Sourcing Expert</h2>
                <p className="mb-4 text-center lg:text-left">Specializing in advanced sourcing strategies, talent analytics, and AI-driven recruitment solutions.</p>
                <p className="text-center lg:text-left">Elevating recruitment through data-driven insights and innovative sourcing techniques.</p>
              </div>
            </section>

            <section className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Innovative sourcing strategies <span className="bg-yellow-300 dark:bg-yellow-600 px-1">to elevate</span> your talent acquisition.
              </h2>
              <p className="text-lg sm:text-xl mb-8">I share weekly insights on cutting-edge sourcing techniques, talent analytics, and AI applications in recruitment. Join over 100,000 professionals benefiting from these strategies.</p>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-xl sm:text-2xl font-semibold mb-4">Subscribe to receive expert sourcing tips and strategies.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input type="email" placeholder="Enter your email" className="flex-grow" />
                  <Button className="w-full sm:w-auto">Subscribe</Button>
                </div>
                <p className="mt-4 text-orange-500 dark:text-orange-400 font-semibold">Unlock the power of advanced sourcing techniques!</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-xl font-semibold mb-4">Connect with me</h4>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Twitter size={28} /></a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Linkedin size={28} /></a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Github size={28} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}