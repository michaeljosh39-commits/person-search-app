import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const REPO_URL = 'https://github.com/Shuji0121/person-search-app'

export default function GitHubPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">GitHub Repository</h1>
      <Card>
        <CardHeader>
          <CardTitle>Public Source Code</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This project is publicly available for review. Use the link below to inspect
            source code, commits, Prisma schema, and migration history.
          </p>
          <Button asChild>
            <Link href={REPO_URL} target="_blank" rel="noopener noreferrer">
              Open Public GitHub Repository
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground">{REPO_URL}</p>
        </CardContent>
      </Card>
    </div>
  )
}
