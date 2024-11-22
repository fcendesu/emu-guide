'use server'

import { connect } from "@/lib/db";
import Events from "@/models/events.model";

export async function getEvents() {
    try {
        await connect();
        const events = await Events.find();
        return events;
    } catch (error) {
        throw new Error("Failed to fetch events");
    }
} 