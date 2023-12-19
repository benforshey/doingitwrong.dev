---
title: The Basic Tools
description: Notes from Chapter 3 of The Pragmatic Programmer.
tags: [Books, The Pragmatic Programmer]

publishedOn: '2023-11-30'
updatedOn: null
isDraft: false
---

# The Basic Tools

Invest in your own basic toolbox.

## The Power of Plain Text

Plain text is the medium of our craft and lends itself well to storing knowledge. You don't need an application to interpret a binary format&mdash;it's immediately human-parsable, human-readable, and human-understandable. Plain text can be structured (HTML, Markdown, JSON, YAML), which can help with contextually parsing the meaning of the text.

- many useful tools have been built to leverage the advantages text, like `diff`, `grep`, etc.
- plays well with the Unix philosophy

### Section Challenges

- [ ] Design a small address book database (name, phone number, and so on) using a straightforward binary representation in your language of choice. Do this before reading the rest of this challenge.
  - Translate that format into a plain-text format using XML or JSON.
  - For each version, add a new, variable-length field called directions in which you might enter directions to each person's house.
  - What issues come up regarding versioning and extensibility? Which form was easier to modify? What about converting existing data?

## Shell Games

GUI interfaces are good, but WYSIWYG and WYSIAYG (what you see is _all_ you get). Take time to configure your shell environment, because it's a powerful tool.

- change your color themes
- configure your prompt: there's a lot of useful information (`cwd`, git status info, etc)
- set up aliases and shell functions, like `dcu` expanding into `docker compose up`
- make sure your command completion is working: it saves _so much_ time

### Section Challenges

- [ ] Are there things that you're currently doing manually in a GUI? Do you ever pass instructions to colleagues that involve a number of individual “click this button”, “select this item” steps? Could these be automated?
- [ ] Whenever you move to a new environment, make a point of finding out what shells are available. See if you can bring your current shell with you.
- [ ] Investigate alternatives to your current shell. If you come across a problem your shell can't address, see if an alternative shell would cope better.

## Power Editing

Work at gaining skill in manipulating text efficiently by achieving editor fluency. What does "fluent" mean? How much of the following could you accomplish without using a mouse / trackpad?

- When editing text, move and make selections by character, word, line, and paragraph.
- When editing code, move by various syntactic units (matching delimiters, functions, modules, etc.).
- Re-indent code following changes.
- Comment and uncomment blocks of code with a single command.
- Undo and redo changes.
- Split the editor window into multiple panels, and navigate between them.
- Navigate to a particular line number.
- Sort selected lines.
- Search for both strings and regular expressions, and repeat previous searches.
- Temporarily create multiple cursors based on a selection or on a pattern match, and edit the text at each in parallel.
- Display compilation errors in the current project.

Fluency is something you move towards, not something you arrive at (nobody knows the whole of their text editor). If you find yourself doing something repetitive, see if you can find a better way through your editor. Repeat that new skill a lot so that you can ingrain the more efficient way into your development workflow. When you find editor limitations, see if a plugin can help. Learning to write plugins for your editor can also be a great solution&mdash;if you needed that feature, other people probably will, too!

### Section Challenges

- [ ] No more autorepeat.

  Everyone does it: you need to delete the last word you typed, so you press down on backspace and wait for autorepeat to kick in. In fact, we bet that your brain has done this so much that you can judge pretty much exactly when to release the key.

  So turn off autorepeat, and instead learn the key sequences to move, select, and delete by characters, words, lines, and blocks.

- [ ] This one is going to hurt.

  Lose the mouse/trackpad. For one whole week, edit using just the keyboard. You'll discover a bunch of stuff that you can't do without pointing and clicking, so now's the time to learn. Keep notes (we recommend going old-school and using pencil and paper) of the key sequences you learn.

  You'll take a productivity hit for a few days. But, as you learn to do stuff without moving your hands away from the home position, you'll find that your editing becomes faster and more fluent than it ever was in the past.

- [ ] Look for integrations. While writing this chapter, Dave wondered if he could preview the final layout (a PDF file) in an editor buffer. One download later, the layout is sitting alongside the original text, all in the editor. Keep a list of things you'd like to bring into your editor, then look for them.

- [ ] Somewhat more ambitiously, if you can't find a plugin or extension that does what you want, write one. Andy is fond of making custom, local file-based Wiki plugins for his favorite editors. If you can't find it, build it!

## Version Control

In short, always use it! A helpful thought experiment is to imagine your computer breaking&mdash;how long would it take you to get your environment back up and running? Now how about if you stored your dotfiles in a git repository?

