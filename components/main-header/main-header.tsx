import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <header>
        <nav>
          <div>
            <Link href="./">NextLevel News</Link>
          </div>
          <div>
            <Link href="/news">Browse News</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
