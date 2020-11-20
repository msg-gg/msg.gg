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

const a = () => {
    alert("asd");
}


const Index = (props) => {
    useEffect(() => {
        document.querySelector("#__next").style.backgroundImage = `url(../../images/background/adventurer.png)`

        let adventurer = document.querySelectorAll(".job__group");
        
        adventurer.forEach(data => {
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
        let flag = false;
        let startX = 0;
        let translateX = 0;
        initJobGroup.addEventListener("mousedown", (e) => {
            flag = true;
            startX = e.clientX;
        })

        window.addEventListener("mousemove", (e) => {
            if(!flag) return;
            // let x =  -  > 0 ? 0 : e.clientX - startX < initJobGroup.width ? initJobGroup.width : e.clientX - startX;
            if(startX > e.clientX)
                translateX -= 40;
            else 
                translateX += 40;
            initJobGroup.style.transform = `translateX(${translateX}px)`
        })
        
        window.addEventListener("mouseup", () => {
            flag = false;
        })
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
                <Sidebar title="init" />
                <div className="init__job">
                    <div className="init__job__title">
                        <img src="../../images/init/adventurer.png" alt=""/>
                    </div>
                    <div className="init__job__group d-flex">
                        <div className="job__group warrior flex-center">
                            <div className="hero" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 0 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="paladine" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 1 } }}><div className="clickArea"></div></Link>

                            </div>
                            <div className="darknight" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 2 } }}><div className="clickArea"></div></Link>
                            </div>
                        </div>
                        <div className="job__group magician flex-center">
                            <div className="arkmagetc" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 3 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="arkmagefp" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 4 } }}><div className="clickArea"></div></Link>

                            </div>
                            <div className="bishop" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 5 } }}><div className="clickArea"></div></Link>
                            </div>
                        </div>
                        <div className="job__group bowman flex-center">
                            <div className="hero" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 0 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="paladine" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 1 } }}><div className="clickArea"></div></Link>

                            </div>
                            <div className="darknight" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 2 } }}><div className="clickArea"></div></Link>
                            </div>
                        </div>
                        <div className="job__group thief flex-center">
                            <div className="hero" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 0 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="paladine" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 1 } }}><div className="clickArea"></div></Link>

                            </div>
                            <div className="darknight" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 2 } }}><div className="clickArea"></div></Link>
                            </div>
                        </div>
                        <div className="job__group pirate flex-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;