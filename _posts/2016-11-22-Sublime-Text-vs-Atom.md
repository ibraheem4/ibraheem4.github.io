---
layout: post
title: Sublime Text vs Atom
category: blog
tags:
  - text
  - tips
modified: 2017-03-13T00:00:00-07:00
comments: true
---

By and large, the most popular text editors being used by developers
these days are [Sublime Text](http://www.sublimetext.com) and [Atom](http://www.atom.io).

Both of these applications are easy to use out-of-the-box, but I thought
I would share a few of my preferred configurations.

### Spell Check

#### Sublime Text

There are a couple ways to enable spell check in Sublime.

* Toggle the option `View > Spell Check`
* Add the `"spell_check": true` setting to `Preferences.sublime-settings`
* Use the `F6` shortcut

### Auto Indenting

#### Atom

To enable auto indenting in Atom, add to the Atom Keymap at `Atom > Keymap...`

```
'atom-text-editor':
  'ctrl-cmd-]': 'editor:auto-indent'
```

Then use `Ctrl + Cmd + ]` to auto indent.

### Dropbox Sync

To sync text editor settings across machines, it's possible to move the app settings directory to [Dropbox](http://www.dropbox.com) then symbolically link to where the settings file used to be.

#### Atom

    $ mkdir ~/Dropbox/Atom
    $ mv ~/.atom ~/Dropbox/Atom
    $ ln -s ~/Dropbox/Atom ~/.atom

> [Atom syncing reference](https://discuss.atom.io/t/syncing-settings-packages-between-machines/1385)

#### Sublime Text

    $ mkdir ~/Dropbox/Sublime
    $ mv ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User ~/Dropbox/Sublime
    $ ln -s ~/Dropbox/Sublime/User ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User

> [Sublime syncing reference](https://packagecontrol.io/docs/syncing)