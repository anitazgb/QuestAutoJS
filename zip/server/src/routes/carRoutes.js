import express from "express";
import {
    createCar, formatCarProps,
    getAllCar,
    resizeCarPhoto, searchCars, uploadCarPhoto,
} from "../controllers/carController.js";

export const carRouter = express.Router()


carRouter.get('/', getAllCar)
carRouter.post(
    '/create',
    uploadCarPhoto,
    resizeCarPhoto,
    formatCarProps,
    createCar
)
carRouter.get('/search/',searchCars)
