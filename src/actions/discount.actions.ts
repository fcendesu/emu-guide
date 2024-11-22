'use server'

import { connect } from "@/lib/db";
import Discount from "@/models/discount.model";

export async function getDiscounts() {
    try {
        await connect();
        const discounts = await Discount.find();
        return discounts;
    } catch (error) {
        throw new Error("Failed to fetch discounts");
    }
} 