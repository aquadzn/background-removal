import io
import time
import logging

import numpy as np
from PIL import Image

import uvicorn
from fastapi import FastAPI, File
from fastapi.responses import StreamingResponse

import detect


app = FastAPI()
logging.basicConfig(level=logging.INFO)


@app.get("/")
def ping():
    return "U^2-Net!"


@app.post("/predict")
def predict(file: bytes = File(...)):

    img = np.array(Image.open(io.BytesIO(file)))

    start = time.time()
    result = detect.predict(img)
    result = result.resize((img.shape[1], img.shape[0]), resample=Image.BILINEAR)

    logging.info(f"Predicted in {time.time() - start:.2f} sec")

    buffer = io.BytesIO()
    result.save(buffer, "PNG")
    buffer.seek(0)

    return StreamingResponse(buffer, media_type="image/png")


if __name__ == "__main__":
    logging.info("Model ready to serve")
    uvicorn.run(app, host="127.0.0.1", port=8000)
