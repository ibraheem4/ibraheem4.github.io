#/bin/bash

# Install mkcert using Homebrew
brew list mkcert >/dev/null 2>&1 || echo "==> Installing mkcert..."  && brew install mkcert

# Generate local CA certificates
mkcert -install

# Generate named certificates in ssl/ directory
mkdir -p ssl
mkcert \
  -cert-file ssl/server.crt \
  -key-file ssl/server.key \
  ibraheem.com "*.ibraheem.com" localhost 127.0.0.1 ::1
