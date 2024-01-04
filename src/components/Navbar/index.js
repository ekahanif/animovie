import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-purple-900 sticky top-0 text-white">
            <Link href="/">Animovie</Link>
            <InputSearch/>
        </div>
    )
}
export default Navbar 