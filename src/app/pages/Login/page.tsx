'use client';
import {FC, useState} from "react";
import AdminInfo from "@/components/Admin/AdminInfo";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Liner from "@/components/Admin/Liner";
import BannerImage from "../../../../public/banner.png";
import Image from "next/image";
import {loginAndSignup} from "@/api/user";

const Page:FC = () => {
    const [curType, setCurType] = useState<string>('login')
    const getCurType = (val:string) => {
        setCurType(val)
    }
    async function handleInfoSubmit(email: string, password: string) {
        console.log(email, password)
        try {
            const res = await loginAndSignup(email, password);
            console.log('res:', res);
            return res
        }catch (e:any){
            console.error("Error during API call:", e.toString());
            return null;
        }
    }

    return (
        <div className="bg-mildBlue h-dvh">
            <Header></Header>
            <div className="flex justify-center flex-col items-center flex-wrap">
                <div className="my-6">
                    {
                        curType === 'login'
                        ? '登录Serein，享受会员福利'
                        : '新会员注册'
                    }
                </div>
                <Image src={BannerImage} alt="banner" width={180} height={100} />
                <AdminInfo onClick={handleInfoSubmit} curType={curType}></AdminInfo>
                <Liner getType={getCurType} curType={curType}></Liner>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Page;