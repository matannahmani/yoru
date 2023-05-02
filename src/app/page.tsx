import Link from "next/link";
import LoginComponent from "./login";

function RootPage() {
  return (
    <main>
      <h1>Root Page</h1>
      <LoginComponent />
      <Link href="country/kor">Korea</Link>
      <br />
      <Link href="country/jpn">Japan</Link>
    </main>
  );
}

export default RootPage;
