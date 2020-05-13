#!/bin/bash

# abort on errors
set -e

cd front

# lint
npm run lint

# build
npm run build

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git add -A

git commit -m "🚀 $(curl -s http://whatthecommit.com/index.txt)"

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push

cd -