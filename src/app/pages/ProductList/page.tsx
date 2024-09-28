import {FC} from "react";
import Header from "@/components/Header/Header";
import {SpuItem} from "@/types";
import Category from "@/components/Category/Category";

const spuList:Array<SpuItem> = [
    {
        spuId: '1',
        spuName: 'Colette Boat Neck Sweater',
        spuUrl: '111',
        spuImage: '111',
        isSoldOut: false,
    },
    {
        spuId: '2',
        spuName: 'Colette Boat Neck Sweater',
        spuUrl: '111',
        spuImage: '111',
        isSoldOut: false,
    },
    {
        spuId: '3',
        spuName: 'Colette Boat Neck Sweater',
        spuUrl: '111',
        spuImage: '111',
        isSoldOut: false,
    },
]

const page:FC = () => {
    return (
        <div className="bg-mildBlue h-dvh">
            <Header />
            {/*导航*/}
            <Category />
            <div className="grid grid-cols-4">
                {
                    spuList.map(e => {
                        return (
                            <div key={e.spuId}>{e.spuName}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default page;