---
title: Git Submodules
description: Notes on the CSS Cascade Algorithm.
tags: [Git, Submodules]

publishedOn: '2023-11-27'
updatedOn: null
isDraft: false
---

# Git Submodules

Oft-used, never understood.

## References

- [Git SCM](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
- `man git-submodule`

## Add a Submodule

`git submodule add <URL>`

This creates a `.gitmodules` file that shows the mapping between your project and its submodules.

## Clone with Submodules

1. clone your project as normal
1. `git submodule init` to initialize from `.gitmodules`
1. `git submodule update` to fetch data from the commit referenced at the other end of the `.gitmodules` repo URL
