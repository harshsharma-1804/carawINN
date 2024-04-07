import {Router} from 'express'
import {addVehicle, getAllVehicles, getVehicle } from '../controllers/vehicle.contoller.js'

const router = Router()

router.route("/addvehicle").post(addVehicle)
router.route("/getvehicle/:id").get(getVehicle)
router.route("/getallvehicles").get(getAllVehicles)

export default router