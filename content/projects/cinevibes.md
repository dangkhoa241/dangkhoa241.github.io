---
title: "CineVibes"
slug: "cinevibes"
summary: "A full-stack movie discussion platform with spoiler-aware, category-based comment threads and trending rankings."
date: "2026-08-16"
tags: ["React", "Node.js", "Express", "MongoDB", "Vite", "JWT Auth", "Groq"]
featured: true
order: 1
repoUrl: "https://github.com/dangkhoa241/cinevibes"
liveUrl: "https://cinevibes-rho.vercel.app/"
coverImage: "/projects/cinevibes.webp"
---

CineVibes is a full-stack web app for movie enthusiasts to browse films and discuss them in a structured, spoiler-aware way.

## Features

- **Movie browsing** — titles, posters, and details sourced from the OMDB API and cached in MongoDB
- **Structured discussions** — comments are split into categories (Character/Actor, Plot Twist, Script/Dialogue, Memorable Scenes) instead of one flat thread
- **Spoiler protection** — comments can be marked as spoilers and stay hidden until manually revealed
- **Trending rankings** — movies ranked by discussion activity
- **Search & pagination** — search by title with paginated results
- **JWT authentication** — signup/login with bcrypt-hashed passwords and token-protected comment posting
- **CineBot AI chat assistant** — an in-app chatbot (Groq-hosted LLM) for movie recommendations, plot discussion, and trivia; grounded in CineVibes' own MongoDB catalog via a search tool that filters by title, year, genre, or trending status, and is aware of whichever movie page the user is currently viewing

## Architecture

The app is split into two independently deployed services: a React (Vite) frontend on Vercel and an Express/MongoDB API on Render, communicating over CORS-restricted REST endpoints rather than being served from a single origin.
