'use server'

import { connect } from "@/lib/db";
import Club from "@/models/club.model";

export async function getClubs() {
    try {
        await connect();
        const clubs = await Club.find();
        return clubs;
    } catch (error) {
        throw new Error("Failed to fetch clubs");
    }
} 