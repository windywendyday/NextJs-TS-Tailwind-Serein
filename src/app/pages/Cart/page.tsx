'use client';
import Header from "@/components/Header/Header";
import {Breadcrumb} from "antd";
import CartTable from "@/components/Cart/CartTable";

function Page() {
    return (
        <div className="bg-mildBlue h-dvh">
            <Header />
            <Breadcrumb items={[{ title: 'sample' }]} />
            <CartTable></CartTable>
        </div>
    )
}

export default Page;