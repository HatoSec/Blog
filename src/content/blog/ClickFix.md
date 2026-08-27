---
title: "I am not a robot. Fake CAPTCHAs and Quick Fixes."
description: "Understanding Clickfix social engineering tactic and how to identify it."
pubDate: "2025-06-11"
audience: ["teens", "young-adults", "adults", "seniors"]
tags: ["Social Engineering", "Malware", "Phishing"]
---

### Heads Up
There’s a growing social engineering tactic being used by attackers to trick users into installing malware on their computers. One of them is known as **ClickFix**, and it’s showing up in different places across the internet.

### At a Glance
ClickFix is a social engineering attack where users are tricked into running a malicious command on their own computer.

It often looks like a normal CAPTCHA verification or a “quick fix” for a problem. The user is shown a message that seems harmless and is instructed to copy and paste a command into tools like PowerShell or the Windows Run window.

That command is not safe. Once it’s run, it can install malware, steal information, or give attackers remote access to the computer.

What makes this especially dangerous is that the user is the one executing the attack, often without realizing it.

### The Threat
CAPTCHAs were originally created to stop bots from abusing websites. They ask users to prove they are human by doing simple tasks like typing distorted text, selecting images (like buses or traffic lights), or solving small puzzles.

Attackers have adapted this idea and are now using similar-looking screens and messages to trick users into running malicious commands.

ClickFix-style attacks take advantage of how familiar people are with CAPTCHA pages or “verification required” prompts. Instead of actually verifying anything, they trick users into running commands that download and install malware.

This helps attackers bypass normal security tools like email filters, antivirus software, and firewalls, because the user is the one initiating the download and execution.

These attacks can show up in different ways, such as:
- Fake CAPTCHA pages on websites (often through poisoned ads or malicious sites)
- Phishing emails that claim a file is broken or needs “repair”
- Fake documents or popups that give “instructions” to fix an issue

Even though the delivery method changes, the goal is always the same: **get the user to run a command themselves.**

### Outsmart It
The good news is that this type of attack has a very clear warning sign.

Almost all ClickFix-style scams rely on one thing: they ask you to open **PowerShell** or the **Run window** and paste a command.

That is the key red flag.

Legitimate websites, companies, and services will almost never ask you to do this.

If you ever see instructions telling you to:
- Open PowerShell  
- Press Windows + R (Run)  
- Copy and paste a command you don’t fully understand  

**STOP. This is a scam. Do not run the command.**