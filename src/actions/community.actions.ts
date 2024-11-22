'use server'

import { connect } from "@/lib/db";
import Community from "@/models/community.model";

export async function getCommunities() {
    try {
        await connect();
        const communities = await Community.find();
        return communities;
    } catch (error) {
        throw new Error("Failed to fetch communities");
    }
} 