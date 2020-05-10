# U2Net API

[U^2-Net](https://github.com/NathanUA/U-2-Net) as a service for background removal. Using FastAPI & Pytorch.


## Examples

**Using small model on CPU (better results with larger model)**

Original | Removed
--- | ---
![emily.jpg](examples/emily.jpg) | ![emily_res.png](examples/emily_res.png)
![saul.png](examples/saul.png) | ![saul_res.png](examples/saul_res.png)
![godfather.jpg](examples/godfather.jpg) | ![godfather_res.png](examples/godfather_res.png)
![bike.jpg](examples/bike.jpg) | ![bike_res.png](examples/bike_res.png)


## Installation

* Clone the repo
* Install dependencies with `pip install -r requirements.txt`

* Optional: Download the bigger model [u2net.pth (173.6 MB)](https://drive.google.com/file/d/1ao1ovG1Qtx4b7EoskHXmi2E9rp5CHLcZ/view?usp=sharing) and set `model_name = "u2net"` inside [detect.py](detect.py)


## Usage

Run server with `python main.py`

```bash
curl -X POST -F "file=@test_image.jpg" "http://127.0.0.1:8000/predict" -o result.png
```

## Credits

https://github.com/NathanUA/U-2-Net

https://github.com/cyrildiagne/u2net-http
