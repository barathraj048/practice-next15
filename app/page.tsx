import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>I Think Im Back!!!!</h1>
      <Link href='/userdetails'>
        <button className="px-4 py-2 bg-white text-black rounded-xl">
          User Details
        </button>
      </Link>

    </div>
  );
}
