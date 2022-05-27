import React from "react";
import collectionImg from "images/collection.png";
import authorImg from "images/author.png";
import searchImg from "images/search.png";
import editAccountImg from "images/editAccount.png";
import detailImg from "images/detail.png";
import uploadItemImg from "images/uploadItem.png";
import Badge from "./Badge";
import { ArrowRightIcon } from "@heroicons/react/solid";

export const SectionLayouts = () => {
  const data = [
    {
      img: collectionImg,
      text: "Collection page",
      subText: "Collection page",
      link: "https://chisnghiax.com/ciscryp/page-collection",
    },
    {
      img: authorImg,
      text: "Author page",
      subText: "Author page",
      link: "https://chisnghiax.com/ciscryp/page-author",
    },
    {
      img: searchImg,
      text: "Search page",
      subText: "Search page",
      link: "https://chisnghiax.com/ciscryp/page-search",
    },
    {
      img: uploadItemImg,
      text: "Upload Item Page",
      subText: "Upload Item Page",
      link: "https://chisnghiax.com/ciscryp/page-upload-item",
    },
    {
      img: editAccountImg,
      text: "Profile settings page",
      subText: "Profile settings page",
      link: "https://chisnghiax.com/ciscryp/account",
    },
    {
      img: detailImg,
      text: "NFT detail page",
      subText: "NFT Detail page",
      link: "https://chisnghiax.com/ciscryp/nft-detailt",
      tag: "HOT!",
    },
  ];

  const renderItem = (item: typeof data[number], index: number) => {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={item.link}
        key={index}
        className="flex flex-col group hover:-translate-y-1.5 transform transition-transform will-change-transform"
      >
        <div className="relative z-0 h-0 aspect-w-9 aspect-h-12 rounded-xl shadow-xl overflow-hidden">
          <img
            className="block absolute inset-0 object-cover rounded-xl"
            src={item.img}
            alt={item.text}
          />
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 bg-slate-900">
            <div
              className="w-14 h-14 flex items-center justify-center bg-slate-900/70 text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity transform duration-200 rounded-full"
              title="View page"
            >
              <ArrowRightIcon className="w-6 h-6 transform -rotate-45" />
            </div>
          </div>
        </div>
        <div className="relative mt-1 p-3 text-center">
          <div className="inline-flex items-center space-x-2">
            <span className="block text-base font-medium capitalize text-slate-900">
              {item.text}
            </span>
            {item.tag && <Badge name={item.tag} color="bg-red-700" />}
          </div>
          {item.subText && (
            <span className="block text-xs text-slate-600">{item.subText}</span>
          )}
        </div>
      </a>
    );
  };

  return (
    <section className="mt-6">
      <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-center">
        <i className="text-orange-500"> 15+</i> Inner Pages
      </h2>
      <p className="mt-4 text-lg text-center text-gray-600 mx-auto">
        Access all the amazing pages of the template.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-x-7 gap-y-11 mt-12">
        {data.map(renderItem)}
        <div className="shadow-2xl h-0 aspect-w-9 aspect-h-12 bg-slate-100 bg-opacity-60 rounded-xl ">
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="uppercase tracking-widest text-2xl">15+ PAGES</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
