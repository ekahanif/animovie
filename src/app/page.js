import Image from 'next/image'
import AnimeList from '../components/AnimeList'

const Page = async () => {
  const getAnime = await fetch('https://api.jikan.moe/v4/top/anime?limit=18')
  const topAnime = await getAnime.json()
  return (
    <>
      <AnimeList data={topAnime} />
    </>
  )
}
export default Page