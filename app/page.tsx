import Link from 'next/link'
import { Flame, Droplet, Leaf, Zap, Trophy, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Flame className="h-8 w-8 text-orange-500" />
            <h1 className="text-2xl font-bold">Creature Battle Arena</h1>
          </div>
          <div className="space-x-4">
            <Link
              href="/auth/login"
              className="px-4 py-2 text-sm font-medium hover:text-blue-300 transition"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            BATTLE. EVOLVE. CONQUER.
          </h2>

          <p className="text-xl text-gray-300">
            Choose your starter, train powerful creatures, and battle players worldwide in this epic turn-based MMORPG
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-lg font-bold shadow-lg transform hover:scale-105 transition"
            >
              Start Your Journey
            </Link>
            <Link
              href="#features"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg text-lg font-bold border border-white/20 transition"
            >
              Learn More
            </Link>
          </div>

          {/* Element Icons */}
          <div className="flex justify-center gap-8 pt-8">
            <div className="flex flex-col items-center">
              <Flame className="h-12 w-12 text-orange-500 mb-2" />
              <span className="text-sm">Fire</span>
            </div>
            <div className="flex flex-col items-center">
              <Droplet className="h-12 w-12 text-blue-500 mb-2" />
              <span className="text-sm">Water</span>
            </div>
            <div className="flex flex-col items-center">
              <Leaf className="h-12 w-12 text-green-500 mb-2" />
              <span className="text-sm">Grass</span>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="h-12 w-12 text-yellow-500 mb-2" />
              <span className="text-sm">Electric</span>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Game Features</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <Trophy className="h-12 w-12 text-yellow-500 mb-4" />
            <h4 className="text-xl font-bold mb-2">Battle System</h4>
            <p className="text-gray-400">
              Engage in strategic turn-based battles against wild creatures and other players. Master type advantages and devastating moves!
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <Users className="h-12 w-12 text-blue-500 mb-4" />
            <h4 className="text-xl font-bold mb-2">PvP Arena</h4>
            <p className="text-gray-400">
              Climb the ranked ladder, compete in tournaments, and prove you're the ultimate trainer in real-time PvP battles!
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <Flame className="h-12 w-12 text-red-500 mb-4" />
            <h4 className="text-xl font-bold mb-2">Evolution</h4>
            <p className="text-gray-400">
              Train your creatures, level them up, and unlock powerful evolutions to create the ultimate team!
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-center mb-8">Join the Adventure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400">10,234</div>
              <div className="text-gray-400 mt-2">Active Players</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400">45,678</div>
              <div className="text-gray-400 mt-2">Battles Fought</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400">120+</div>
              <div className="text-gray-400 mt-2">Unique Creatures</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Creature Battle Arena. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
