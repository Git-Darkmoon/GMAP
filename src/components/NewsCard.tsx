import { News } from "@/utils/myTypes"
import Image from "next/image"

const NewsCard: React.FC<News> = ({ image, title, desc }) => {
  return (
    <div className="bg-slate-900 text-slate-100 rounded-lg shadow-md hover:shadow-lg">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="w-full h-auto rounded-t-lg"
        priority
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-300">{desc}</p>
      </div>
    </div>
  )
}

export default NewsCard
