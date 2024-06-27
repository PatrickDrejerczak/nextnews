import Link from "next/link";

export default function NewsList({ news }: any) {
  return (
    <ul className="news-list">
      {news.map((news: any) => (
        <li key={news.id}>
          <Link href={`/news/${news.slug}`}>
            <img src={`/images/news/${news.image}`} alt={news.title} />
            <span>{news.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
