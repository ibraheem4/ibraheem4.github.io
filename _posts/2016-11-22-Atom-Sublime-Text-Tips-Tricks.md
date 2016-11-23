---
layout: 	post
title: 		Atom, Sublime Text Tips
category: 	blog
tags:
- text
- tips
modified:   2016-11-20T00:00:00-07:00
comments: 	true
---
By and large, the most popular text editors being used by developers these days are [Sublime Text](sublimetext.com) and [Atom](atom.io).  

Both of these applications are easy to use out-of-the-box, but I thought I would share a few of my preferred configurations.

You can find plenty of additional documentation on the respective websites.

Sublime Text 3
---
### Spell Check

Toggle the option at `View` > `Spell Check`

Atom
---
### Auto Indenting

Add the following block:

```
'atom-text-editor':
  'ctrl-cmd-]': 'editor:auto-indent'
```

To the config file found at `Atom` > `Keymap...`

You can now use `ctrl + cmd + ]` to auto indent.
