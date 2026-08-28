---
title: "POP Inventory Management System"
slug: "pop-inventory"
summary: "An internal dashboard built for FPT Telecom's Southern Infrastructure team to visualize telecom station (POP) inventory, incidents, and device health instead of pulling raw data through a Telegram bot."
date: "2026-08-28"
tags: ["React", "Next.js", "Express", "Node.js", "MongoDB", "Highcharts", "ApexCharts", "Data Visualization"]
featured: true
order: 3
coverImage: "/projects/pop-inventory.webp"
reportUrlEn: "/reports/pop-inventory-report-en.pdf"
reportUrlVn: "/reports/pop-inventory-report-vn.pdf"
reportNote: "The Vietnamese report is the original; the English version is a translation and has some formatting issues."
---

A full-stack infrastructure dashboard built during my internship at FPT Telecom's Southern Infrastructure Development and Management Center (INF MN). Before this project, engineers had to pull POP (telecom station) status, incident counts, and offline-customer numbers through a Telegram chatbot as raw, unformatted data — slow, hard to compare over time, and impossible to visualize. This app replaced that workflow with a proper web dashboard.

This was a company project built on internal infrastructure data, so there's no public repo or live demo here — see the full graduation internship report (linked above, in English or Vietnamese) for the complete technology evaluation, database design, and use-case specs behind it. The screenshots below are pulled directly from that report.

## Features

- **Overview Dashboard** — region-wide stats for the Southern Region: active customer trends, infrastructure utilization rate, a Vietnam-map view of infrastructure distribution by province, and incident/offline-customer statistics filterable by Week/Month/Quarter/Half-Year/Year
- **Branch Dashboard** — the same statistics scoped to an individual branch, plus drill-down device and switch inventory lists
- **System Engineering Dashboard** — device counts by type/function/model, INF infrastructure error tracking, device health-check statistics by severity, and incident-handling KPIs (average resolution time, support time)
- **Drilldown charts** — two-level Highcharts drilldowns that expand an incident-type column into its detailed error breakdown
- **Flexible time filtering** — nearly every chart supports Week/Month/Quarter/Half-Year/Year comparisons against trend lines and rolling averages

## Architecture

Data recorded from POPs/POP+ devices is stored in MongoDB. An Express (Node.js) backend exposes it through a REST API, using MongoDB's Aggregation framework for the grouping/summing that the statistics views need. The frontend is a Next.js (React) app that fetches from those APIs and renders everything with Highcharts and ApexCharts.

I evaluated Oracle, Microsoft SQL Server, and MongoDB for the database layer, and Python/Flask vs. Express/Node.js for the backend, before settling on MongoDB + Express for their flexibility with frequently-changing device/incident schemas and lower operating cost. On the frontend, I compared React (Next.js), Angular, and Vue, and picked Next.js for its automatic routing/bundling and larger ecosystem.

## Screenshots

![Login screen](/projects/pop-inventory-login.webp)

![Branch-level dashboard with infrastructure KPIs and incident trend charts](/projects/pop-inventory-branch.webp)

![System Engineering dashboard tracking device counts and infrastructure faults](/projects/pop-inventory-ktht.webp)

![Incident and offline-customer statistics with trend lines and rolling averages](/projects/pop-inventory-charts.webp)

## Outcome

The app was handed off to the System Engineering team's Software group for testing and put into real use. Feedback after rollout was positive: the interface was rated simple and easy to use, the visualizations replaced what used to be manual, repeated reporting work across Week/Month/Quarter/Half-Year/Year, and the team has since planned further feature work on top of it.
