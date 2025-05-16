---
layout: '@/templates/BaseProject.astro'
title: Geliver & VSCode Extension - Geliver UI
description: Geliver UI support for vscode editor, natively support with .proto files.
pubDate: 2022-02-01
imgSrc: 'https://cdn.oskadev.com/assets/projects/geliver.png'
imgAlt: 'geliver'
technologies:
- typescript
---

This extension was developed to streamline communication with gRPC when dealing with microservices. During earlier times, there were limited tools available for debugging gRPC, which prompted the creation of this extension. This tool has been actively used by our internal team because it accelerates testing for services directly, rather than relying on calls from the API, which previously necessitated starting multiple servers.

![geliver-grpc](/assets/projects/geliver-grpc.png)

Previously, the system relied on server-side rendering HTML with Go code to internally call gRPC services, which occasionally led to issues. However, with the introduction of Geliver, these problems have been mitigated.

![geliver-web](/assets/projects/geliver-web.png)

With the release of gRPC support by [Postman](https://www.postman.com), this extension has reached its conclusion. I believe that under Postman, the API and gRPC testing tools will continue to evolve and improve further.

## References 

1. <a href="https://github.com/Oskang09/geliver-vscode" target="_blank">Github - VSCode Extension</a>
2. <a href="https://github.com/Oskang09/geliver" target="_blank">Github - Geliver Web</a> 
3. <a href="https://www.oskadev.com/geliver/">Geliver Website</a>
4. <a href="https://marketplace.visualstudio.com/items?itemName=Oskang09.geliver" target="_blank">VSCode Marketplace</a>
  