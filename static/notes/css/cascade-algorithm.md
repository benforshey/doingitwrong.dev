---
title: The Cascade Algorithm
description: Notes on the CSS Cascade Algorithm.
tags: [CSS, Algorithm]

publishedOn: '2023-11-27'
updatedOn: null
isDraft: false
---

# The Cascade Algorithm

## Four Stages of the Cascade Algorithm

The cascade algorithm is split into 4 distinct stages.

1. Position and order of appearance: the order of which your CSS rules appear
1. Specificity: an algorithm which determines which CSS selector has the strongest match
1. Origin: the order of when CSS appears and where it comes from, whether that is a browser style, CSS from a browser extension, or your authored CSS
1. Importance: some CSS rules are weighted more heavily than others, especially with the !important rule type

## Order of Specificity for Origins

1. User agent base styles. These are the styles that your browser applies to HTML elements by default.
1. Local user styles. These can come from the operating system level, such as a base font size, or a preference of reduced motion. They can also come from browser extensions, such as a browser extension that allows a user to write their own custom CSS for a webpage.
1. Authored CSS. The CSS that you author.
1. Authored !important. Any !important that you add to your authored declarations.
1. Local user styles !important. Any !important that come from the operating system level, or browser extension level CSS.
1. User agent !important. Any !important that are defined in the default CSS, provided by the browser.

## Order of Importance

1. normal rule type, such as font-size, background or color
1. animation rule type
1. !important rule type (following the same order as origin)
1. transition rule type
