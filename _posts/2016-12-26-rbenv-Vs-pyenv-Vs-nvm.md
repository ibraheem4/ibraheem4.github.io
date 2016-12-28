---
layout: 	post
title: 		rbenv vs pyenv vs NVM
category: 	blog
tags:
- ruby
- python
- version management
modified:   2016-12-26T00:00:00-07:00
comments: 	true
---
If you're working on multiple web projects, it is a good practice to use Version Managers to maintain consistency amongst and between different code bases.

In Ruby, for example, many developers manage their Ruby versions using using tools like [rbenv](https://github.com/rbenv/rbenv) and [RVM](https://rvm.io/).

I wanted to do a similar setup using Python and ended up settling on [pyenv](https://github.com/yyuu/pyenv).  Using pyenv, I was able to download specific versions of Python 2/3 and set both to be available globally.

Node has a similar tool, called [NVM](https://github.com/creationix/nvm) which has much of the same functionality as it's counterparts.

**If you had previously installed Python / Ruby / Node, you will need to remove the existing installations (excluding System installations, e.g. Python) and/or set the managed versions before the user-installed versions in your `$PATH`.**

pyenv
---

### Install pyenv with pyenv-virtualenv & pyenv-virtualenvwrapper
```
brew install pyenv pyenv-virtualenv pyenv-virtualenvwrapper
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi' >> ~/.bashrc
echo 'if which pyenv-virtualenv-init > /dev/null; then eval "$(pyenv virtualenv-init -)"; fi' >> ~/.bashrc
pyenv install 2.7.13
pyenv global 2.7.13
pip install -U pip virtualenv virtualenvwrapper
pyenv whence virtualenv virtualenvwrapper.sh
```

### Install virtualenv, virtualenvwrapper on Python 3
```
pyenv install 3.4.5
pyenv global 3.4.5
pip3 install -U pip virtualenv virtualenvwrapper
pyenv whence virtualenv virtualenvwrapper.sh
```

### Make both Python 2 and Python 3 available globally
```
pyenv global 2.7.13 3.4.5
```

rbenv
---

### Install rbenv
```
brew install rbenv
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bashrc
echo 'test -d "$HOME/.rbenv/" && PATH="$HOME/.rbenv/bin:$PATH" && PATH="$HOME/.rbenv/shims:$PATH"' >> ~/.bashrc
rbenv install 2.3.1
rbenv install 2.2.5
rbenv global 2.3.1
rbenv versions
```

NVM
---

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
nvm install v6.9.2
nvm ls
```