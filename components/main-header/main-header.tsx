import Link from "next/link";

const MainHeader = () => {
  return (
    <>
      <header>
        <nav>
          <Link href="./">NextLevel News</Link>
          <Link href="/news">Browse News</Link>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
