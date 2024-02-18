"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const statsContent = {
  stats: [
    {
      number: "99.9%",
      label: "現役合格率",
    },
    {
      number: "3,912",
      label: "生徒数",
    },
    {
      number: "12.8",
      label: "偏差値上昇",
    },
  ],
  text: {
    title: "担当アドバイザーによるサポート",
    description: "学習目的や目標に合わせてあなただけの目標を設定しています。",
    img: "/assets/illustration.svg",
  },
};

const Stats = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  }, []);

  return (
    <section className="pt-20 pb-10">
      <div className="container px-4 mx-auto">
        <div
          className="lg:flex justify-between items-center space-x-0
          max-md:overflow-hidden
        "
        >
          {/* Sideコンテンツ */}
          <div className="w-full lg:w-7/12 mb-20 lg:mb-0">
            <div className="grid grid-cols-3">
              {statsContent.stats.map((item, index) => {
                index *= 100;
                return (
                  <div
                    key={index}
                    className="text-center lg:text-left"
                    data-aos="fade-up"
                    data-aos-delay={index}
                  >
                    <strong
                      className="text-green text-4xl lg:text-[52px] 
                  font-bold block leading-tight"
                    >
                      {item.number}
                    </strong>
                    <span className="text-body">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Rightコンテンツ */}
          <div className="w-full lg:w-5/12">
            <div
              className="bg-light py-10 px-7 lg:px-10 !pr-28 
              md:!pr-3 lg:!pr-40 rounded-lg relative"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <Image
                src={statsContent.text.img}
                width={100}
                height={200}
                alt="illustrationImg"
                className="absolute right-[-20px] lg:-right-3 w-52 -top-5 lg:-top-[-1px]
                  max-md:w-36 max-md:top-16"
              />
              <h3 className="text-heading font-bold text-lg mb-3">
                {statsContent.text.title}
              </h3>
              <p className="text-body mb-5">{statsContent.text.description}</p>
              <Link
                href={""}
                className="flex space-x-2 outline-none items-center
                 font-semibold text-green group"
              >
                <span>もっとみる</span>
                <span
                  className="w-6 h-6 rounded-full bg-green text-white
                  items-center justify-center inline-flex duration-300 
                  transition-all ease-in-out group-hover:bg-[#006e54]
                 "
                >
                  <BiChevronRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
