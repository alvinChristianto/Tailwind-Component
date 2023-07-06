import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="text-slate-600">
        <ul>
          <li>
            <Link href="/navbar">navbar</Link>
          </li>
          <li>
            <Link href="/profile1">profile1</Link>
          </li>
          <li>
            <Link href="/card">card</Link>
          </li>
          <li>
            <Link href="/card1">card1</Link>
          </li>
        </ul>
      </div>
      <div className="border p-4 m-3 rounded-xl bg-slate-300">
        <h1 className="text-3xl font-bold text-cyan-700">Hello world!</h1>
      </div>
    </div>
  );
}
