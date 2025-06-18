---
layout: '@/templates/BaseProject.astro'
title: Eternal Century V2 - Minecraft Game Server Customization
description: Craft custom Java/Kotlin plugins to tweak Minecraft's core, adding features like enhanced item systems, NPC-driven trade, and automated quests/events based on UTC+8 time.
pubDate: 2021-08-01
imgSrc: 'https://cdn.oskadev.com/assets/projects/ec.png'
imgAlt: 'ec'
featured: true
technologies:
- kotlin
- postgres
---

This involves building plugins in Java/Kotlin to modify Minecraft's default behavior. It includes numerous homemade features such as an item system to enhance both PvE and PvP experiences, a GUI system for buying and selling items from NPCs, and an NPC system supporting various functions like storage, item repairing, titles, auctions, and quests. Additionally, it features simple daily and weekly quests, as well as automatic boss spawning and custom events based on specific times in UTC+8.

This project underwent production testing and successfully went live for a duration of 1-2 months, supporting approximately 20-50 concurrent online users while maintaining stability. The decision to discontinue was prompted by the extensive time required for teardown, and the impracticality of maintaining this type of server when time constraints are a limiting factor.

![logo](https://cdn.oskadev.com/assets/projects/ec-logo.jpeg)

## Key Highlights

1. Using [Exposed ORM](https://github.com/JetBrains/Exposed) and connecting with PostgreSQL.
2. Extend custom enum, json, list, minecraft serializable type to support with Exposed ORM.
3. With [Javalin](https://javalin.io/) to serve REST API for admin usage.
4. Extend [UI Library](https://github.com/ReactantDev) to provide more structural and dynamic support.
5. Integrated [Revenue Monster](https://revenuemonster.my/) to provide in-game topup features.
6. Building points, title, entity, event to customize and extend their original behaviour.
7. Understand the deep layer of the Minecraft which ProtocolLibs to handle low level packets for game ideas.

## Video Showcase 

| Info | Video |
| :-: | :-: |
| Discord Login |[![Discord Login](https://img.youtube.com/vi/TGLFg32Wwg0/1.jpg)](https://www.youtube.com/watch?v=TGLFg32Wwg0) | 
| Introduction | [![Introduction](https://img.youtube.com/vi/-teZknBAOVA/1.jpg)](https://www.youtube.com/watch?v=-teZknBAOVA)|
| Package Handling | [![Package Handling](https://img.youtube.com/vi/HtnfJVgbPs8/1.jpg)](https://www.youtube.com/watch?v=HtnfJVgbPs8) | 

## References 

1. <a href="https://github.com/Oskang09/EternalCentury" target="_blank">Github</a>
2. <a href="https://eternalcentury.blogspot.com/" target="_blank">Server Website</a>

## Sponsored

![sakura-vm](https://cdn.oskadev.com/assets/projects/ec-sponsor.png)

Servers are sponsored by [SakuraVM 櫻域虛擬主機 - Taiwan Engineering Group](https://www.sakuravm.net/). They have provided a high stability server and prevention from DDOS attack so we able to give our players to have a good gameplay experiences.