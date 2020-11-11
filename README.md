# [ibraheem.com](https://www.ibraheem.com)

![Codewars](https://www.codewars.com/users/ibraheem4/badges/micro)

Hi, I'm **Ibraheem**.  This is my personal blog, since 2007 (whoa!).

Email : hi@ibraheem.com

## Prerequisites

This site is built using the following.

- [Jekyll](https://jekyllrb.com)
- [GitHub Pages](https://pages.github.com/)
- [Semantic UI](http://www.semantic-ui.com)
- [Facebook Comments](https://developers.facebook.com/products/social-plugins/comments/)
- [Google Tag Manager](https://www.google.com/analytics/tag-manager/)
- [Google Analytics](https://www.google.com/analytics/)

## Installation

### Install bundles
- `bundle install && bundle update jekyll`

### Install node modules
- `yarn install && yarn update`

### Generating locally-trusted certificates using [`mkcert`](https://github.com/FiloSottile/mkcert)

```
# Use the script
sh ./scripts/generate-ssl-certificate.sh

# Generate the keys manually
brew install mkcert
mkcert -install
mkdir -p ssl
mkcert -cert-file ssl/server.crt -key-file ssl/server.key ibraheem.com "*.ibraheem.com" localhost 127.0.0.1 ::1
```

## Running / Development

Launch the Jekyll server specifying the certificate and key locations (e.g. `--ssl-cert`, `--ssl-key`).

    bundle exec jekyll build --watch
    bundle exec jekyll serve --ssl-key ssl/server.key --ssl-cert ssl/server.crt --port 4004 --watch

> Visit your app at [https://localhost:4004](https://localhost:4004).
