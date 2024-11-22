'use server'

import { connect } from "@/lib/db";
import SaleItem from "@/models/sale-item.model";

export async function getSaleItems() {
    try {
        await connect();
        const saleItems = await SaleItem.find();
        return saleItems;
    } catch (error) {
        throw new Error("Failed to fetch sale items");
    }
} 