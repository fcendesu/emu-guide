'use server'

import { connect } from "@/lib/db";
import Transportation from "@/models/transportation.model";

export async function getTransportations() {
    try {
        await connect();
        const transportations = await Transportation.find();
        return transportations;
    } catch (error) {
        throw new Error("Failed to fetch transportation options");
    }
} 