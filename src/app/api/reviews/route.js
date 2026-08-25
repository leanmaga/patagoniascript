// app/api/reviews/route.js
import { NextResponse } from "next/server";
import { getReviews } from "@/features/manage-reviews/server/getReviews";
import { createReview } from "@/features/manage-reviews/server/createReview";

export async function GET() {
  try {
    const reviews = await getReviews();
    return NextResponse.json({ success: true, data: reviews });
  } catch (error) {
    console.error("Error in GET /api/reviews:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const review = await createReview(body);

    return NextResponse.json(
      {
        success: true,
        data: review,
        message: "Reseña publicada exitosamente.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error in POST /api/reviews:", error);

    // Identificamos errores de validación de Mongoose o propios
    const status =
      error.name === "ValidationError" || error.message.includes("obligatorios")
        ? 400
        : 500;

    return NextResponse.json(
      { success: false, error: error.message },
      { status },
    );
  }
}
