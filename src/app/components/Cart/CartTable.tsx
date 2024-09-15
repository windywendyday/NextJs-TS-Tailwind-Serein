import {FC} from "react";
import {Table, TableColumnsType} from "antd";
import {cartItem, TableRowSelection} from "@/types";

const data:Array<cartItem> = [
    {
        title: '111',
        imgUrl: '1234',
        tag: ['现货'],
    },
    {
        title: '111',
        imgUrl: '1234',
        tag: ['现货'],
    },
    {
        title: '111',
        imgUrl: '1234',
        tag: ['现货'],
    },
    {
        title: '111',
        imgUrl: '1234',
        tag: ['现货'],
    },
]

const rowSelection:TableRowSelection<cartItem> = {

}

const columns:TableColumnsType<cartItem> = [
    {
        title: 'Title',
        dataIndex: 'title',
    },
    {
        title: 'Img',
        dataIndex: 'imgUrl',
    },
    {
        title: 'Tag',
        dataIndex: 'tag',
    },
]

const CartTable:FC = () => {
    return (
        <Table
            size="large"
            rowSelection={rowSelection}
            columns={columns}
            bordered
            dataSource={data}
        />
    )
}

export default CartTable;