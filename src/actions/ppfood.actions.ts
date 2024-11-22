'use server'

import { connect } from "@/lib/db";
import PPFood from "@/models/ppfood.model";

export async function getPPFoods() {
    try {
        await connect();
        const ppfoods = await PPFood.find();
        return ppfoods;
    } catch (error) {
        throw new Error("Failed to fetch PP foods");
    }
} 