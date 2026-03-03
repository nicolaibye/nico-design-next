import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Hellow world!</h1>
        <p>Hello, Next.js!</p>
        <Link href="/about">About</Link>
      </div>
    </main>
  );
}
