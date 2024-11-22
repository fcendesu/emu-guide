'use server'

import { connect } from "@/lib/db";
import Guide from "@/models/guide.model";

export async function getGuides() {
    try {
        await connect();
        const guides = await Guide.find();
        return guides;
    } catch (error) {
        throw new Error("Failed to fetch guides");
    }
} 