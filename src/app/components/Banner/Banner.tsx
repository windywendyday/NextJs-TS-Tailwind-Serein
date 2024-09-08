import Image from "next/image";
import BannerImage from "../../../public/banner.png"

function Banner(){
    return (
        <div className="w-full flex justify-center h-32 content-center pt-6">
            <Image src={BannerImage} alt="banner" width={400} height={120} />
        </div>
    )
}

export default Banner;