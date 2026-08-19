---
title: "ML-Assisted Natural Language to SQL Query System"
slug: "nl-to-sql"
summary: "A CSV-agnostic natural language to SQL system pairing a fine-tuned BERT intent classifier with a self-built, schema-aware rule-based SQL generator — no external LLM API calls."
date: "2026-08-19"
tags: ["Python", "BERT", "PyTorch", "Hugging Face Transformers", "Streamlit", "SQLite", "Pandas"]
featured: true
repoUrl: "https://github.com/dangkhoa241/ML-assisted-natural-language-to-SQL-query-system"
liveUrl: "https://ml-assisted-natural-language-to-sql-query-system.streamlit.app/"
coverImage: "/projects/nl-to-sql.webp"
---

An end-to-end pipeline that lets users query **any uploaded CSV** in plain English — not just the healthcare example dataset it ships with. The app inspects whatever CSV is uploaded at runtime and adapts to its columns automatically.

**User question → Intent classification → SQL generation → Query execution → Table → Chart**

This is an enhanced, generalized rebuild of an earlier project ([LLMs-powered-natural-language-query-system-for-healthcare](https://github.com/dangkhoa241/LLMs-powered-natural-language-query-system-for-healthcare)), which only worked against one hardcoded healthcare dataset.

## Features

- **Intent classification** — a BERT (`bert-base-uncased`) model fine-tuned on 1,250 domain-neutral examples across 14 domains (retail, education, HR, finance, healthcare, and more), classifying questions into filter / count / aggregate / compare / trend
- **Schema-aware SQL generation** — a hand-built, rule-based NL→SQL engine that reads the uploaded CSV's actual columns, types, and values at runtime and matches them against the question, instead of relying on hardcoded column names
- **Graceful degradation** — falls back to a lightweight keyword-based intent guesser when a trained BERT model isn't available, so the app is usable immediately
- **Automatic visualization** — generates the appropriate chart (bar / pie / line) based on the detected intent, plus basic highest/lowest insights
- **Streamlit UI** — upload a CSV, ask a question, and see the detected intent, generated SQL, results table, and chart end-to-end

## Why rule-based instead of an LLM

An LLM-API-driven SQL generator and two small local open-source text-to-SQL models were evaluated first. Both produced unreliable SQL for aggregate/compare/trend queries — missing `GROUP BY`, dropped aggregate functions, wrong comparison operators. The final design uses a fully self-contained, rule-based generator driven by the uploaded schema instead — no external API calls and no model download required to run it.

## Architecture

- `src/data_context.py` — CSV loading, type inference, SQLite table setup
- `src/intent.py` — BERT intent classifier + keyword-based fallback
- `src/sql_builder.py` — schema-aware, rule-based NL→SQL generation
- `src/visualization.py` — chart rendering + insights
- `src/model_training.ipynb` — notebook for training the intent model
