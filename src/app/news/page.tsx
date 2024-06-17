import Link from "next/link";

export default function News() {
  return (
    <div id="news">
      <h1>News</h1>
      <Link href="/first-news">First News</Link>
      <Link href="/second-news">Second News</Link>
      <Link href="/third-news">Third News</Link>
    </div>
  );
}
