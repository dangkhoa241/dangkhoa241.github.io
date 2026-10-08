---
title: "RAG-Assisted Natural Language to SQL System"
slug: "nl-to-sql"
summary: "Ask questions about a dataset in plain English and get the SQL, a table, and a chart."
date: "2026-08-19"
tags: ["Python", "FastAPI", "React", "TypeScript", "BERT", "ONNX Runtime", "RAG", "Groq", "SQLite", "Vercel", "Render"]
featured: true
order: 2
repoUrl: "https://github.com/dangkhoa241/RAG-assisted-natural-language-to-SQL-query-system"
liveUrl: "https://nl2sql-assistant.vercel.app"
reportNote: "Hosted on a free tier — the first load may take about a minute while the server wakes up."
coverImage: "/projects/nl-to-sql-arr.webp"
---

A fine-tuned BERT model routes each question by intent, term-gated retrieval sends only the matching business definitions (like "ARR" or "active account"), and gpt-oss-120b writes the SQL — with gpt-oss-20b and rule-based generators as fallbacks.

**User question → Intent routing → Glossary retrieval → SQL generation → Query execution → Table → Chart**

## Results

- On a held-out domain never used for tuning (settings frozen before testing), accuracy on definition-dependent questions rose from 0% to 95% — within 2.5 points of an oracle baseline
- Diagnosed why naive few-shot RAG lowered accuracy (99.2% → 93.3%): retrieval matched the question's topic, not the SQL structure it needed

## Features

- **Intent-routed generation** — a fine-tuned BERT classifier identifies the question's intent before any SQL is written
- **Term-gated retrieval** — only the business-glossary terms that actually match the question (like "ARR" or "active account") are retrieved and sent to the model, instead of the whole glossary on every prompt
- **LLM with fallbacks** — gpt-oss-120b generates the SQL, falling back to gpt-oss-20b and then a rule-based generator if needed
- **Read-only SQL safety layer** — a SELECT-only execution guard blocked 13 prompt-injection variants in testing
- **Free-tier-friendly serving** — BERT exported to int8 ONNX Runtime, cutting serving memory from 754 MB to 243 MB so the whole app runs on free hosting (Vercel + Render)

## Screenshots

![Line chart of net revenue by month answering the question "net revenue per month in 2024", with the generated SQL and a data table shown below it](/projects/nl-to-sql-trend.webp)

![Mobile view of the NL-to-SQL assistant answering a question with a chart, table, and SQL](/projects/nl-to-sql-mobile.webp)

## History

> Started as a BERT-based class project at University of the Pacific, then became [v1](https://github.com/dangkhoa241/ML-assisted-natural-language-to-SQL-query-system) — a Streamlit app that worked against any uploaded CSV.
