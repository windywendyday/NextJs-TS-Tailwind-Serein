import SearchInput from "@/components/Header/SearchInput";
import Link from "next/link";
import {FC, useState} from "react";

const Header: FC = () => {

    return (
        <div className="w-full z-50 sticky top-0 h-10 border bg-blue-300">
            <div className="container mx-auto flex justify-between items-center">
                {/*搜索区域*/}
                <SearchInput/>

                {/*右侧导航*/}
                <div className="flex space-x-4">
                    <Link
                        href="/"
                        className="text-white hover:bg-gray-700 p-2 rounded transition duration-300"
                    >
                        首页
                    </Link>
                    <Link
                        href="/pages/Cart"
                        className="text-white hover:bg-gray-700 p-2 rounded transition duration-300"
                    >
                        购物车
                    </Link>
                    <Link
                        href="/pages/Login"
                        className="text-white hover:bg-gray-700 p-2 rounded transition duration-300"
                    >
                        登录注册
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;