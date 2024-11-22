'use server'

import { connect } from "@/lib/db";
import Faculty from "@/models/faculty.model";

export async function getFaculties() {
    try {
        await connect();
        const faculties = await Faculty.find();
        return faculties;
    } catch (error) {
        throw new Error("Failed to fetch faculties");
    }
} 