import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ data }) => {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 p-4">
                {
                    data.data.map(anime =>
                    (<>
                        <Link href={`/${anime.mal_id}`} key={anime.mal_id}>
                            <Image src={anime.images.webp.image_url} alt={anime.title} width={600} height={600} className="object-cover w-full max-h-96 rounded-t-md" />
                            <p>{anime.title}</p>
                        </Link>
                    </>))
                }
            </div>

        </>
    )
}
export default AnimeList