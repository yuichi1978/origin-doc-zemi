import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

const FooterContent = {
  text: {
    logo: "/assets/logo.png",
    description:
      "成績はもう上がらないとあきらめていませんか？ 成績が上がらないのは能力のせいではありません。今までのやり方を変えるだけで、学力・成績は短期間で飛躍的に伸びます！",
  },
  footerLinks: [
    {
      heading: "概要",
      links: [
        {
          href: "#",
          label: "サービス",
        },
        {
          href: "#",
          label: "ソリューション",
        },
        {
          href: "#",
          label: "カスタマー",
        },
        {
          href: "#",
          label: "ブログ・ニュース",
        },
      ],
    },
    {
      heading: "その他",
      links: [
        {
          href: "#",
          label: "ブログ・ニュース",
        },
        {
          href: "#",
          label: "サポート",
        },
        {
          href: "#",
          label: "サイトマップ",
        },
        {
          href: "#",
          label: "プライバシーポリシー",
        },
      ],
    },
  ],
  contact: {
    heading: "連絡先",
    description: "お気軽にお電話ください",
    address: {
      street: "東京都港区芝公園１",
      phone: "(0120) 123-4567",
      website: "https://origindoc.com",
    },
  },
};

const Footer = () => {
  return (
    <footer
      className="py-20 bg-white
      max-md:p-5
    "
    >
      <div className="container px-4 mx-auto">
        <div className="block lg:flex gap-20 mb-10 pb-10 text-body">
          {/* leftコンテンツ */}
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <Link href={"#"}>
              <Image
                src={FooterContent.text.logo}
                width={90}
                height={60}
                alt="logo"
                className="mb-5"
              />
            </Link>
            <p className="leading-relaxed mb-7">
              {FooterContent.text.description}
            </p>
            <Link
              href={"#"}
              className="flex space-x-2 outline-none items-center font-semibold text-green group"
            >
              <span>もっと見る</span>
              <span
                className="w-6 h-6 rounded-full bg-green text-white 
                inline-flex items-center justify-center group-hover:bg-[#006E54]
                duration-300 transition-all ease-in-out"
              >
                <BiChevronRight className="text-xl" />
              </span>
            </Link>
          </div>

          {/* centerコンテンツ */}
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <div className="grid grid-cols-2 gap-10">
              {FooterContent.footerLinks.map((footerLink, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-heading mb-5">
                    {footerLink.heading}
                  </h3>
                  <ul className="p-0 m-0">
                    {footerLink.links.map((link, index) => (
                      <li key={index} className="mb-3">
                        <Link
                          href={"#"}
                          className="flex items-center duration-300 
                            transition-all ease-in-out hover:text-green group"
                        >
                          <span className="max-md:text-xs">{link.label}</span>
                          <span
                            className="left-2 relative duration-300 
                            transition-all ease-in-out opacity-0 
                            group-hover:opacity-100 group-hover:left-3"
                          >
                            <BiChevronRight className="text-xl" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* rightコンテンツ */}
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <h3 className="font-semibold text-heading mb-5">
              {FooterContent.contact.heading}
            </h3>
            <p className="leading-relaxed mb-7">
              {FooterContent.contact.description}
            </p>
            <ul>
              <li className="flex items-center space-x-3 mb-5">
                <FaLocationDot className="text-xl text-green" />
                <span>{FooterContent.contact.address.street}</span>
              </li>
              <li className="flex items-center space-x-3 mb-5">
                <FaPhoneAlt className="text-xl text-green" />
                <span>{FooterContent.contact.address.phone}</span>
              </li>
              <li className="flex items-center space-x-3 mb-5">
                <IoIosLink className="text-xl text-green" />
                <span>{FooterContent.contact.address.website}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-10 border-t border-gray-200">
          CopyRight ORIGIN.Doc 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
