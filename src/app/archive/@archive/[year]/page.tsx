import NewsList from "../../../../../components/news-list/news-list";
import { getNewsForYear } from "../../../../../lib/news";

export default function FilteredNewsPage({
  params,
}: {
  params: { year: string };
}) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);
  return <NewsList news={news} />;
}
