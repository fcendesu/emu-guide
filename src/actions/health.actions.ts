'use server'

import { connect } from "@/lib/db";
import Health from "@/models/health.model";

export async function getHealths() {
    try {
        await connect();
        const healths = await Health.find();
        return healths;
    } catch (error) {
        throw new Error("Failed to fetch health services");
    }
} 