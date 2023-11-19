import HomeHeader from "@/components/HomeHeader"
import NewsCard from "@/components/NewsCard"
import { News } from "@/utils/myTypes"
import { newsData } from "@/utils/newsData"

function NewsPage() {
  return (
    <main className="lg:pt-16 lg:pl-64">
      <HomeHeader
        path={"Noticias"}
        title={"Noticias de las maratones de programacion"}
      />

      {/* News Rendering */}

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
        {newsData.map((notice: News) => {
          return <NewsCard key={notice.id} {...notice} />
        })}
      </section>
    </main>
  )
}
export default NewsPage
