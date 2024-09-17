'use client';
import {FC, useRef, useState} from "react";
import {Button} from "@headlessui/react";
import {Form, FormInstance, Input} from "antd";

const AdminInfo:FC<any> = ({onClick, curType = 'login'}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ensurePassword, setEnsurePassword] = useState('')
    const formRef = useRef<FormInstance>(null)

    function submit(){
        // 验证
        formRef.current?.validateFields().then((values) => {
            onClick(email, password)
        }).catch(errorInfo => {
            setEnsurePassword('')
            console.log(errorInfo)
        })
    }
    return (
        <div className="w-[40rem] my-6 flex flex-col items-center">
            <Form ref={formRef}>
                <Form.Item
                    className="mt-4"
                    name="email"
                    rules={[{ required: true }]}
                >
                    <Input
                        className="w-96 rounded-[2rem]"
                        placeholder="email"
                        allowClear
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    className="mt-4"
                    name="password"
                    rules={[{ required: true }]}
                >
                    <Input
                        className="w-96 rounded-[2rem]"
                        placeholder="密码"
                        allowClear
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>
                {
                    curType === 'login'
                        ? null
                        : <Form.Item
                            className="mt-4"
                            name="ensurePassword"
                            rules={[{ required: true }]}
                        >
                            <Input
                                className="w-96 rounded-[2rem]"
                                placeholder="确认密码"
                                allowClear
                                onChange={(e) => setEnsurePassword(e.target.value)}
                            />
                        </Form.Item>
                }

            </Form>
            <Button
                onClick={submit}
                className="rounded w-40 bg-sky-600 my-4 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
            >
                {curType === 'login' ? '登录' : '注册'}
            </Button>
        </div>
    )
}

export default AdminInfo;