'use client'

import { useRouter } from "next/navigation"

export default function BackButton() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <button onClick={goBack} className="w-20 border cursor-pointer">
      <p>Back</p>
    </button>
  )
}
