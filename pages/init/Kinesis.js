import React, { useEffect, useLayoutEffect, useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import Header from "../../compornents/Header/header";
import Sidebar from "../../compornents/Sidebar";

const onMouseOver = e => {
    let jobImage = e.target.parentNode;
    jobImage.style.transition = ".8s";
    jobImage.style.width = "410px";
    jobImage.style.height = "450px";
}

const onMouseLeave = e => {
    let jobImage = e.target.parentNode;
    jobImage.style.transition = ".8s";
    jobImage.style.width = "350px";
    jobImage.style.height = "370px";
}

const Index = (props) => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log(num)
        document.querySelector("#__next").style.backgroundImage = `url(../../images/background/kinesisBackground.png)`

        let kinesis = document.querySelectorAll(".job__group");
        
        kinesis.forEach(data => {
            let group = document.querySelectorAll(`.${data.classList[1]} > div`);
            group.forEach((job, i) => {
                if(i == 0) {
                    job.style.transform = `translateX(170px)`;
                } else if(i == 1) {
                    job.style.transform = `translateY(170px)`;
                } else if(i % 2 != 0 && i != 1) {
                    job.style.transform = `translate(-${170 * (i - 1)}px, 170px)`;
                } else {
                    job.style.transform = `translateX(-${170 * (i - 1)}px)`;
                }
            })
        })

        let initJobGroup = document.querySelector(".init__job__group");
        let width = kinesis[0].offsetWidth;    
        
        initJobGroup.style.transition = ".5s";

        initJobGroup.style.transform = `translateX(-${width * num}px)`;
    })

    return (
        <div>
            <Head>
                <title>msg.gg</title>
                <link rel="stylesheet" href="/style/header.css" />
                <link rel="stylesheet" href="/style/init.css"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <Header></Header>
            <div className="wrap">
                <Sidebar title="init" group="kinesis" />
                <div className="init__job">
                    <div className="init__job__title">
                        <img src="../../images/init/kinesisTitle.png" alt=""/>
                    </div>
                    <div className="init__job__group d-flex">
                        <div className="job__group flex-center">
                            <div className="kinesis pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Kinesis`, query: { num: 0 } }}><div className="clickArea"></div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
