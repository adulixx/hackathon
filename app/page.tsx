import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Brain, Coffee, Headphones, Palette, Play, Sparkles, Star, Users, Zap } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="container px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Powered Development
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Vibe
            </span>{" "}
            coding
          </h1>

          <p className="text-xl md:text-2xl text-foreground max-w-2xl leading-relaxed">
            Vibe coding is a new way to code. It is a way to code that feels natural, intuitive, and effortlessly
            productive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg">
              <Play className="w-4 h-4 mr-2" />
              Start vibing
            </Button>
            <Button variant="outline" size="lg">
              Watch demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="pt-8">
            <Image
              src="/placeholder.svg"
              alt="Vibe Coding Interface"
              width={800}
              height={400}
              className="rounded-2xl shadow-2xl border"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container px-4 py-16 md:py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Why Developers Love Vibe Coding</h2>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Transform your development experience with AI that understands your coding style and rhythm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-white dark:from-purple-950 dark:to-purple-950">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Intelligent Assistance</CardTitle>
              <CardDescription className="text-foreground">
                AI that learns your patterns and suggests code that matches your style and project context.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-pink-50 to-white dark:from-pink-950 dark:to-pink-950">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-pink-600" />
              </div>
              <CardTitle>Flow State Focus</CardTitle>
              <CardDescription className="text-foreground">
                Minimize context switching with seamless AI integration that keeps you in the zone.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-orange-950">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>Creative Freedom</CardTitle>
              <CardDescription className="text-foreground">
                Express your ideas naturally while AI handles the boilerplate and optimization.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-white dark:from-green-950 dark:to-green-950">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <Coffee className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Relaxed Productivity</CardTitle>
              <CardDescription className="text-foreground">
                Code without stress. AI handles the heavy lifting while you focus on the creative aspects.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-blue-950">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Ambient Coding</CardTitle>
              <CardDescription className="text-foreground">
                Integrated music, themes, and ambiance settings to create your perfect coding environment.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950 dark:to-indigo-950">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <CardTitle>Community Vibes</CardTitle>
              <CardDescription className="text-foreground">
                Connect with like-minded developers who value both productivity and well-being.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950 py-16 md:py-24 rounded-xl"
      >
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">How Vibe Coding Works</h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Three simple steps to transform your coding experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Set Your Vibe</h3>
              <p className="text-foreground">
                Choose your coding environment, music, and AI personality to match your mood and project.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center mx-auto text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">Code Naturally</h3>
              <p className="text-foreground">
                Write code as you think. AI understands context and provides suggestions that feel intuitive.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mx-auto text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">Ship with Confidence</h3>
              <p className="text-foreground">
                Deploy beautiful, optimized code while maintaining your creative flow and personal style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container px-4 py-16 md:py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Loved by Developers Worldwide</h2>
          <p className="text-xl text-foreground">Join thousands of developers who&apos;ve found their coding flow</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                &quot;Vibe Coding changed how I approach development. I&apos;m more creative and productive than
                ever.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                <div>
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-sm text-foreground">Full-stack Developer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                &quot;Finally, an AI coding tool that understands the importance of developer well-being and flow
                state.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-400" />
                <div>
                  <p className="font-semibold">Marcus Rodriguez</p>
                  <p className="text-sm text-foreground">Senior Engineer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                &quot;The perfect balance of AI assistance and creative freedom. Coding feels fun again!&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-400" />
                <div>
                  <p className="font-semibold">Alex Thompson</p>
                  <p className="text-sm text-foreground">Indie Developer</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-16 md:py-24 rounded-xl dark:from-purple-950 dark:via-pink-950 dark:to-orange-950 dark:text-white">
        <div className="container px-4 text-center">
          <div className="max-w-7xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Find Your Coding Flow?</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Join thousands of developers who&apos;ve discovered the perfect balance of AI assistance and creative
              freedom.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Input placeholder="Enter your email" className="placeholder:text-white/70" />
              <Button size="lg">Get started</Button>
            </div>

            <p className="text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  )
}
