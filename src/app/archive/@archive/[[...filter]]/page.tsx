import Link from "next/link";
import NewsList from "../../../../../components/news-list/news-list";
import { getAvailableNewsYears, getNewsForYear } from "../../../../../lib/news";

export default function FilteredNewsPage({
  params,
}: {
  params: { filter: string };
}) {
  const links = getAvailableNewsYears();
  const newsYear = params.filter;
  const filter = getNewsForYear(newsYear);
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <NewsList news={filter} />
    </>
  );
}
