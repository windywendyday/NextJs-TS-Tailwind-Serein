import {FC, useEffect} from "react";

const CartFooter:FC<any> = ({ curTotalCount = 0, curTotalPrice = 0 }) => {
    useEffect(() => {
        console.log('curCount', curTotalCount, 'curPrice', curTotalPrice)
    }, [curTotalCount, curTotalPrice])
    return (
        <div className="text-right">
            <div>数量：</div>
            <div>合计：</div>
            <div>前往结算</div>
        </div>
    )
}
export default CartFooter;