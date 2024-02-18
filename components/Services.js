"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesContent = {
  text: {
    subTitle: "ゼミの特徴",
    title: "受験の強い、テストに強い",
    description:
      "「質の高い授業」と「学習の習慣化」で分かる→伸びる→楽しい→続く。だから、ワンランク上の志望校が見えてくる",
  },
  items: [
    {
      icon: "/assets/icon-1.svg",
      title: "受講形式",
      description: "校舎・オンラインいずれでもOK (併用も可)",
    },
    {
      icon: "/assets/icon-2.svg",
      title: "費用",
      description: "無料※入会金・テキスト代なども不要です。",
    },
    {
      icon: "/assets/icon-3.svg",
      title: "開講講座",
      description: "英語：31講座 数学：55講座 国語：42講座 理科：29講座",
    },
    {
      icon: "/assets/icon-4.svg",
      title: "小学生・中学受験生",
      description:
        "9月下旬からの4カ月で中学内容への基盤となる重要事項を中心に知識を確立させます。2月からの「新中1中学準備講座」では小学校の内容からステップアップし中学内容へつなげます。",
    },
    {
      icon: "/assets/icon-5.svg",
      title: "中学生（高校受験）",
      description:
        "生徒の第一志望校を最大限に尊重しています。生徒たちが高校受験を通じて人間として成長するための受験校指導を心がけており、合格実績のための安易な進路指導はいたしません。",
    },
    {
      icon: "/assets/icon-6.svg",
      title: "高校生・大学受験生",
      description:
        "クラス授業・オンライン授業ともに、各大学の入試傾向と対策法を知り尽くした実力派講師陣が、白熱した授業を展開しているハイレベルな授業です。",
    },
  ],
};

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slider",
      once: true,
    });
  }, []);

  return (
    <section id="services" className="py-20 bg-light">
      <div className="container px-4 mx-auto">
        {/* Topコンテンツ */}
        <div
          className="max-w-xl mx-auto text-center mb-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span
            className='inline-block py-1 pl-3 text-heading 
            font-semibold relative mb-7 before:content-[""] 
            before:absolute before:w-2/3 before:bg-pinkLight 
            before:left-0 before:top-0 before:bottom-0 before:-z-10 z-50'
          >
            {servicesContent.text.subTitle}
          </span>
          <h2
            className="text-heading text-2xl lg:text-4xl font-bold
            mb-5"
          >
            {servicesContent.text.title}
          </h2>
          <p className="text-body leading-relaxed">
            {servicesContent.text.description}
          </p>
        </div>

        {/* Underコンテンツ */}
        {/* grid-cols-1とは1列grid-cols-2とは2列grid-cols-3とは3列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {servicesContent.items.map((items, index) => {
            // indexで0～5までのコンテンツをずらして表示させる
            index *= 100;

            return (
              <div
                key={index}
                className="flex space-x-10"
                data-aos="fade-up"
                data-aos-delay={index}
              >
                {/* shrinkとはflexitemを小さくしない処理のこと */}
                <div className="w-14 shrink-0">
                  <span
                    className="inline-flex items-center justify-center 
                  p-2 w-[70px] h-[70px] rounded-lg bg-white"
                  >
                    <Image src={items.icon} width={60} height={60} alt="icon" />
                  </span>
                </div>
                <div>
                  <h3 className="text-heading font-bold mb-3">{items.title}</h3>
                  <p className="leading-relaxed text-body">
                    {items.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
