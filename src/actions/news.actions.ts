'use server'

import { connect } from "@/lib/db";
import News from "@/models/news.model";

export async function getNews() {
    try {
        await connect();
        const news = await News.find();
        return news;
    } catch (error) {
        throw new Error("Failed to fetch news");
    }
} 