---
layout: '@/templates/BaseProject.astro'
title: JS Library - Digdata
description: A lightweight, zero-dependency utility for handling object data.
pubDate: 2022-11-01
imgSrc: '/assets/projects/digdata.png'
imgAlt: 'digdata'
technologies:
- javascript
---

This library primarily targets times before the introduction of [Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining). If your codebase supports Optional Chaining, it's advisable to use it. However, there may be instances where this library is preferred, such as when dealing with large access to a single object and aiming to enhance performance using "cursor" methods. Nonetheless, native support typically offers better performance compared to this library.

## Key Highlights

1. Almost 100% full coverage test!
2. Added ESM support.
3. Lightweight zero dependency library.
4. Work with Github CI, Github Packages.

```
PASS  ./index.test.js
  √ Should dot string notation accepted. (3ms)
  √ Should object dot string notation accepted.
  √ Should array dot string notation accepted. (1ms)
  √ Should equal symbol return object if target is array object based on condition.
  √ Should equal symbol return array if target is array based on condition.
  √ Should equal symbol return null when target not exists. (1ms)
  √ Should arrayMap symbol return specific key
  √ Should comma symbol work with arrayMap symbol return multiple keys
  √ Should pipe symbol return first truth value (1ms)
  √ Should return null if target exists.
  √ Should return null if object is falsy value.
  √ Should run invoke if function and data found. (1ms)
  √ Should skip if function not found.
  √ Should `cursor` build options object
  √ Should build cache when cursor not null
  √ Should get from cache when cursor not null and key exist (1ms)
  √ Should `withOptions` set disableTracker on options
  √ Should `setOptions` update options object.

----------|---------|----------|---------|---------|-------------------
| File       | % Stmts   | % Branch   | % Funcs   | % Lines   | Uncovered Line #s   |
| ---------- | --------- | ---------- | --------- | --------- | ------------------- |
| All files  | 100       | 95.83      | 100       | 100       |
| index.js   | 100       | 95.83      | 100       | 100       | 155,159             |
| ---------- | --------- | ---------- | --------- | --------- | ------------------- |
Test Suites: 1 passed, 1 total
Tests:       18 passed, 18 total
Snapshots:   0 total
Time:        1.562s
Ran all test suites.
```

2. Caching cursor - to provide maximum performance when dealing really big of JSON objects.
3. Invoke Symbol - to support data transformation.
4. Pipe Symbol - to support multiple data with first come first take priority.
5. ArrayMap Symbol - to extract data with filter functionality.
6. Equal Symbol - to get the data based on the input filter, array will use contains check automatically.
7. Comma Symbol - to extract multiple property from the JSON.

## References 

1. <a href="https://github.com/Oskang09/digdata" target="_blank">Github</a>
2. <a href="https://digdata.oskadev.com/" target="_blank">Documentation</a>