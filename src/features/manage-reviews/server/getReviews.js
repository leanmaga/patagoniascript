import { dbConnect } from "@/core/db/database";
import { Review } from "./reviewModel";

export async function getReviews() {
  await dbConnect();
  return await Review.find({ isApproved: true })
    .sort({ createdAt: -1 })
    .limit(20);
}
