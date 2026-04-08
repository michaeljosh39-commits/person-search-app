import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, Github, Layers, Server, Smartphone } from 'lucide-react'

function ProjectOverview() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Application Architecture</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="mb-4">
          Person App is built with Next.js App Router and uses server actions for data mutations.
          This keeps Create, Read, Update, and Delete logic close to the UI while maintaining type safety.
        </p>
        <p className="mb-4">
          User interactions are handled by client components, while data persistence is handled by
          Prisma Client on the server. The result is a responsive and maintainable full-stack flow.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-2 text-sm"><Layers className="h-4 w-4" /> Next.js 16 App Router</div>
          <div className="flex items-center gap-2 text-sm"><Server className="h-4 w-4" /> Server Actions for CRUD</div>
          <div className="flex items-center gap-2 text-sm"><Database className="h-4 w-4" /> Prisma ORM + Neon PostgreSQL</div>
          <div className="flex items-center gap-2 text-sm"><Smartphone className="h-4 w-4" /> Responsive mobile-first UI</div>
        </div>
      </CardContent>
    </Card>
  )
}

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button asChild>
        <Link href="https://github.com/Shuji0121/person-search-app" target="_blank" rel="noopener noreferrer">
          <Github className="mr-2 h-4 w-4" /> GitHub
        </Link>
      </Button>
      <Button asChild variant="secondary">
        <Link href="/database">
          <Database className="mr-2 h-4 w-4" /> Database Documentation
        </Link>
      </Button>
    </div>
  )
}

function DeveloperInfo() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Technology Stack</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Frontend is built with React 19, Tailwind CSS, and shadcn/ui components.
          Validation uses Zod and React Hook Form to enforce input correctness.
        </p>
        <p className="mb-4">
          Backend data operations use Prisma with a relational schema and migrations,
          ensuring data consistency for person records.
        </p>
        <SocialLinks />
      </CardContent>
    </Card>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">About Person Search</h1>
        <ProjectOverview />
        <DeveloperInfo />
        <Button asChild variant="link" className="mt-4">
          <Link href="/">
            Back to Home
          </Link>
        </Button>
      </main>
    </div>
  )
}

