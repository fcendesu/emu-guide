'use server'

import { connect } from "@/lib/db";
import Restaurant from "@/models/restaurant.model";

export async function getRestaurants() {
    try {
        await connect();
        const restaurants = await Restaurant.find();
        return restaurants;
    } catch (error) {
        throw new Error("Failed to fetch restaurants");
    }
} 