Version control can also be the heart of a good DevOps plan. Did it break? Roll it back.

- [ ] What version control systems have you used, and do you have any preferences for one over the other?
- [ ] Do you have a preferred git strategy? I.e., Trunk-Based, Git Flow, Trunkless, etc.
- [ ] Have you heard of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)?

### Section Challenges

- [ ] Knowing you can roll back to any previous state using the VCS is one thing, but can you actually do it? Do you know the commands to do it properly? Learn them now, not when disaster strikes and you're under pressure.

- [ ] Spend some time thinking about recovering your own laptop environment in case of a disaster. What would you need to recover? Many of the things you need are just text files. If they're not in a VCS (hosted off your laptop), find a way to add them. Then think about the other stuff: installed applications, system configuration, and so on. How can you express all that stuff in text files so it, too, can be saved?

  An interesting experiment, once you've made some progress, is to find an old computer you no longer use and see if your new system can be used to set it up.

- [ ] Consciously explore the features of your current VCS and hosting provider that you're not using. If your team isn't using feature branches, experiment with introducing them. The same with pull/merge requests. Continuous integration. Build pipelines. Even continuous deployment. Look into the team communication tools, too: wikis, Kanban boards, and the like.

  You don't have to use any of it. But you do need to know what it does so you can make that decision.

- [ ] Use version control for non-project things, too.

## Debugging

Separate debugging from blame, and it's just problem solving. Fix the problem, not the blame. Consider using your compiler's strictest warnings so that you're not working on a problem that it could have found for you.

- Don't panic.
- Yes, it can happen (even though you don't know how yet).
- Gather all relevant data.
- You may need to interview the user who reported the bug to gather more relevant data.
- Brutally test boundary conditions and realistic end-user conditions.

### Strategies

- Make the bug reproducible.
- Create a failing test before fixing code, or you'll end up back here.
- Read the error message!
- If you have a bad result (not an application crash), a debugger can help you trace the value.
- Jotting notes (your expectations, what's happening now) during the process can help you from covering ground already crossed.
- If a particular dataset causes a bug, reproduce it locally. Binary chop (binary search) the dataset until you find the input causing the bug.
- Regression after release is a good time for binary chop, too.
- Binary chop / search can help in debugging when you split the problematic dataset in half and feed if back into the routine.
- `git bisect` is binary search for version control.
- Logging and tracing can help you gather historical data (as opposed to debugging, which focuses on current state).
- Rubber ducking can help you better understand you own problem, since you have to shift gears mentally and explain the problem thoroughly to another person.
- Process of elimination helps: it's probably not the OS; it's probably that code you just changed, even though you don't yet know how.

### Debugging Checklist

- [ ] Is the problem being reported a direct result of the underlying bug, or merely a symptom?
- [ ] Is the bug really in the framework you're using? Is it in the OS? Or is it in your code?
- [ ] If you explained this problem in detail to a coworker, what would you say?
- [ ] If the suspect code passes its unit tests, are the tests complete enough? What happens if you run the tests with this data?
- [ ] Do the conditions that caused this bug exist anywhere else in the system? Are there other bugs still in the larval stage, just waiting to hatch?

## Text Manipulation

`awk` and `sed` are text manipulation tools. Perl has excellent text manipulation (Ruby and Python as well). Bottom line, learn a tool that lets you do this. It's tremendously useful and lets you hack together utilities and prototypes&mdash;something that would take much longer using conventional languages.

### Section Challenges

- [ ] Exercise 11

  You're rewriting an application that used to use YAML as a configuration language. Your company has now standardized on JSON, so you have a bunch of .yaml files that need to be turned into .json. Write a script that takes a directory and converts each .yaml file into a corresponding .json file (so database.yaml becomes database.json, and the contents are valid JSON).

- [ ] Exercise 12

  Your team initially chose to use camelCase names for variables, but then changed their collective mind and switched to snake_case. Write a script that scans all the source files for camelCase names and reports on them.

- [ ] Exercise 13

  Following on from the previous exercise, add the ability to change those variable names automatically in one or more files. Remember to keep a backup of the originals in case something goes horribly, horribly wrong.

## Engineering Daybooks

The authors recommend taking daily notes in a paper notebook about meetings, what you're working on, debugging output, ideas, etc.

- More reliable than memory.
- Give you a place to store ideas not immediately relevant to your task at hand.
- Allows you to rubber duck a bit by switching gears to write.
