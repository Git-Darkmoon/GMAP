"use client"

import { News } from "@/utils/myTypes"
import Image from "next/image"
import { useState } from "react"

const NewsCard: React.FC<News> = ({ image, title, desc }) => {
  const [showMore, setShowMore] = useState<boolean>(false)

  return (
    <div className="bg-myOrange-50 self-stretch text-slate-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="w-full rounded-t-lg"
        priority
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-slate-600 ">
          {showMore ? desc : `${desc.slice(0, 130)}...`}

          <button
            className="ml-1 text-myOrange-500 py-1 hover:underline hover:underline-offset-2"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </p>
      </div>
    </div>
  )
}

export default NewsCard
