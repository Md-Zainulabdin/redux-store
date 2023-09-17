import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        const res = await fetch(`https://fakestoreapi.com/products`);
        const products = await res.json();
        console.log(products.length);
        return NextResponse.json({
            products,
            message: "Products get succesfully"
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: "Failed to get products."
        }, { status: 400 })
    }
}