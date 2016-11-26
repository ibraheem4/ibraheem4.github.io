---
layout: 	post
title: 		RSpec Scaffold
category: 	blog
tags:
- rspec
- ruby
modified:   2016-11-25T00:00:00-07:00
comments: 	true
---
Often, as a Rubyist, one will need to create `Classes` or `Modules`.

And if you're using a [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) workflow, you most likely would be using [RSpec](http://rspec.info/).

I wrote a Ruby script to scaffold Ruby objects and their related RSpec tests.

This executable script could be made accessible via symbolic link:

`ln -s /path/to/rspec_scaffold.rb /usr/local/bin/scaffold`

{% gist ibraheem4/cefd27ae3fbe369e0762f60ed29543be %}
