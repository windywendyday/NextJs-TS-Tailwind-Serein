'use client';
import {FC, useEffect, useState} from "react";
import { Image } from 'antd'
import {GalleryItems} from "@/types";
import requests from "../../../utils/requests";

const Gallery:FC = () => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    useEffect(() => {
        // 加载图片数据
        // 构建图片 URL 列表
        const urls = Array.from({ length: 6 }, (_, i) =>
            `https://49.234.181.165:5001/static/imgs/homepage/image${i + 1}.jpg`
        );

        // 模拟图片资源的请求，可以在这里进行图片加载或预加载逻辑
        setImageUrls(urls); // 更新图片 URL 列表
    }, [])

    function navigateToPages(){
        console.log('navigate')
    }

    return (
        <div className="h-fit grid grid-cols-3 grid-rows-3 gap-1 m-14 bg-amber-50">
            {
                imageUrls.map((url, index) => (
                    <div key={index} className="m-4">
                        <Image
                            src={url}
                            width={420}
                            height={550}
                            preview={false}
                            onClick={navigateToPages}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default Gallery;