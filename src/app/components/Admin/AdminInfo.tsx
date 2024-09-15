'use client';
import {FC, useState} from "react";
import {Button, Input} from "@headlessui/react";

const AdminInfo:FC<any> = ({onClick}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function submit(){
        onClick(email, password)
    }
    return (
        <div className="my-8">
            <form>
                <div>
                    <p>邮箱</p>
                    <Input
                        name="email"
                        value={email}
                        className="w-96 rounded"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <p>密码</p>
                    <Input
                        name="password"
                        value={password}
                        className="w-96 rounded"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </form>
            <Button
                onClick={submit}
                className="rounded w-40 bg-sky-600 my-4 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
            >
                登录或注册
            </Button>
        </div>
    )
}

export default AdminInfo;