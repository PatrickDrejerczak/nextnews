import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const news = params.id;

  if (!news) {
    notFound();
  }

  return (
    <>
      <h1>Details</h1>
      <p>{news}</p>
    </>
  );
}
