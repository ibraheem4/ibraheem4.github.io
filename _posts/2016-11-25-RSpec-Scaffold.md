---
layout: 	post
title: 		RSpec Scaffold
category: 	blog
tags:
- rspec
- ruby
modified:   2016-11-29T00:00:00-07:00
comments: 	true
---
At some point you'll probably need to create new `Classes` or `Modules` in Ruby.  You might even string these `Objects` together into an [MVC](https://en.wikipedia.org/wiki/Model–view–controller).

And if you're using a [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) workflow, you would most likely be using a testing library like [RSpec](http://rspec.info/).

I wrote an executable Ruby script to scaffold Ruby objects and their related RSpec tests.

This script could be made accessible via a [symbolic link](https://kb.iu.edu/d/abbe), for example `scaffold`:

`ln -s /path/to/rspec_scaffold.rb /usr/local/bin/scaffold`

{% gist ibraheem4/cefd27ae3fbe369e0762f60ed29543be %}
