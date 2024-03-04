---
layout: '@/templates/BaseProject.astro'
title: TotoScraper 
description: A dynamic and powerful scraper for scraping all toto data from list of websites.
pubDate: 2021-12-01
imgSrc: '/assets/projects/toto-scraper.png'
imgAlt: 'toto-scraper'
technologies:
- go
---

TotoScraper is a Go utility designed to scrape toto data from various existing websites like 4dking, magnum official, and myfreepost. It can generate charts, filter data based on incoming files obtained from web scraping, and offers features such as Digit Frequency, Pair Frequency, and Number Equality analysis. Additionally, it includes a private key and public key check mechanism for internal use only before accessing the application.

> Feel free to send me a private message if you're interested in this personal private project.

## Scrap Target

1. 4dking
2. Magnum Official
3. myfreepost

## Functionality

1. Scrap toto data to excel view
2. Submit toto data to generate Digit/Pair Frequency Report
3. Digit Frequency - How much the full number appearing at the reports like "2041" if appear twice will show as twice.
4. Pair Frequency - How much the pair number appearing at the reports like "2020", will be 20 appeared twice.

![toto-scraper-chart](/assets/projects/toto-scraper-chart.png)