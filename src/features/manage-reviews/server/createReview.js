import { dbConnect } from "@/core/db/database";
import { Review } from "./reviewModel";

export async function createReview(data) {
  await dbConnect();

  const { name, handle, rating, message } = data;

  if (!name || !rating) {
    throw new Error("Nombre y calificación son obligatorios");
  }

  if (rating < 1 || rating > 5) {
    throw new Error("La calificación debe estar entre 1 y 5");
  }

  return await Review.create({
    name: name.trim(),
    handle: handle ? handle.trim().replace("@", "") : "",
    rating: parseInt(rating),
    message: message ? message.trim() : "",
    isApproved: false,
  });
}
