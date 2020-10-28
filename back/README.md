# Back-end part

### Setup

* `cd back/`
* Install dependencies with `pip install -r requirements.txt`
* Download the bigger model [u2net.pth (173.6 MB)](https://drive.google.com/file/d/1ao1ovG1Qtx4b7EoskHXmi2E9rp5CHLcZ/view?usp=sharing) - Default (Can be changed from app.py)
* Download the smaller model [u2netp.pth (4.7 MB)](https://drive.google.com/file/d/1rbSTGKAE-MTxBYHd-51l2hMOQPT_7EPy/view?usp=sharing)


### Usage

Run server with gunicorn: `gunicorn --bind 0.0.0.0:8080 --workers 1 --threads 8 app:app`


To get base64 output image url (**you should not do this in terminal** 🤐):
```bash
curl -X POST -F "file=@test_image.jpg" "http://0.0.0.0:8080/remove"
```