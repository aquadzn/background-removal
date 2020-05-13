#!/bin/bash

set -e

# Comment if not on Debian / Ubuntu
if ! dpkg -s "google-cloud-sdk" >/dev/null 2>&1; then
    echo -e "\n🚨 \e[31mPlease install google-cloud-sdk (https://cloud.google.com/sdk/install)\n\e[0m"
    exit
fi

echo -e '\n📝 \e[34mPlease enter your project idea (ex: my-project-204828) :\e[0m '
read -p '>  ' project_id

echo -e '\n🏷️  \e[34mPlease enter the tag you want for your image (ex: gpt2) :\e[0m '
read -p '>  ' tag

echo -e "\n\e[33mWarning!\nThis can take some time because of the size of image.\e[0m\n"

# gcloud builds submit "./back" --tag "gcr.io/$project_id/$tag"

# gcloud beta run deploy "$tag" \
#     --image "gcr.io/$project_id/$tag" \
#     --platform=managed \
#     --allow-unauthenticated \
#     --region=us-east1 \
#     --concurrency=1 \
#     --memory=2Gi

echo -e '\n🤔 \e[34mDo yo want to delete images on GCR after building Cloud Run services ? (y/n) :\e[0m '
read -p '>  ' question

# [ "$question" != "${question#[Yy]}" ] && gcloud container images delete --force-delete-tags "gcr.io/$project_id/$tag"

echo -e "\n✅ \e[32mDone!\e[0m\nURLs of Cloud Run services:\n\n$(gcloud beta run services list --platform=managed |grep -Po 'https.?://\S+')"
