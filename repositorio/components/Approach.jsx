"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { approachItems } from "@/data/items";
import clsx from "clsx";
import { Button } from "./ui/Moving-border";

export function ThreeDCardDemo() {

    return (
        <section className="flex gap-10 flex-col md:items-center md:justify-center md:gap-10 object-center py-4">

            <div className='flex items-center justify-center flex-col lg:w-[60vw] md:w-[50vw] sm:w-[85vw] text-center z-10 mb-16 mt-28'>
                <h1 className='lg:text-5xl md:text-5xl text-5xl leading-[60px] font-bold'>My <span className='text-purple-300'>approach</span>
                </h1>
            </div>

            <div className=" flex flex-col gap-10 md:flex-row md:items-center md:justify-center object-center py-4">
                {
                    approachItems.map((item) => (
                        <CardContainer key={item.id} className={"bg-slate-950 border border-slate-550 rounded-2xl p-4 h-[350px] relative md:h-[550px] md:w-[400px]"}>
                            <div className="bg-slate-950 w-full h-full absolute z-10 rounded-2xl flex justify-center items-center p-10 hover:opacity-0 transition-opacity duration-400">
                                <Button className={item.buttonTextClassName}>
                                    {item.buttonText}
                                </Button>
                            </div>
                            <CardItem>
                                <CardBody className={"mt-40"}>
                                    <div className={clsx("flex justify-center items-center flex-col gap-10", item.className)}>
                                        <div className="flex flex-col gap-4 text-center text-wrap">
                                            <h1 className="text-4xl font-bold  mt-4">{item.title}</h1>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </CardItem>
                        </CardContainer>
                    ))
                }
            </div>
        </section>
    );
}
