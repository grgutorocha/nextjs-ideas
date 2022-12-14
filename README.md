This is a simple repository to make some experiments to learn Next.js.

Check out the production build: [https://nextjs-ideas.vercel.app](https://nextjs-ideas.vercel.app)

## Tech Stack

- Next.js 13
- React 18
- Typescript
- Vercel for deployment
- ESLint, Prettier
- Jest, React Testing Library
- MSW: Mock Service Worker
- REST API with axios

## Code Quality

If VSCode is your standard IDE, you can integrate Prettier to help you watch the inconsistencies. To do that, go to Settings and search for `Default Formatter`. In the droplist, choose the `Prettier - Code formatter` option. This configuration will help you to keep the code quality.

Another option to check the code quality is to run the command below. In case of any discrepancies, some warning/error messages will be displayed on the terminal.

```bash
npm run lint
```

## Getting Started

First, create a `.env.local` file with the following content:

```bash
NEXT_PUBLIC_API_URL=http://localhost:4200
NEXT_PUBLIC_API_MOCKING=enabled
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To test the application, run the command:

```bash
npm run test
```

## Pages
The idea with this repository is to create a simple application by page. In this section, you will know all the pages we have in this application.

Route: `/reorder-text`
Description: This page is a simple React static application to revert a given text.
Tech stack: React, useState, useCallback, Typescript

Route: `/blog`
Description: List of articles.
Tech stack: NextJS, getServerSideProps, REST API

Route: `/blog/about`
Description: This is a simple page.
Tech stack: NextJS, getStaticProps, REST API

Route: `/blog/news/slug`
Description: This is a simple article.
Tech stack: NextJS, getStaticProps, getStaticPaths, REST API

## Next steps
- Absolute imports
- Add navigation to the Blog
- Add tests to the Blog
- MSW Mock documentation
- Tests documentation
- Create global types

## Learn More About Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
