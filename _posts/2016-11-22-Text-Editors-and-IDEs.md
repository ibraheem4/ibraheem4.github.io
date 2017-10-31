---
layout: post
title: Text Editors and IDEs
category: blog
tags:
  - text
  - tips
modified: 2017-10-31T00:00:00-07:00
comments: true
---

I'll show you some of the differentiating features of some of the popular text editors being used by web developers
these days: [Sublime Text](http://www.sublimetext.com), [Atom](http://www.atom.io), and [Visual Studio Code](https://code.visualstudio.com/).

### Sublime Text

#### Spell Check

There are a couple of ways to enable spell check in Sublime.

* Toggle the option `View > Spell Check`
* Add the `"spell_check": true` setting to `Preferences.sublime-settings`
* Use the `F6` shortcut

#### Syncing Sublime Text with Dropbox

    $ mkdir ~/Dropbox/Shared/Sublime
    $ mv ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User ~/Dropbox/Shared/Sublime
    $ ln -s ~/Dropbox/Shared/Sublime/User ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User

> [Sublime syncing reference](https://packagecontrol.io/docs/syncing)

#### `Preferences.sublime-settings` - User

```
    {
        "auto_complete_delay": 35,
        "binary_file_patterns":
        [
            "*.gzip",
            "*.tbz2",
            "build/*",
            "dist/*",
            "logs/*",
            "public/*",
            "generated/*",
            "node_modules/*",
            "bower_components/*",
            "tmp/*",
            "i18n/*"
        ],
        "bold_folder_labels": true,
        "caret_style": "phase",
        "color_scheme": "Packages/User/Color Highlighter/themes/Monokai (SL).tmTheme",
        "fade_fold_buttons": false,
        "font_size": 14,
        "highlight_line": true,
        "highlight_modified_tabs": true,
        "ignored_packages":
        [
            "Markdown",
            "Vintage"
        ],
        "ignored_words":
        [
            "dropdown",
            "javascript",
            "jquery",
            "popup",
            "screenshot"
        ],
        "line_padding_bottom": 1,
        "line_padding_top": 1,
        "rulers":
        [
            80
        ],
        "save_on_focus_lost": true,
        "spell_check": true,
        "tab_size": 2,
        "theme": "Soda Dark 3.sublime-theme",
        "translate_tabs_to_spaces": true,
        "trim_trailing_white_space_on_save": true
    }
```

### Atom

#### Auto Indenting

To enable auto indenting in Atom, add to the Atom Keymap at `Atom > Keymap...`

```
'atom-text-editor':
  'ctrl-cmd-]': 'editor:auto-indent'
```

Then use `Ctrl + Cmd + ]` to auto indent.

#### Syncing Atom with Dropbox

To sync text editor settings across machines, it's possible to move the app settings directory to [Dropbox](https://db.tt/93T3Pm7SXx) then symbolically link to where the settings file used to be.

    $ mkdir ~/Dropbox/Shared/Atom
    $ mv ~/.atom ~/Dropbox/Shared/Atom
    $ ln -s ~/Dropbox/Shared/Atom ~/.atom

> [Atom syncing reference](https://discuss.atom.io/t/syncing-settings-packages-between-machines/1385)

### Visual Studio Code

#### Syncing Visual Studio Code with Dropbox

    $ mkdir ~/Dropbox/Shared/Code/User
    $ mkdir ~/Dropbox/Shared/Code/.vscode/extensions
    $ mv ~/Library/Application\ Support/Code/User ~/Dropbox/Shared/Code
    $ ln -s ~/Dropbox/Shared/Code/User ~/Library/Application\ Support/Code/User
    $ mv ~/.vscode/extensions ~/Dropbox/Shared/Code/.vscode
    $ ln -s ~/Dropbox/Shared/Code/.vscode/extensions ~/.vscode/extensions

> [Visual Studio Code syncing blog post](https://tommcfarlin.com/sharing-visual-studio-code-settings/)

#### `settings.json` - User

```
    {
        "workbench.iconTheme": "vscode-icons",
        "atomKeymap.promptV3Features": true,
        "editor.multiCursorModifier": "ctrlCmd",
        "editor.formatOnPaste": true,
        "editor.tabSize": 2,
        "editor.fontSize": 14,
        "files.autoSave": "onFocusChange",
        "search.exclude": {
            "**/build": true,
            "**/generated": true,
            "**/dist": true,
            "**/public": true,
            "**/.public": true,
            "**/tmp": true,
            "**/logs": true,
            "**/node_modules": true,
            "**/bower_components": true,
            "**/i18n": true
        },
        "files.exclude": {
            "**/.git": true,
            "**/.svn": true,
            "**/.hg": true,
            "**/CVS": true,
            "**/.DS_Store": true,
            "**/._.DS_Store": true,
            "**/build": true,
            "**/generated": true,
            "**/dist": true,
            "**/public": true,
            "**/.public": true,
            "**/target": true,
            "**/tmp": true,
            "**/logs": true,
            "**/node_modules": true,
            "**/bower_components": true,
            "**/i18n": true,
            "**/.eyeglass*": true,
            "**/.gradle": true
        },
        "workbench.startupEditor": "newUntitledFile"
    }
```