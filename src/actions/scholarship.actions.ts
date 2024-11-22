'use server'

import { connect } from "@/lib/db";
import Scholarship from "@/models/scholarship.model";

export async function getScholarships() {
    try {
        await connect();
        const scholarships = await Scholarship.find();
        return scholarships;
    } catch (error) {
        throw new Error("Failed to fetch scholarships");
    }
} 