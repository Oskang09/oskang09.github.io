---
layout: '@/templates/BaseProject.astro'
title: Chativate
description: A modern omni channel chat messaging platform 
pubDate: 2023-03-01
imgSrc: 'https://cdn.oskadev.com/assets/projects/chativate/logo.png'
imgAlt: 'logo'
technologies:
- go
- mongodb
- kubernetes
- alicloud
---

A modern omni channel chat messaging platform which integrated with WhatsApp, Messenger, Instagram and Email at the first phase of development including the self-built widget to support custom integration.

This project been fully worked together with my best partner in the team which is [Li Ho](https://www.linkedin.com/in/liho/) who handling for the frontend development!

As of 2024/06/11: This product is still not launched yet.

## Key Architectures

1. Adapter design on payment & message channel integration which isolate from the business logic.
2. Custom SSE together with KubeMQ to support clustering mode.
3. Microservices architecture with gRPC protobuf.
4. Event-driven handler to support post processing.
5. Control quota, resources together with [permission manager library](https://github.com/Oskang09/gopm)

## Displays

![widget](/assets/projects/chativate/widget.png)

![inquiry](/assets/projects/chativate/inquiry.png)


## References

1. <a href="https://chativate.com/" target="_blank"> Product Landing</a>