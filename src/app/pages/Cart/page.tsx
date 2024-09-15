'use client';
import Header from "@/components/Header/Header";
import {Breadcrumb, Table, TableColumnsType} from "antd";
import {cartItem} from "@/types";
import {TableRowSelection} from '@/types'


function Page() {
    return (
        <div className="bg-mildBlue h-dvh">
            <Header />
            <Breadcrumb items={[{ title: 'sample' }]} />
        </div>
    )
}

export default Page;