---
title: "US Weather Forecast Pipeline"
slug: "us-weather-pipeline"
summary: "An end-to-end data platform collecting forecasts from 5 weather models, scoring them against what actually happened, and visualizing 3 years of weather for 53 US cities — deployed serverless on AWS at $0."
date: "2026-10-01"
tags: ["Node.js", "Hono", "TypeScript", "React", "D3", "MongoDB", "ClickHouse", "Redis", "AWS Lambda", "SAM", "Docker"]
featured: true
order: 0
repoUrl: "https://github.com/dangkhoa241/us-weather-pipeline"
liveUrl: "https://us-weather-pipeline.vercel.app"
---

An end-to-end data pipeline and dashboard that collects forecasts from the National Weather Service and 4 Open-Meteo-sourced models, scores them against what actually happened, and explains 3 years of weather for 53 US cities.

## Features

- **Multi-model forecast scoring** — pulls forecasts from NWS and 4 weather models and measures accuracy against observed outcomes; ECMWF came out most accurate at 2.1°F average error 1 day ahead
- **Large-scale ingestion** — 1M+ hourly observations and 1.8M forecast snapshots across 53 US cities, loaded idempotently with incremental updates and data-quality checks
- **Interactive dashboard** — a D3 visualization with drill-down from a US map, to city, to month, to day
- **Fully serverless, $0 budget** — the entire pipeline runs on AWS free-tier services with no idle compute cost

## Architecture

Data flows NWS + Open-Meteo → MongoDB → ClickHouse → Redis → Hono API → React. Deployed as infrastructure as code with AWS SAM/CloudFormation: Lambda + EventBridge handle scheduled collection and ETL, S3 archives raw data, CloudFront serves live dashboard data, SNS sends alerts, and IAM roles follow least privilege throughout.

## Engineering practices (with Claude Code)

- Directed Claude Code through 4 rounds of comparing 3 parallel implementation builds — the winning approach added Redis caching, cutting p95 latency 12x
- Security reviews across those rounds surfaced and fixed SQL/NoSQL-injection and overly broad IAM permissions before they shipped
- 107 tests running in CI
