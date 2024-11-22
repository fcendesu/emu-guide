'use server'

import { connect } from "@/lib/db";
import Dormitory from "@/models/dormitory.model";

export async function getDormitories() {
    try {
        await connect();
        const dormitories = await Dormitory.find();
        return dormitories;
    } catch (error) {
        throw new Error("Failed to fetch dormitories");
    }
} 