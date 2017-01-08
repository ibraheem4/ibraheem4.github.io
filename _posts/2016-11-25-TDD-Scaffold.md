---
layout: post
title: TDD Scaffold
category: blog
tags:
  - rspec
  - ruby
modified: 2016-12-08T00:00:00-07:00
comments: true
---
At some point you'll probably need to create new `Classes` or `Modules` in Ruby. You might even string these `Objects` together into an [MVC](https://en.wikipedia.org/wiki/Model–view–controller).

And if you're using a [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) workflow, you would most likely be using a testing suite like the wonderful [RSpec](http://rspec.info/).

I originally wrote an executable Ruby script to scaffold Ruby objects and their related RSpec tests. This project has now been published as a [Ruby Gem](https://rubygems.org/gems/tdd_scaffold). And of course, the code is available on [GitHub](https://github.com/ibraheem4/tdd_scaffold).

```
gem install tdd_scaffold
```