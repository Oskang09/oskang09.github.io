---
layout: '@/templates/BaseProject.astro'
title: Eternal Century - Minecraft Game Server Customization
description: Craft custom Java/Kotlin plugins to tweak Minecraft's core, adding features like enhanced item systems, NPC-driven trade, and automated quests/events based on UTC+8 time.
pubDate: 2017-12-01
imgSrc: 'https://cdn.oskadev.com/assets/projects/ec.png'
imgAlt: 'ec'
technologies:
- java
- mysql
---

This involves building plugins in Java/Kotlin to modify Minecraft's default behavior. It includes numerous homemade features such as an item system to enhance both PvE and PvP experiences, a GUI system for buying and selling items from NPCs, and an NPC system supporting various functions like storage, item repairing, titles, auctions, and quests. Additionally, it features simple daily and weekly quests, as well as automatic boss spawning and custom events based on specific times in UTC+8.

![logo](https://cdn.oskadev.com/assets/projects/ec-logo.jpeg)

## Key Highlights

1. Using [Hibernate ORM](https://hibernate.org/orm/) and connecting with MySQL.
2. Apply abstraction class for every entity to provide highly customization which focusing on RPG gameplay elements.
3. Apply top-level listener to listen all existing damage events and transform to RPG-related events.
4. Extend the vault system from the original minecraft built-in ( Economy, Chat, Permission ).
5. Understand about java class loader & reflection, to provide dynamically load from jar to achieve hot-reload without closing down the server.
6. Extend the player data to serializable data for preventing data loss. 

## References 

1. <a href="https://github.com/Oskang09/OskaRPG" target="_blank">Github</a>
2. <a href="https://eternalcentury.blogspot.com/" target="_blank">Server Website</a>

## Sponsored

![sakura-vm](https://cdn.oskadev.com/assets/projects/ec-sponsor.png)

Servers are sponsored by [SakuraVM 櫻域虛擬主機 - Taiwan Engineering Group](https://www.sakuravm.net/). They have provided a high stability server and prevention from DDOS attack so we able to give our players to have a good gameplay experiences.