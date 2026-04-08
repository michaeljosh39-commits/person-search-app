import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function DatabasePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Database and Prisma Structure</h1>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Prisma Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              The app uses Prisma ORM with Neon PostgreSQL. Prisma Client handles all Create,
              Read, Update, and Delete operations from server actions.
            </p>
            <p>
              Connection strings are provided through DATABASE_URL and DIRECT_URL.
              In production, DATABASE_URL points to Neon and DIRECT_URL is used for direct
              database access during migrations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Person Model</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded-md border bg-muted p-4 text-sm">
{`model Person {
  id          String   @id @default(cuid())
  name        String
  email       String   @unique
  phoneNumber String   @unique
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}`}
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Migrations and Seed Data</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              Prisma migrations define schema history under prisma/migrations.
              Sample data is inserted with prisma/seed.ts to ensure evaluators can test
              search, edit, and delete flows immediately.
            </p>
            <p>
              Server actions in app/actions/actions.ts call Prisma Client directly, so all
              app-level CRUD operations are backed by the database.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
