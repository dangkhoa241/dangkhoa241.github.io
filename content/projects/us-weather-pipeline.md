---
title: "US Weather Forecast Pipeline"
slug: "us-weather-pipeline"
summary: "A live data platform that collects US weather forecasts for 53 cities and measures how accurate they are. Visitors can sign up for weather alerts by email. Runs serverless on AWS at $0."
date: "2026-10-01"
tags: ["Node.js", "Hono", "TypeScript", "React", "D3", "MongoDB", "ClickHouse", "Redis", "Docker", "AWS Lambda", "S3", "CloudFront", "SNS", "DynamoDB", "SAM", "Cloudflare Turnstile", "Vitest", "Playwright"]
featured: true
order: 0
repoUrl: "https://github.com/dangkhoa241/us-weather-pipeline"
liveUrl: "https://us-weather-pipeline.vercel.app"
coverImage: "/projects/us-weather-pipeline.webp"
---

An end-to-end data pipeline and dashboard that collects NWS forecasts and alerts plus 4 weather models (ECMWF, GFS, ICON, HRRR), scores them against what actually happened, and replays how each forecast changed over time for 53 US cities with history since 2023.

## Features

- **Multi-model forecast scoring** — pulls forecasts from NWS and 4 weather models (ECMWF, GFS, ICON, HRRR) and measures each one's error against observed outcomes; ECMWF came out most accurate at 2.0°F average error one day ahead
- **Forecast replay** — shows how each model's prediction for a given day changed as that day got closer
- **Weather alerts by email** — visitors sign up for NWS alerts for their city (see below)
- **Large-scale ingestion** — 1.7M+ hourly observations and 3M+ forecast snapshots across 53 US cities, loaded idempotently with incremental updates and data-quality checks
- **Interactive dashboard** — a D3 visualization with drill-down from a US map, to city, to month, to day
- **Live status badges** — each page shows how fresh its data is ("history through …", "forecast updated …", "scored through …"), and the rain-chance chart shows percent
- **Fully serverless, $0 budget** — the entire pipeline runs on AWS free-tier services with no idle compute cost

## Architecture

Data flows NWS + Open-Meteo → MongoDB → ClickHouse → Redis → Hono API → React and D3. Deployed as infrastructure as code with AWS SAM: Lambda and EventBridge handle scheduled collection and ETL, S3 archives raw data, CloudFront serves live dashboard data, SNS sends weather alerts, DynamoDB tracks sign-up counters, and IAM roles follow least privilege throughout. Data-quality checks stop an export if any city has missing history.

## Weather alerts

- **Public sign-ups** — visitors click "Get alerts", pick a city and alert types (heat, flood, wind/storm, winter, fire & air quality, tropical), and confirm by email (double opt-in)
- **Abuse and cost limits** — a Cloudflare Turnstile CAPTCHA, per-IP and daily rate limits, a 100-subscriber cap, and a monthly email budget that stops at 900 of the 1,000 free SNS emails
- **Isolated delivery** — SNS filter policies route alerts by city and category; a separate public SNS topic keeps ops emails away from subscribers; a sign-up Lambda with a public function URL stores counters in DynamoDB (always-free); email addresses are never logged
- **Less alert fatigue** — NWS re-issues alerts under new IDs, so the same heat warning was once emailed 7 times. Emails now go out only when an alert is New, Upgraded, or Extended: replaying 17 real alert emails, the new rule sends 5 with no real update lost

## Demo

![US map of all 53 tracked cities drilling down into a single city's live forecast replay, showing how each model's prediction changed as the day got closer](/projects/us-weather-pipeline-demo.gif)

## Engineering practices (with Claude Code)

- Directed Claude Code to build 3 versions of each of 5 key features and kept the best each time — the winning approach added Redis caching, cutting p95 latency 12x
- Security reviews across those rounds surfaced and fixed SQL/NoSQL-injection and overly broad IAM permissions before they shipped
- Resilient collection: if an NWS grid point fails, the collector retries with backoff, keeps the last good forecast, updates the other cities, and warns only when the same city fails twice in a row; scheduled Lambdas retry throttled runs instead of dropping them
- 300+ automated tests running in CI
