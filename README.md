# Person Search App

Person Search App is a full-stack Next.js application for managing people records with complete CRUD operations backed by a real database. It is designed for deployment on Vercel and includes the required documentation pages for evaluation.

## Vercel 

https://person-search-app-xfl7.vercel.app/

<img width="2559" height="1467" alt="image" src="https://github.com/user-attachments/assets/f8309a04-363b-44c1-bfcc-41231bf4cbe1" />
<img width="2559" height="1464" alt="image" src="https://github.com/user-attachments/assets/4cc98a9b-6a1e-4136-85fc-5607dcb8d95a" />


## Live Pages

- Main app: `/`
- About page: `/about`
- GitHub page: `/github`
- Database page: `/database`

## What It Does

- Create new person records
- Read and search existing people from the database
- Update person details
- Delete records
- Validate form input before mutations
- Show a responsive UI that works on desktop and mobile

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Prisma ORM
- Neon PostgreSQL
- Tailwind CSS
- Radix UI components
- React Hook Form + Zod

## Database

The app uses Prisma with a PostgreSQL datasource configured through environment variables.

Required variables for Vercel:

- `DATABASE_URL` - Neon connection string used by the app at runtime
- `DIRECT_URL` - direct Neon connection string used by Prisma migrations and schema tasks

Sample data is seeded through `prisma/seed.ts` so the app has real records available for testing after deployment.

## Local Development

```bash
pnpm install
pnpm prisma:generate
pnpm dev
```

## Production Build

```bash
pnpm build
pnpm start
```

## Repository

Public GitHub repository:

https://github.com/michaeljosh39-commits/person-search-app

## Notes

- The app includes server actions for create, update, and delete operations.
- The main page reads records from the database and supports selection, editing, and deletion flows.
- The `/about` page explains the architecture.
- The `/github` page links back to the public repository.
- The `/database` page documents the Prisma schema and database structure.

The `MutableDialog` component currently uses a custom `ActionState` type to handle the result of form submissions. However, React 19 introduces built-in support for `ActionState` in Server Actions, which can simplify this implementation. 

#### Improvements to Make:
- Replace the custom `ActionState` interface with React 19's built-in `ActionState`.
- Use the `ActionState` directly within the form submission logic to align with React 19 best practices.
- Refactor error handling and success notifications to leverage React's server-side error handling.

This will be addressed in a future update to ensure the `MutableDialog` component remains aligned with React 19's capabilities.

## Contributing

Contributions are welcome! Please submit a Pull Request with your changes.

## License

This project is open source and available under the [MIT License](LICENSE).


## Contact

Callum Bir - [@callumbir](https://twitter.com/callumbir)  
Project Link: [https://github.com/gocallum/person-search](https://github.com/gocallum/person-search)  

