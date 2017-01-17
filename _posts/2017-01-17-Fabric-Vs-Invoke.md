---
layout: post
title: Fabric Vs Invoke
category: blog
tags:
- python
modified: 2017-01-17T00:00:00-07:00
comments: true
---

## Invoke

```
from invoke import task, run

@task
def count_files(ctx):
    """ Count files in project folder """
    ctx.run('sudo find . -print0 | xargs -0 -n 1 ls -id | cut -d" " -f1 | sort -u | wc -l')
```

## Fabric
```
from fabric.api import *

@task
def count_files():
    with settings(warn_only=True):
        local('find . -print0 | xargs -0 -n 1 ls -id | cut -d" " -f1 | sort -u | wc -l')
```