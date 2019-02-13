---
layout: post
title: Text Editors and IDEs
category: post
tags:
  - text
  - tips
modified: 2017-10-31T00:00:00-07:00
comments: true
---

I'll show you some of the differentiating features of some of the popular text editors being used by web developers
these days: [Sublime Text](http://www.sublimetext.com), [Atom](http://www.atom.io), and [Visual Studio Code](https://code.visualstudio.com/).

# [Sublime Text](#sublime)

## Spell Check

There are a couple of ways to enable spell check in Sublime.

* Toggle the option `View > Spell Check`
* Add the `"spell_check": true` setting to `Preferences.sublime-settings`
* Use the `F6` shortcut

## Syncing Sublime Text with Dropbox

### Mac

    mkdir ~/Dropbox/Shared/Sublime
    mv ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User ~/Dropbox/Shared/Sublime
    ln -s ~/Dropbox/Shared/Sublime/User ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User

### Linux

    rm -rf ~/.config/sublime-text-3/Packages/User
    ln -s ~/Dropbox/Shared/Sublime/User ~/.config/sublime-text-3/Packages

## Re-Syncing Sublime Text with Dropbox

### Dropbox for Mac

    rm ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User && ln -s ~/Dropbox/Shared/Sublime/User ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User

> [Sublime syncing reference](https://packagecontrol.io/docs/syncing)

# [Atom](#atom)

## Auto Indenting

To enable auto indenting in Atom, add to the Atom Keymap at `Atom > Keymap...`

```yaml
'atom-text-editor':
  'ctrl-cmd-]': 'editor:auto-indent'
```

Then use `Ctrl + Cmd + ]` to auto indent.

## Syncing Atom with Dropbox

To sync text editor settings across machines, it's possible to move the app settings directory to [Dropbox](https://db.tt/93T3Pm7SXx) then symbolically link to where the settings file used to be.

    mkdir ~/Dropbox/Shared/Atom
    mv ~/.atom ~/Dropbox/Shared/Atom
    ln -s ~/Dropbox/Shared/Atom ~/.atom

> [Atom syncing reference](https://discuss.atom.io/t/syncing-settings-packages-between-machines/1385)

# [Visual Studio Code](#vscode)

## Syncing Visual Studio Code with Dropbox

### VScode for Mac

    mkdir ~/Dropbox/Shared/Code/User
    mkdir ~/Dropbox/Shared/Code/.vscode/extensions
    mv ~/Library/Application\ Support/Code/User ~/Dropbox/Shared/Code
    ln -s ~/Dropbox/Shared/Code/User ~/Library/Application\ Support/Code/User
    mv ~/.vscode/extensions ~/Dropbox/Shared/Code/.vscode
    ln -s ~/Dropbox/Shared/Code/.vscode/extensions ~/.vscode/extensions

### VSCode for Linux

    rm -rf ~/.config/Code/User
    sudo ln -s ~/Dropbox/Shared/Code/User ~/.config/Code
    rm -rf ~/.vscode/extensions
    sudo ln -s ~/Dropbox/Shared/Code/.vscode/extensions ~/.vscode

## Re-syncing Visual Studio Code with Dropbox

### VSCode for Mac

    rm -rf /Users/ibraheem/.vscode/extensions/
    ln -s ~/Dropbox/Shared/Code/.vscode/extensions ~/.vscode/extensions
    rm -rf ~/Library/Application\ Support/Code/User
    ln -s ~/Dropbox/Shared/Code/User ~/Library/Application\ Support/Code/User

* [Visual Studio Code syncing blog post](https://tommcfarlin.com/sharing-visual-studio-code-settings/)

* LinkedIn specific: `sudo ln -s /export/apps/xtools/LNKD-visual-studio-code1/code /usr/local/bin/code`
