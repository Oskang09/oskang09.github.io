---
layout: '@/templates/BaseProject.astro'
title: InvoiceHub - LHDN eInvoice
description: A central hub for eInvoice processing available with just a single API call.
pubDate: 2024-06-01
imgSrc: 'https://cdn.oskadev.com/assets/projects/invoicehub/einvoice.png'
imgAlt: 'logo'
technologies:
- mysql
- kubernetes
- csharp
---

A central system for processing eInvoices helps the team manage eInvoices using just a few standard parameters. It eliminates the need to define all the requirements and provides most of the APIs needed for various scenarios.

This project been fully worked by me and it's a closed source within the company which aim for helping internal team on the first phase once getting ready will be release to public.

As of 2024/06/11: This product is still closed source.

## Key Architectures

1. OAuth2 + JWT to support multiple audience, policy for permission control ( Admin, Merchant, OpenAPI ).
2. Handling most cases such as create eInvoice, consolidate invoice or transform consolidate invoice to eInvoice.
3. Cronjob consolidate eInvoice batch submission.
4. Creating invoice or consolidate invoice without changing the flow while remains a single API call only, no differences on different scenario!
5. Full opentelemtry support on every component like entity framework, refit (http client), quartz (job shceduler), controller, exception handler.
6. Using [UBLSharp](https://github.com/UblSharp/UblSharp) and the powerful LINQ XML syntax to handle OASIS UBL Document 2.1.

## SwaggerDoc

![discord-toolbox-music](https://cdn.oskadev.com/assets/projects/invoicehub/swagger.png)

## Referecens

1. <a href="https://revenuemonster.my/" target="_blank">Product Company</a>
2. <a href="https://www.oasis-open.org/standard/ublv2-1/" target="_blank">OASIS Open UBL Standard v2.1</a>