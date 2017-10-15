---
layout: post
title: Version Management Tools
category: blog
tags:
  - ruby
  - python
  - version management
modified: 2017-10-14T00:00:00-07:00
comments: true
---

If you're working on multiple software projects, it is a good practice to use Version Management Tools to maintain consistency amongst and between different code bases.

In Ruby, for example, many developers manage their Ruby versions using using tools like [rbenv](https://github.com/rbenv/rbenv) and [RVM](https://rvm.io/).

I wanted to do a similar setup using Python and ended up settling on [pyenv](https://github.com/yyuu/pyenv). Using pyenv, I was able to download specific versions of Python 2/3 and set both to be available globally.

Node has a similar tool, called [nvm](https://github.com/creationix/nvm) which has much of the same functionality as it's counterparts.

Java, not to be outdone, has a tool called [jenv](https://github.com/gcuisinier/jenv).

**If you had previously installed Python / Ruby / Node, you will need to remove the existing installations (excluding System installations, e.g. Python) and/or set the managed versions before the user-installed versions in your `$PATH` .**

**jenv does not install JDKs**

## pyenv

#### Install and configure pyenv

    $ brew install pyenv
    $ echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
    $ echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
    $ echo 'if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi' >> ~/.bashrc

##### Test pyenv installations

    $ pyenv install --list

##### Ensure ssl extension is compiled

    $ brew uninstall openssl && brew install openssl

##### Install Python versions

    $ CFLAGS="-I$(brew --prefix openssl)/include" LDFLAGS="-L$(brew --prefix openssl)/lib" env PYTHON_CONFIGURE_OPTS="--enable-framework" pyenv install 2.7.14
    $ CFLAGS="-I$(brew --prefix openssl)/include" LDFLAGS="-L$(brew --prefix openssl)/lib" env PYTHON_CONFIGURE_OPTS="--enable-framework" pyenv install 3.6.2

##### Set pyenv versions

    # Python 2
    $ pyenv global 2.7.14
    $ pip2.7 install -U pip virtualenv virtualenvwrapper

    # Python 3
    $ pyenv global 3.6.2
    $ pip3 install -U pip virtualenv virtualenvwrapper

##### Set Python 2/3 available globally

    $ pyenv global 2.7.14 3.6.2

#### Install pyenv-virtualenv and pyenv-virtualenvwrapper as plugins

    $ git clone https://github.com/yyuu/pyenv-virtualenv.git ~/.pyenv/plugins/pyenv-virtualenv
    $ git clone https://github.com/yyuu/pyenv-virtualenvwrapper.git ~/.pyenv/plugins/pyenv-virtualenvwrapper

##### Test pyenv installations

    $ pyenv versions
    $ pyenv whence virtualenv virtualenvwrapper.sh
    $ pyenv virtualenvs

## rbenv

#### Install and configure rbenv

    $ brew install rbenv
    $ echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bashrc
    $ echo 'test -d "$HOME/.rbenv/" && PATH="$HOME/.rbenv/bin:$PATH" && PATH="$HOME/.rbenv/shims:$PATH"' >> ~/.bashrc

##### Install Ruby versions

    $ rbenv install 2.4.2
    $ rbenv install 2.3.1

##### Set rbenv versions

    $ rbenv global 2.4.2

##### Test rbenv installations

    $ rbenv versions

## nvm

#### Install and configure nvm

    $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash

##### Use system version for administering nvm

    $ nvm use system

##### Set LTS version as default

    $ nvm alias default lts/*

##### Install Node versions

    $ nvm install --lts

##### Test nvm installations

    $ nvm ls

## jenv

#### Install and configure jenv

    $ brew install jenv
    $ echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.bashrc
    $ echo 'if which jenv > /dev/null; then eval "$(jenv init -)"; fi' >> ~/.bashrc

##### Add Java versions to jenv

    $ jenv add /Library/Java/JavaVirtualMachines/jdk1.8.0_05.jdk/Contents/Home/
    $ jenv add /Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home/

##### Test jenv installations

    $ jenv versions

##### Set jenv versions

    $ jenv global 2.4.2
