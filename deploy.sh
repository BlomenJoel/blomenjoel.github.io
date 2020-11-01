#!/usr/bin/env sh
set -e
yarn run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/BlomenJoel/blomenjoel.github.io.git master:gh-pages
cd -