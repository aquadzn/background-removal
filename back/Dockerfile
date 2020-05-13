FROM python:3.7-slim-stretch

ENV PORT 8080
RUN apt-get -y update && apt-get -y install build-essential

WORKDIR /usr/src/app
COPY . .

RUN pip install --no-cache-dir -r requirements.txt

RUN apt-get clean && apt-get -y autoremove && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 app:app