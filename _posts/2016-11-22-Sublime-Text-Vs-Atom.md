---
layout: post
title: Sublime Text vs Atom
category: blog
tags:
- text
- tips
modified: 2017-01-07T00:00:00-07:00
comments: true
---
By and large, the most popular text editors being used by developers
these days are [Sublime Text](sublimetext.com) and [Atom](atom.io).

Both of these applications are easy to use out-of-the-box, but I thought
I would share a few of my preferred configurations.

Sublime Text
---

### Spell Check

Toggle the option `View > Spell Check`

Or use the `"spell_check": true` setting in `Preferences.sublime-settings`:

### Removing comments

1.Open the replace window in Sublime `cmd + shift + f`

2.Use regular expression search: `Find: #.*`

3.Replace with nothing: `Replace:`

Atom
---

### Auto Indenting

Add the following block to the Atom Keymap `Atom > Keymap...`

```
'atom-text-editor':
  'ctrl-cmd-]': 'editor:auto-indent'
```
You can now use `ctrl + cmd + ]` to auto indent.