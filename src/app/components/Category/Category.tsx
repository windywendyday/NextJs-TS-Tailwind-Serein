import {FC} from "react";
import {Menu} from "antd";
import {SubMenuType} from "antd/es/menu/interface";

const items:SubMenuType[] = [
    {
        key: '1',
        label: 'Top',
        children: [
            {
                key: '7',
                label: 'T-Shirt',
            },
            {
                key: '8',
                label: 'Hoodie',
            },
            {
                key: '9',
                label: 'Knitted',
            },
            {
                key: '10',
                label: 'Long Sleeve',
            },
            {
                key: '11',
                label: 'Short Sleeve',
            },
        ],
    },
    {
        key: '2',
        label: 'Bottom',
        children: [
            {
                key: '12',
                label: 'Mini Skirt',
            },
            {
                key: '13',
                label: 'Jeans',
            },
            {
                key: '14',
                label: 'Shorts',
            },
            {
                key: '15',
                label: 'Cargos',
            },
        ],
    },
    {
        key: '3',
        label: 'Jacket',
        children: [],
    },
    {
        key: '4',
        label: 'Dress',
        children: [],
    },
    {
        key: '5',
        label: 'Swimwear',
        children: [],
    },
    {
        key: '6',
        label: 'Accessories',
        children: [
            {
                key: '16',
                label: 'Necklace',
            },
            {
                key: '10',
                label: 'Bag',
            },
            {
                key: '10',
                label: 'Shoes',
            },
            {
                key: '10',
                label: 'Hair Accessories',
            },
        ],
    },
]

const Category:FC = () => {
    return (
        <div>
            <Menu
                itemType="SubMenuType"
                items={items}
                mode="horizontal"
            />
        </div>
    )
}

export default Category