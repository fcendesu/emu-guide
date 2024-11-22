'use server'

import { connect } from "@/lib/db";
import Market from "@/models/market.model";

export async function getMarkets() {
    try {
        await connect();
        const markets = await Market.find();
        return markets;
    } catch (error) {
        throw new Error("Failed to fetch markets");
    }
} 