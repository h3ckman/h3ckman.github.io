# Project conventions

## Commands

- Build: `npm run build`
- Test: `npm test`

## Stack

- TypeScript with strict mode
- Next.js 13 with App Router
- React 19, functional components only
- Tailwind CSS for styling
- Jest and React Testing Library for testing
- ESLint and Prettier for code quality and formatting
- GitHub Actions for CI/CD
- Shadcn/ui component library for common UI patterns and accessibility

## Rules

- Named exports, never default exports
- Tests live next to source: `foo.ts` -> `foo.test.ts`
- All API routes return `{ data, error }` shape
