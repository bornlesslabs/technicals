"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    // Here you would typically send the form data to your server or a third-party service
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating API call
    setIsSubmitting(false)
    alert("Form submitted successfully!")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <Input type="text" placeholder="Your Name" required />
      <Input type="email" placeholder="Your Email" required />
      <Textarea placeholder="Your Message" required />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

