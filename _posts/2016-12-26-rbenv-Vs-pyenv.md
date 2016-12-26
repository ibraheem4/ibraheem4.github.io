---
layout: 	post
title: 		rbenv vs pyenv
category: 	blog
tags:
- ruby
- python
- version management
modified:   2016-12-26T00:00:00-07:00
comments: 	true
---
I recently returned to programming in Python after focusing on Ruby for a while.  One of the many efficiencies of Ruby is the ability to manage versions using tools like [rbenv](https://github.com/rbenv/rbenv).

I wanted to do the same using Python and ended up trying [pyenv](https://github.com/yyuu/pyenv).  Using pyenv, I was able to download specific versions of Python 2/3 and set both to be available globally.

```
$ brew install pyenv
$ echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bash_profile
$ echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bash_profile
$ echo 'if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi' >> ~/.bash_profile
$ pyenv install 2.7.13
$ pyenv install 3.4
$ pyenv global 2.7.13 3.4.5
```

```
$ brew install rbenv
$ echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
$ echo 'test -d "$HOME/.rbenv/" && PATH="$HOME/.rbenv/bin:$PATH" && PATH="$HOME/.rbenv/shims:$PATH"' >> ~/.bash_profile
$ rbenv install 2.3.1
$ rbenv global 2.3.1
```

If you were previously using [Homebrew](brew.sh) to install Python and Ruby versions, you may need to remove the existing Homebrew installations to make way for the managed versions.

```
$ brew rm ruby
```
```
$ brew rm python python3
```