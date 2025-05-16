---
layout: '@/templates/BaseProject.astro'
title: Tapay eWallet
description: A brand new wallet to complies with Bank Negara Malaysia (BNM) requirements.
pubDate: 2023-06-01
imgSrc: 'https://cdn.oskadev.com/assets/projects/wallet/logo.png'
imgAlt: 'logo'
technologies:
- go
- mysql
- kubernetes
- alicloud
- flutter
---

A brand new wallet aim to migrate over from old wallet application to a new application due to the latest changes from BNM requirements also the RMiT to provide a secured wallet for the market.

This project been fully worked and build up from zero by me and later on having AI team to help me on the eKYC reporting, appreciate that!

As of 2024/06/11: This wallet is still not replace the old one yet.

## Key Architectures

1. Using [directus](https://directus.io/) for handling CMS works.
2. Using RSA key exchange and challenge for biometric provide top security!
3. Standard merchant module for onboarding and accepting payments.
4. Isolated detection & prevention code for the user wallet, balance and configurable based on needs.
5. Using [gorush](https://github.com/appleboy/gorush) to easier handling push notification.
6. Native WebView from Flutter for mini-apps.
7. Apps fully rely on GetX on everything like API call, state management, service binding, storage.
8. AppCenter deployment with custom script to support Flutter as well.

## Displays

![home](/assets/projects/wallet/1.png)

![wallet](/assets/projects/wallet/2.png)


## References

1. <a href="https://www.tapay.world/" target="_blank"> Product Landing</a>
2. <a href="https://www.bnm.gov.my/documents/20124/963937/Risk+Management+in+Technology+(RMiT).pdf/810b088e-6f4f-aa35-b603-1208ace33619?t=1592866162078" target="_blank">Risk Management in Technology (RMiT)</a>