import { Router } from "express";
import { Controller } from "../controllers/controllers.js";

const controller = new Controller()
export const router = Router()

router.get('/task', controller.getAll)
router.post('/task', controller.create)
router.put('/task/:id', controller.editOne)
router.delete('/task/:id', controller.delete)