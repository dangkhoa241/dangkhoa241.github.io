---
title: "US Weather Forecast Pipeline"
slug: "us-weather-pipeline"
summary: "Which weather model forecasts the US best? A live data platform that collects forecasts from 5 sources for 55 US cities, scores them against what actually happened, and emails weather alerts to subscribers. Runs on AWS at $0."
date: "2026-10-11"
tags: ["Node.js", "Hono", "TypeScript", "React", "D3", "MongoDB", "ClickHouse", "Redis", "Docker", "AWS Lambda", "EventBridge", "S3", "CloudFront", "SNS", "DynamoDB", "SAM", "Cloudflare Turnstile", "Vitest", "Playwright"]
featured: true
order: 0
repoUrl: "https://github.com/dangkhoa241/us-weather-pipeline"
liveUrl: "https://us-weather-pipeline.vercel.app"
coverImage: "/projects/us-weather-pipeline.webp"
---

An end-to-end data pipeline and dashboard that collects NWS forecasts and alerts plus 4 weather models (ECMWF, GFS, ICON, HRRR), scores them against what actually happened, and explains 3 years of weather for 55 US cities, all on a $0 budget.

## Key finding

**ECMWF is the most accurate model: 2.1°F average error one day ahead** (as of 2026-10-11).

Average error 1 day ahead:

1. **ECMWF** — 2.1°F (runs 0.3°F too warm)
2. **ICON** — 2.2°F (0.1°F too warm)
3. **HRRR** — 2.8°F (no bias)
4. **GFS** — 3.1°F (1.0°F too warm)

The best-match blend baseline scores 2.5°F (listed, not ranked).

Error grows by about 0.3°F for each extra day of lead time. Scores compare hourly forecasts with observed temperatures (about 86,000 pairs per model), and a model is ranked only after 30 days of scores. NWS is still collecting days: on the city-hours both were scored on, ECMWF missed by 1.58°F and NWS by 1.94°F.

## Features

- **Overview** — a US map with 55 city dots and a linked, sortable state table, with KPIs compared to the previous period
- **City history** — drill down from years to months to days, with twin temperature and rain charts, a synced crosshair, and PNG/CSV download
- **Accuracy** — a leaderboard by lead day, error vs lead time, bias by month, the best model per state, and the biggest misses
- **Forecast** — 7-day NWS cards, the next 48 hours, a "Models disagree?" spread chart, and active NWS alerts
- **Forecast replay** — shows what each model predicted for a day's high 1 to 7 days before, against the observed high; it calls Open-Meteo directly from the browser and falls back to a bundled sample if offline
- **Weather alerts by email** — visitors sign up for NWS alerts for their city (see below)
- **Pipeline Ops page** — the last run, status, and duration of each Lambda job, data freshness, incidents, and alert-email counts for the last 7 days
- **How it works page** — the whole project in one interactive diagram, with a data-flow view and an AWS view; click any part to see what it does, why it was chosen, and one measured number
- **Polish** — shareable URLs for every filter, a keyboard-accessible map and charts, light and dark themes, missing data shown as gaps (never 0), and a tooltip for every weather term

## Tour of the live app

![Header and KPI cards, the US map with 55 cities, zooming into California, San Francisco history charts, the Forecast page, the Get alerts dialog, the Accuracy leaderboard, and the Ops status page](/projects/us-weather-pipeline-tour.gif)

## Architecture

Data flows NWS + Open-Meteo → MongoDB → ClickHouse → Redis → Hono API → React and D3. The design is hybrid so it stays at $0:

- **On AWS** (one SAM stack, infrastructure as code): EventBridge schedules a Lambda that collects NWS forecasts and alerts into a MongoDB Atlas buffer, so the laptop can be off. A publisher Lambda writes live JSON to a private S3 bucket behind CloudFront, so no code runs per page view and there is no public API to attack.
- **On a laptop in Docker**: the ClickHouse warehouse, Redis cache, and Hono API. Loads are incremental (watermark) into `ReplacingMergeTree` tables, with daily and monthly rollups in each city's local time.
- **The dashboard** on Vercel ships a snapshot from the API and lays the live CloudFront files over it, falling back to the snapshot if CloudFront is unreachable.

The live app's How it works page shows the whole pipeline as an interactive diagram:

![The How it works page: switching between the data-flow and AWS views and opening parts of the pipeline to see what each does, why it was chosen, and when it last ran](/projects/us-weather-pipeline-how-it-works.gif)

## Weather alerts

- **Public sign-ups** — visitors pick a city and alert types (heat, flood, wind/storm, winter, fire & air quality, tropical) and confirm by email (double opt-in)
- **Abuse and cost limits** — Cloudflare Turnstile checked on the server, 5 attempts per IP per hour, 20 new subscriptions a day, a 100-subscriber cap, and a hard stop at 900 of the 1,000 free SNS emails a month
- **Isolated delivery** — SNS filter policies route alerts by city and category; subscriber emails use their own topic, separate from pipeline failure emails; limits and the email budget live in DynamoDB
- **Less alert fatigue** — emails go out only for new, upgraded, or extended alerts: replaying the stored heat alerts sends 5 emails instead of 17

## By the numbers

- **1.82M** hourly observations and **4.56M** forecast snapshots for 55 cities, with full history since 2023
- Redis cache: warm p95 **35.4 → 2.9 ms** (12× faster)
- API: ~1,600 requests/s at p95 12.7 ms with 0 errors; 22/22 security probe checks
- **480** automated tests in CI
- AWS: the collector uses ~2% of Lambda's free tier; **$0** bill

## Engineering practices (with Claude Code)

- Designed the product and directed Claude Code to build 3 versions of each of 5 key features (caching, API layer, US map, drill-down chart, forecast replay chart), then compared them with measured numbers and merged the winner. Examples: Hono over Express and Fastify for the lowest memory, and a hand-rolled d3 map at +47 KB vs +71 KB and +83 KB
- Security reviews at every stage caught and fixed SQL injection, NoSQL operator injection, XSS-prone tooltips, and a Redis outage that made requests hang
- Security: strict CSP, a private S3 bucket behind CloudFront Origin Access Control, least-privilege IAM users with a permissions boundary on every role, secrets stored in SSM Parameter Store, and secret scanning before every push
- Resilient collection: retries with backoff, keeps the last good forecast when one city fails, and retries throttled scheduled runs instead of dropping them
