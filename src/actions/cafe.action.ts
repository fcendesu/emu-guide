'use server'

import { connect } from "@/lib/db"; // connect to the database
import Cafe from "@/models/cafe.model"; // cafe model

export async function getCafes() { 
    try {
        await connect();
        const cafes = await Cafe.find();
        return cafes;
    } catch (error) {
        throw new Error("Failed to fetch cafes");
    }
}


