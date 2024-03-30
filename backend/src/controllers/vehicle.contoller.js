import { Vehicle } from "../models/vehicle.model";

// -----------------------------------------add vehicle-----------------------------------------------------
const addVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.create(req.body);
        res.status(201).json({ vehicle });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// -----------------------------------------get all vehicles-----------------------------------------------------
const getAllVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json({ vehicles });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}