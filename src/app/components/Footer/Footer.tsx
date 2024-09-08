function Footer(){
    return (
        <div className="flex justify-center">
            {/*关于我们*/}
            <div className="flex-1 mx-2">
                <div>关于我们</div>
                <div>——————————————</div>
                <div className="ml-2 mr-4">Serein 的每一款作品，都是自然、艺术与生活美学的结合。我们的设计风格低调优雅，注重舒适与品质，用柔和的色调与流畅的剪裁勾勒出女性自信而不失温柔的美。无论是日常穿搭还是特殊场合，Serein 都致力于赋予每一位穿戴者宁静而从容的力量。</div>
            </div>
            {/*社交媒体*/}
            <div className="flex-1 mx-2">
                <div>社交媒体</div>
                <div>——————————————</div>
                <div className="flex">
                    <div className="mx-4">Instagram</div>
                    <div className="mx-4">Xiaohongshu</div>
                    <div className="mx-4">Tiktok</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;