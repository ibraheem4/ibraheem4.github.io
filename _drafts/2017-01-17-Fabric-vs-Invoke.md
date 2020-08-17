---
layout: post
title: Fabric vs Invoke
category: draft
tags:
  - python
modified: 2017-01-17T00:00:00-07:00
comments: true
---

Similar to Ruby's [Rake](https://github.com/ruby/rake) tool, Python has tools for running shell commands and defining/organizing tasks.  My personal favorite of the bunch is [Fabric](http://www.fabfile.org), but for those using Python 3, you can consider using [Invoke](http://www.pyinvoke.org).  These tools provide high level APIs for task execution.

# Invoke

```python
from invoke import task, run

@task
def count_files(ctx):
    """ Count files in project folder """
    ctx.run('sudo find . -print0 | xargs -0 -n 1 ls -id | cut -d" " -f1 | sort -u | wc -l')
```

# Fabric

```python
from fabric.api import *

@task
def count_files():
    with settings(warn_only=True):
        local('find . -print0 | xargs -0 -n 1 ls -id | cut -d" " -f1 | sort -u | wc -l')
```