'use server'

import { connect } from "@/lib/db";
import FitnessCenter from "@/models/fitness-center.model";

export async function getFitnessCenters() {
    try {
        await connect();
        const fitnessCenters = await FitnessCenter.find();
        return fitnessCenters;
    } catch (error) {
        throw new Error("Failed to fetch fitness centers");
    }
} 