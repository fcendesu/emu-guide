'use server'

import { connect } from "@/lib/db";
import Store from "@/models/store.model";

export async function getStores() {
    try {
        await connect();
        const stores = await Store.find();
        return stores;
    } catch (error) {
        throw new Error("Failed to fetch stores");
    }
} 