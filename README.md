# UVic MSA Website

Official website for the University of Victoria Muslim Students’ Association.

## Overview

This project is the public-facing website for the UVic MSA. It brings together the most important student information in one place, including prayer details, events, campus resources, food guidance, community links, and current executive information.

The site is designed as a calm, editorial landing page for Muslim student life at UVic, with quick access to community platforms such as Discord, Instagram, Facebook, WhatsApp, Linktree, and the Ruh mental health resource.

## What the app includes

- a homepage with sections for prayer, events, food guidance, team information, resources, and FAQs
- a resources area featuring Ruh mental health support and key UVic MSA community links
- an Instagram section that surfaces recent posts from the UVic MSA account
- footer links for the main social and community platforms used by the MSA
- a compatibility redirect for the older Ruh counselling route

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Project structure

```text
app/                    Next.js app router entrypoints
  page.tsx              Main homepage route
  resources/            Route compatibility redirects and resource paths
src/
  App.tsx               Homepage composition
  components/           Layout, section, and UI components
  content/              Site content and structured link data
  data/                 Shared TypeScript types
  hooks/                React hooks
  lib/                  Utility helpers
public/                 Static assets
```

## Content summary

Most structured content lives in `src/content/`, where the site copy, navigation links, FAQs, events, team details, and external community links are defined. The homepage layout itself is composed from reusable section components in `src/components/`.

## Purpose

The app exists to give UVic students a simple, welcoming place to find the core information they need from the Muslim Students’ Association without relying on scattered links or outdated pages.
