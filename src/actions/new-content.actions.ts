'use server'

import { connect } from "@/lib/db";
import NewContent from "@/models/new-content.model";

export async function getNewContents() {
    try {
        await connect();
        const newContents = await NewContent.find();
        return newContents;
    } catch (error) {
        throw new Error("Failed to fetch new content");
    }
} 