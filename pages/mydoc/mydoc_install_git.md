---
title: Installing Git
tags: [installation]
keywords: installing
last_updated: Mar 17, 2022
summary: "This page lists instructions on installing and configuring Git."
sidebar: mydoc_sidebar
permalink: mydoc_install_git.html
folder: mydoc
---

## Downloading Git

You may access the download page for Git [here](https://git-scm.com/).

## Installing Git

Run the installer. The default options are usually okay, so you may want to just spam the next button.

## Configure Git

Git needs to be configured with your name and email in order to make commits. Open up a terminal prompt, and run the following commands:

To set your name:
`git config --global user.name "INSERT NAME BETWEEN QUOTES"`

To set your email:
`git config --global user.email "INSERT EMAIL BETWEEN QUOTES"`

{% include note.html content="The email config should be the same as one of your GitHub emails. This is so GitHub can recognize which account is pushing a commit and be able to link back to that account." %}

{% include links.html %}