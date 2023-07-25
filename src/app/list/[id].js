import React from 'react'
import { useRouter } from 'next/router'
import Header from '../Components/Header';

export default function List() {

    const router = useRouter();
    const page = router.query.id

  return (
    <main>
        <Header />
        <p>{page}</p>
    </main>
  )
}
