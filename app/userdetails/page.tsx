import React from 'react';
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <ul>
        <li>
          <Link href='/userdetails/1'>unit-1</Link>
        </li>
        <li>
          <Link href='/userdetails/2'>unit-2</Link>
        </li>
        <li>
          <Link href='/userdetails/3'>unit-3</Link>
        </li>
        <li>
          <Link href='/userdetails/test-err'>test error</Link>
        </li>
        <li>
          <Link href='/test-load'>test loader
          </Link>
        </li>
      </ul>
    </div>
  );
}
