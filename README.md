# U2Net API

This is the mono-repository of [U^2-Net: Going Deeper with Nested U-Structure for Salient Object Detection](https://github.com/NathanUA/U-2-Net) as a service for background removal.

Built with VueJS, Buefy, Bulma for the [front](front/) and Flask and Pytorch for the [back](back/).

Website is coming...


## Examples

**Using small model on CPU (better results with larger model)**

Original | Removed
--- | ---
![emily.jpg](https://i.ibb.co/PzsvZtV/emily.jpg) | ![emily_res.png](https://i.ibb.co/Km2QXwx/emily-res.png)
![saul.png](https://i.ibb.co/Zg4B3WZ/saul.png) | ![saul_res.png](https://i.ibb.co/T1KTHSz/saul-res.png)
![godfather.jpg](https://i.ibb.co/T22gfLY/godfather.jpg) | ![godfather_res.png](https://i.ibb.co/Bs2MYpJ/godfather-res.png)
![bike.jpg](https://i.ibb.co/s3v6CCs/bike.jpg) | ![bike_res.png](https://i.ibb.co/bKXPmrZ/bike-res.png)


## Installation

* Clone the repo

### Back-end

* `cd back/`
* Install dependencies with `pip install -r requirements.txt`

* Optional: Download the bigger model [u2net.pth (173.6 MB)](https://drive.google.com/file/d/1ao1ovG1Qtx4b7EoskHXmi2E9rp5CHLcZ/view?usp=sharing) and set `model_name = "u2net"` inside [detect.py](detect.py)


#### Usage

Run server with `python main.py`

To download output image with curl:
```bash
curl -X POST -F "file=@test_image.jpg" "http://0.0.0.0:4000/download" -o result.png
```

To get base64 output image url (**you should not do this in terminal** 🤐):
```bash
curl -X POST -F "file=@test_image.jpg" "http://0.0.0.0:4000/predict"
```


### Front-end

* `cd front/`

#### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```


## Credits

https://github.com/NathanUA/U-2-Net

https://github.com/cyrildiagne/u2net-http
