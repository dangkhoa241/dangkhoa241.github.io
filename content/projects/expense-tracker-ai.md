---
title: "ExpenseTracker"
slug: "expense-tracker-ai"
summary: "A fully client-side personal expense tracker — logging, budgets, charts, and multi-format export, with no backend or accounts."
date: "2026-09-02"
tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts", "jsPDF", "Vitest"]
featured: true
order: 4
repoUrl: "https://github.com/dangkhoa241/expense-tracker-ai"
liveUrl: "https://expense-tracker-ai-sigma.vercel.app"
coverImage: "/projects/expense-tracker-ai.webp"
---

ExpenseTracker is a fully client-side personal finance app — every expense is logged, filtered, charted, and exported entirely in the browser via `localStorage`, with no backend, database, or accounts.

Built end-to-end with [Claude Code](https://claude.com/claude-code) as an active collaborator rather than just autocomplete — see below for what that looked like in practice.

## Features

- **Expense tracking** — add/edit/delete with search and filtering by category, date range, and free text
- **Dashboard** — summary cards, a category-breakdown pie chart, and a 6-month spending trend
- **Monthly budgets** — per-category spending limits with a green/amber/red progress panel, and an immediate warning when an expense pushes a category over budget
- **Multi-format export** — CSV, JSON, and PDF across four report shapes (raw data, tax report by category, monthly summary, category analysis), with its own independent date/category filtering
- **Analytics pages** — all-time top-categories and top-vendors rankings, backed by pure, unit-tested aggregation functions

## Engineering practices (with Claude Code)

- Evaluated three independent implementations of the export feature side by side — a simple one-button export, a filtered multi-format export, and a "cloud" export center — before merging the strongest, real parts of each. The "cloud" branch's integrations were deliberately left out once review showed they were UI-only stand-ins with no real backend behind them.
- That review caught a CSV formula-injection gap (an unescaped leading `=`, `+`, `-`, or `@` in an exported cell can be interpreted as a formula by spreadsheet apps), fixed before merging.
- Triaged five parallel feature branches on their merits — two merged (budgets, analytics), two were empty scaffolding, one was a duplicate — reconciling two independently added Vitest setups and overlapping edits to a shared header component along the way.
- Every change verified with ESLint, a strict-mode TypeScript production build, the Vitest suite, and a live dev-server smoke test before shipping.

## Architecture

Hooks own state and persistence (`useExpenses`, `useBudgets`, `useExportBuilder`), components render views, and `lib/` stays pure and independently testable.
