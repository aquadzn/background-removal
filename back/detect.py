import os
import errno
import time

import numpy as np
from PIL import Image
from skimage import transform

import torch
import torch.nn as nn
import torch.nn.functional as F
# from torch.autograd import Variable

import torchvision
from torchvision import transforms  # , utils

from u2net import utils, model


def load_model(model_name: str = "u2net"):

    if model_name == "u2netp":
        net = model.U2NETP(3, 1)
    elif model_name == "u2net":
        net = model.U2NET(3, 1)
    else:
        print("Choose between u2net or u2netp")
    print(f"INFO:root: Loaded {model_name}")

    try:
        if torch.cuda.is_available():
            net.load_state_dict(torch.load(model_name + ".pth"))
            net.to(torch.device("cuda"))
        else:
            net.load_state_dict(torch.load(model_name + ".pth", map_location="cpu"))
    except FileNotFoundError:
        raise FileNotFoundError(
            errno.ENOENT, os.strerror(errno.ENOENT), model_name + ".pth"
        )

    net.eval()

    return net


def norm_pred(d):
    ma = torch.max(d)
    mi = torch.min(d)
    dn = (d - mi) / (ma - mi)

    return dn


def preprocess(image):
    label_3 = np.zeros(image.shape)
    label = np.zeros(label_3.shape[0:2])

    if 3 == len(label_3.shape):
        label = label_3[:, :, 0]
    elif 2 == len(label_3.shape):
        label = label_3

    if 3 == len(image.shape) and 2 == len(label.shape):
        label = label[:, :, np.newaxis]
    elif 2 == len(image.shape) and 2 == len(label.shape):
        image = image[:, :, np.newaxis]
        label = label[:, :, np.newaxis]

    transform = transforms.Compose([utils.RescaleT(320), utils.ToTensorLab(flag=0)])
    sample = transform({"imidx": np.array([0]), "image": image, "label": label})

    return sample


def predict(net, item):

    sample = preprocess(item)

    with torch.no_grad():

        if torch.cuda.is_available():
            inputs_test = torch.cuda.FloatTensor(sample["image"].unsqueeze(0).float())
        else:
            inputs_test = torch.FloatTensor(sample["image"].unsqueeze(0).float())

        d1, d2, d3, d4, d5, d6, d7 = net(inputs_test)

        pred = d1[:, 0, :, :]
        predict = norm_pred(pred)

        predict = predict.squeeze()
        predict_np = predict.cpu().detach().numpy()
        img = Image.fromarray(predict_np * 255).convert("RGB")

        del d1, d2, d3, d4, d5, d6, d7, pred, predict, predict_np, inputs_test, sample

        return img
