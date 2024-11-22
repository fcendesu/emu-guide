'use server'

import { connect } from "@/lib/db";
import PrivateClass from "@/models/private-class.model";

export async function getPrivateClasses() {
    try {
        await connect();
        const privateClasses = await PrivateClass.find();
        return privateClasses;
    } catch (error) {
        throw new Error("Failed to fetch private classes");
    }
} 