'use server'

import { connect } from "@/lib/db";
import Stationery from "@/models/stationery.model";

export async function getStationeries() {
    try {
        await connect();
        const stationeries = await Stationery.find();
        return stationeries;
    } catch (error) {
        throw new Error("Failed to fetch stationeries");
    }
} 