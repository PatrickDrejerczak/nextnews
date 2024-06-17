import { notFound } from "next/navigation";

export default function DetailsPage({ params }: any) {
  const news = params.mealSlug;

  if (!news) {
    notFound();
  }

  return (
    <div id="details">
      <h1>Details</h1>
      <p>{news}</p>
    </div>
  );
}
