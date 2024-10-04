import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Code, Gauge, Layout, Zap, Users, Palette, Clock, RefreshCw, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="w-full py-4 text-white bg-red-600">
        <div className="container flex flex-col items-center justify-between px-4 mx-auto md:px-6 sm:flex-row">
          <p className="mb-2 text-sm sm:mb-0">
            🚧 ReactPress is currently under active development. We welcome contributors!
          </p>
          <Link 
            href="https://github.com/byronwade/ReactPress" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 text-sm text-red-600 transition-colors duration-200 bg-white rounded-full hover:bg-red-100"
          >
            <Github className="w-4 h-4 mr-1" />
            Join us on GitHub
          </Link>
        </div>
      </div>
      <header className="sticky top-0 z-50 flex items-center h-16 px-4 lg:px-6 backdrop-blur-md bg-white/30 dark:bg-gray-800/30">
        <div className="container flex items-center justify-between mx-auto">
          <Link className="flex items-center justify-center" href="#">
            <Zap className="w-6 h-6 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">ReactPress</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400" href="#why">
              Why ReactPress
            </Link>
            <Link className="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400" href="#cta">
              Get Started
            </Link>
            <Link className="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400" href="#cta">
              Demo
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  The Ultimate WordPress Conversion
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Experience the best WordPress conversion of the decade. A lightning-fast, fully compatible React-based admin panel theme built with Next.js 15 and Tailwind CSS.
                </p>
              </div>
              <div className="space-x-4">
              <Link 
              href="/rp-admin">
                <Button variant="outline" className="px-4 py-2 font-bold text-blue-600 transition-all duration-200 transform border-blue-600 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900 hover:scale-105">
                  View Demo
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 bg-white md:py-24 lg:py-32 dark:bg-gray-800">
          <div className="container px-4 mx-auto md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-center text-transparent sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              WordPress Reimagined for the Next Decade
            </h2>
            <div className="flex flex-col items-center justify-center gap-8 mb-12 md:flex-row">
              <div className="relative w-full max-w-md">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Traditional WordPress Admin"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute px-3 py-1 text-sm font-semibold bg-white rounded-full bottom-4 left-4 dark:bg-gray-800">
                  WordPress: Familiar but Dated
                </div>
              </div>
              <ArrowRight className="w-12 h-12 text-blue-600 transform rotate-90 md:rotate-0" />
              <div className="relative w-full max-w-md">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="ReactPress Admin"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full bottom-4 left-4">
                  ReactPress: Modern & Fast
                </div>
              </div>
            </div>
            <div className="mb-12 text-center">
              <h3 className="mb-4 text-2xl font-bold">Full WordPress Compatibility with Next.js 15 Speed</h3>
              <div className="flex items-center justify-center space-x-8">
                <div className="flex flex-col items-center">
                  <Clock className="w-12 h-12 mb-2 text-gray-400" />
                  <p className="text-lg font-semibold">Traditional WordPress</p>
                  <p className="text-3xl font-bold text-gray-600">2.5s</p>
                  <p className="text-sm text-gray-500">Average Load Time</p>
                </div>
                <ArrowRight className="w-8 h-8 text-blue-600" />
                <div className="flex flex-col items-center">
                  <Zap className="w-12 h-12 mb-2 text-blue-600" />
                  <p className="text-lg font-semibold">ReactPress</p>
                  <p className="text-3xl font-bold text-blue-600">0.5s</p>
                  <p className="text-sm text-gray-500">Average Load Time</p>
                </div>
              </div>
            </div>
            <p className="mb-8 text-lg font-semibold text-center text-gray-700 dark:text-gray-300">
              ReactPress offers full WordPress page compatibility, including update pages, all rebuilt from the ground up with Next.js 15 for unparalleled performance.
            </p>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Gauge className="w-12 h-12 text-blue-600" />
                <h3 className="text-xl font-bold">Next.js 15 Powered</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Leveraging the latest Next.js 15 features for optimal speed and efficiency in both server-side rendering and static generation.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <RefreshCw className="w-12 h-12 text-blue-600" />
                <h3 className="text-xl font-bold">100% WordPress Compatible</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Every WordPress page, including update pages, meticulously recreated to ensure a seamless transition for your existing workflows.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Palette className="w-12 h-12 text-blue-600" />
                <h3 className="text-xl font-bold">Modernized Design</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Familiar WordPress layout enhanced with modern UI/UX practices and Tailwind CSS for unlimited styling possibilities.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-900">
          <div className="container px-4 mx-auto md:px-6">
            <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center text-transparent sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Why ReactPress is the Best WordPress Conversion of the Decade
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 transition-all duration-200 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl">
                <Zap className="w-12 h-12 mb-4 text-blue-600" />
                <h3 className="mb-2 text-xl font-bold">Next.js 15 Performance</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Harnessing the power of Next.js 15 for blazing fast load times. Pages load in 0.5 seconds on average, a 5x improvement over traditional WordPress.
                </p>
              </div>
              <div className="p-6 transition-all duration-200 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl">
                <RefreshCw className="w-12 h-12 mb-4 text-blue-600" />
                <h3 className="mb-2 text-xl font-bold">Full WordPress Compatibility</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Every WordPress feature, including update pages, meticulously recreated to ensure a seamless transition. Your existing plugins and themes will work out of the box.
                </p>
              </div>
              <div className="p-6 transition-all duration-200 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl">
                <Layout className="w-12 h-12 mb-4 text-blue-600" />
                <h3 className="mb-2 text-xl font-bold">Responsive Design</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Fully responsive admin panel that looks great on all devices, from mobile phones to large desktop screens, without sacrificing speed or functionality.
                </p>
              </div>
              <div className="p-6 transition-all duration-200 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl">
                <Code className="w-12 h-12 mb-4 text-blue-600" />
                <h3 className="mb-2 text-xl font-bold">Developer-Friendly</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Built with React and Next.js 15, making it easy to extend and customize. Enjoy the benefits of modern web development while maintaining WordPress compatibility.
                </p>
              </div>
              <div className="p-6 transition-all duration-200 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl">
                <CheckCircle className="w-12 h-12 mb-4 text-blue-600" />
                <h3 className="mb-2 text-xl font-bold">Enhanced Security</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Benefit from the security features of Next.js 15 and React, reducing common WordPress vulnerabilities while maintaining full functionality.
                </p>
              </div>
              <div className="p-6 transition-all duration-200 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl">
                <Users className="w-12 h-12 mb-4 text-blue-600" />
                <h3 className="mb-2 text-xl font-bold">Seamless Migration</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Transition from WordPress to ReactPress with ease. Our migration tools ensure a smooth switch, preserving all your content and settings.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="why" className="w-full py-12 bg-white md:py-24 lg:py-32 dark:bg-gray-800">
          <div className="container px-4 mx-auto md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-center text-transparent sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Why ReactPress is the Future of WordPress
            </h2>
            <p className="max-w-3xl mx-auto mb-12 text-xl text-center text-gray-700 dark:text-gray-300">
              ReactPress represents the most significant advancement in WordPress technology this decade. By rebuilding WordPress with Next.js 15, we've created a platform that's faster, more secure, and more developer-friendly than ever before.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-900">
                <h3 className="mb-2 text-lg font-bold">5x Faster Performance</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Next.js 15 optimization allows ReactPress to load and operate up to 5 times faster than traditional WordPress sites.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-900">
                <h3 className="mb-2 text-lg font-bold">100% WordPress Compatible</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Every WordPress feature, including update pages and plugin compatibility, has been carefully recreated and optimized.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-900">
                <h3 className="mb-2 text-lg font-bold">Future-Proof Technology</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Built on Next.js 15 and React, ReactPress is designed to evolve with web standards while maintaining backwards compatibility with WordPress.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Join the WordPress Revolution
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Experience the best WordPress conversion of the decade. Get early access to ReactPress and transform your WordPress site with Next.js 15 power!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="flex-1 max-w-lg bg-white dark:bg-gray-800" placeholder="Enter your email" type="email" />
                  <Button className="text-blue-600 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700" type="submit">
                    Get Access
                  </Button>
                </form>
                <p className="text-xs text-gray-200">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-white" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col items-center w-full gap-2 px-4 py-6 bg-gray-100 border-t sm:flex-row shrink-0 md:px-6 dark:bg-gray-800">
        <div className="container flex flex-col items-center justify-between mx-auto sm:flex-row">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 ReactPress. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}