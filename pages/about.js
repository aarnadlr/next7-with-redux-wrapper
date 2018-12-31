import React from 'react'
import '../styles/style.scss';
import Link from 'next/link';

export default function about() {
  return (
    <div>
      This is the About page!

      <Link prefetch href={'/'}>
        <a><h3>Back to home</h3></a>
      </Link>
    </div>
  )
}
