---
layout:         post
title:          Code snippet
category:       blog
tags:
- example
modified: 		2014-09-12T00:00:00-07:00
---
{% highlight ruby linenos %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}