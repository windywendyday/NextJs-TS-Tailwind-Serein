'use client';
import {FC, useEffect, useState} from "react";

interface LinerProps {
    curType?: string;
    getType: Function;
}

const Liner: FC<LinerProps> = ({curType = 'login', getType}) => {
    const [type, setType] = useState(curType)

    useEffect(() => {
        // 当 type 发生变化时，通知父组件
        getType(type);
    }, [type, getType]);


    function handleTypeChange(){
        setType(type === 'login' ? 'signup' : 'login')
        getType(type)
    }

    return (
        <div className="mb-8">
            {
                type === 'login'
                    ? <div onClick={handleTypeChange}>没有账号？去注册</div>
                    : <div onClick={handleTypeChange}>已注册？去登录</div>
            }
        </div>
    )
}

export default Liner;