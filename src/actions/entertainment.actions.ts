'use server'

import { connect } from "@/lib/db";
import Entertainment from "@/models/entertainment.model";

export async function getEntertainments() {
    try {
        await connect();
        const entertainments = await Entertainment.find();
        return entertainments;
    } catch (error) {
        throw new Error("Failed to fetch entertainments");
    }
} 