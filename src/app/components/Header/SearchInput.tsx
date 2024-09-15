'use client';

import {FC} from "react";
import {Button, Input} from "@headlessui/react"
import {useState} from "react";

const SearchInput: FC = () => {
    const [searchContent, setSearchContent] = useState<string>('')
    const handleSearchInputChange = () => {
        console.log(searchContent)
        setSearchContent('')
        // 将搜索内容发送给后端
    }
    // 处理回车键提交
    const keydown = (event: any) => {
        if(event.keyCode === 13){
            handleSearchInputChange()
        }
    }

    return (
        <div className="flex items-center">
            <Input type="text" placeholder="搜索" value={searchContent} onChange={(e) => setSearchContent(e.target.value)} onKeyDown={(e) => keydown(e)}/>
            <Button
                className="rounded bg-sky-600 py-[0.2rem] px-[0.2rem] ml-2 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
                onClick={handleSearchInputChange}>
                搜索
            </Button>
        </div>
    )
}

export default SearchInput;