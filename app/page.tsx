import { ModeToggle } from "@/components/mode-toggle"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold neon-gradient">technicals.dev</h1>
          <ModeToggle />
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 neon-gradient">Technical Products</h2>
          <p className="max-w-2xl">
            We are passionate about delivering cutting-edge technical solutions. Our expertise spans
            across various domains of technology, ensuring that we can meet diverse client needs with
            precision and innovation.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 neon-gradient">Our Services</h2>
          <ul className="list-disc list-inside max-w-2xl">
            <li>Technical Product Management</li>
            <li>Data Science and analytics</li>
            <li>AI and Machine Learning</li>
            <li>MLOps and Infrastructure</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 neon-gradient">Our Fields</h2>
          <ul className="list-disc list-inside max-w-2xl">
            <li>Public and Private Healthcare</li>
            <li>Defense</li>
            <li>Public Safety</li>
            <li>Business Services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 neon-gradient">Contact Us</h2>
          <ContactForm />
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center">
        <p>&copy; 2025 technicals.dev / Bornless Labs All rights reserved.</p>
      </footer>
    </div>
  )
}

