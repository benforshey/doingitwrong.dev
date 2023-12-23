---
title: Useful Git Commands
description: A collection of useful git commands and settings.
tags: [git, Reference]

publishedOn: '2021-12-10'
updatedOn: null
isDraft: false
---

# Git Commands that I Find Useful

Many of these are initially sourced from Stack Overflow or great articles that have titles like "5 Must-Know Git Commands" then modified to fit my workflow. Some are actually put together by [reading the docs](https://git-scm.com/).

## Delete Branches that have been Remove from Remote

For this to delete branches, local must know that remote has removed branches (which `git branch -v` lists as `[gone]`). One way to accomplish this is to configure your fetch to always prune.

```bash
git branch -v | awk '/ \[gone\] /{ print $1 }' | xargs git branch -d
```

## Always Prune on Fetch

From the [docs](https://git-scm.com/docs/git-fetch#Documentation/git-fetch.txt---prune), "...remove any remote-tracking references that no longer exist on the remote." `git pull` and `git fetch` would both have the following setting applied, since `git pull` is (in my mind) like running `git fetch` and `git merge`.

```bash
git config --global fetch.prune true
```

Viewing the global git config (`cat ~/.gitconfig`) should now show

```bash
[fetch]
	prune = true
```

## Always Rebase on Pull

```bash
git config --global pull.rebase true
```

Viewing the global git config (`cat ~/.gitconfig`) should now show

```bash
[pull]
	rebase = true
```

## List Subtrees

```bash
git log | awk '/git-subtree-dir: / { print $2 }' | uniq
```

As an alias (global `.gitconfig`):

```bash
[alias]
	subtrees = !git log | awk '/git-subtree-dir: / { print $2 }' | uniq
```

## Delete Orphaned Local Branches

Prerequisite to this your local branches must have references removed to non-existent remote branches.

```bash
git branch -v | awk '/ \[gone\] /{ print $1 }' | xargs git branch -d
```

As an alias (global `.gitconfig`):

```bash
[alias]
	prune-delete = !git branch -v | awk '/ \\[gone\\] /{ print  }' | xargs git branch -d
```
