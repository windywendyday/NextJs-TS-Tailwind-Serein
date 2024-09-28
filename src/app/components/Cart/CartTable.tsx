import React, {FC, useEffect, useState} from "react";
import {Table, TableColumnsType, TableProps} from "antd";
import {cartItem} from "@/types";
import CartFooter from "./CartFooter";

const data:Array<cartItem> = [
    {
        key: '1',
        title: '111',
        imgUrl: '1234',
        tag: ['现货'],
        price: 150,
    },
    {
        key: '2',
        title: '111',
        imgUrl: '1234',
        tag: ['现货'],
        price: 100,
    },
    {
        key: '3',
        title: '111',
        imgUrl: '1234',
        tag: ['现货'],
        price: 120,
    },
    {
        key: '4',
        title: '111',
        imgUrl: '1234',
        tag: ['现货'],
        price: 180,
    },
]

// const rowSelection:TableRowSelection<cartItem> = {
//
// }

const columns:TableColumnsType<cartItem> = [
    {
        title: '图片',
        dataIndex: 'imgUrl',
    },
    {
        title: '商品标题',
        dataIndex: 'title',
    },
    {
        title: '数量',
        dataIndex: 'tag',
    },
    {
        title: '价格',
        dataIndex: 'price',
    },
]

const CartTable:FC = () => {
    const [curTotalCount, setCurTotalCount] = useState<number>(0)
    const [curTotalPrice, setCurTotalPrice] = useState<number>(0)
    // rowSelection object indicates the need for row selection
    const rowSelection: TableProps<cartItem>['rowSelection'] = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: cartItem[]) => {
            // 修改数量、合计的结果
            setCurTotalCount(100)
            setCurTotalPrice(100)
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: cartItem) => ({
            name: record.title,
        }),
    };
    useEffect(() => {

    }, [])
    return (
        <div>
            <Table
                size="large"
                rowSelection={rowSelection}
                columns={columns}
                bordered
                dataSource={data}
                footer={() => <CartFooter curTotalCount={curTotalCount} curTotalPrice={curTotalPrice}/>}
                pagination={false}
            />
        </div>
    )
}

export default CartTable;