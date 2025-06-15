
# 📊 Next.js App Router Dashboard

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

This repository contains the completed project for the official **[Next.js Learn Course](https://nextjs.org/learn)**. It is a full-stack dashboard application built with the Next.js App Router, featuring data fetching, search and pagination, data mutation, and user authentication.

**This version uses [Supabase](https://supabase.com/) as the backend database and auth platform.**

### ✨ [View the Live Demo](https://nextjs-dashboard-omega-blond-34.vercel.app/)

![A screenshot of the Acme Dashboard, showing the main page with latest invoices and revenue charts.](./public/screenshot.png)

## About This Project

This project was created as a hands-on learning experience to master the core concepts of the Next.js App Router. The course guides you through building a feature-rich dashboard from the ground up.

The application is a simple invoice management system for a fictional company called "Acme".

## 🚀 Key Features & Concepts Learned

This project covers a comprehensive set of modern web development features and best practices:

* **Next.js App Router:** File-based routing, layouts, nested routes, and error handling.
* **Data Fetching:** Best practices for fetching, caching, and revalidating data on the server with Server Components.
* **Streaming & Suspense:** Improving user experience by streaming UI components as data becomes available.
* **Search & Pagination:** Implementing server-side search and pagination for large datasets using URL Search Params.
* **Data Mutation:** Handling form submissions with Server Actions to create, update, and delete data.
* **Authentication:** Adding authentication using `next-auth` and Supabase Auth to protect routes and manage user sessions.
* **Styling:** Using Tailwind CSS for a utility-first styling approach and `clsx` for conditional class names.
* **Database:** Set up and use Supabase (hosted Postgres) for all data storage and management.
* **Accessibility:** Ensuring the application is accessible to all users.
* **Metadata:** SEO optimization using the Metadata API.

## 🛠️ Getting Started Locally

Follow these instructions to set up the project on your local machine for development and testing.

### Prerequisites

* [Node.js](https://nodejs.org/en/) (v18.17 or later)
* [pnpm](https://pnpm.io/installation) (you can also use `npm` or `yarn`)
* [Supabase](https://supabase.com/) account (free tier is enough)

### 1. Clone the Repository

```bash
git clone https://github.com/clementogol/nextjs-dashboard.git
cd nextjs-dashboard
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Supabase & Environment Variables

This project uses Supabase for both the Postgres database and authentication.

- Create a new project on [Supabase](https://supabase.com/).
- In Supabase, go to Project Settings > API and find your `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
- Also get your database connection string (`SUPABASE_DB_URL`) from Project Settings > Database > Connection string.

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

Then add your credentials:

```env
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_DB_URL="postgres://..."
AUTH_SECRET="your-generated-secret-here"
```

Generate a secret for next-auth if you don't have one:

```bash
openssl rand -base64 32
```

### 4. Seed the Database

If you have a SQL schema or seed script, you can run it using Supabase SQL Editor or psql CLI.  
Alternatively, run any included seed scripts if provided:

```bash
pnpm seed
```

### 5. Run the Development Server

You are now ready to start the development server.

```bash
pnpm dev
```

Open http://localhost:3000 in your browser to see the result. You can log in with the user `user@nextmail.com` and the password `123456` (or any user in your Supabase auth).

## 🌐 Deployment

The easiest way to deploy this application is using the Vercel Platform.
Vercel provides seamless integration with Next.js and will automatically:
- Detect your Next.js project.
- Set up CI/CD pipelines.
- Handle environment variables for production (remember to add your `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_DB_URL`, and `AUTH_SECRET` in the Vercel project settings).

## 🙏 Acknowledgements

A huge thank you to the Vercel and Next.js teams for creating and maintaining this excellent and comprehensive learning resource.
- Official Next.js Learn Course
- Next.js Documentation
- Vercel Deployment Platform
