# UVic MSA Website

Official website for the University of Victoria Muslim Students’ Association.

## Overview

This project is a Next.js 14 site for the UVic MSA. It includes:

- a landing page for community information and announcements
- sections for prayer info, events, food guidance, team members, and resources
- a dedicated resource page for RUH counselling support

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Available scripts

```bash
npm run dev    # start local development server
npm run build  # create a production build
npm run start  # run the production server
```

## Project structure

```text
app/                    Next.js app router entrypoints
  page.tsx              Main homepage route
  resources/            Additional resource pages
src/
  App.tsx               Homepage composition
  components/           Layout, section, and UI components
  content/              Site content and static data
  data/                 Shared TypeScript types
  hooks/                React hooks
  lib/                  Utility helpers
public/                 Static assets
```

## Content updates

Most site copy and structured content live in `src/content/`. Update those files to change text, links, FAQs, events, team details, and other homepage content.

## Deployment

Build the app before deployment:

```bash
npm run build
```

If the build succeeds, the project is ready to run in production with `npm run start`.
