import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const bgColors: Record<string, string> = {
  white: "bg-white",
  black: "bg-black",
};

const textColors: Record<string, string> = {
  white: "text-red-500",
  black: "text-white",
};

const MenuPage = () => {
  return (
    <div className="p-30 lg:px-20 xl:px-40  flex flex-col md:flex-row items-center ">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2 flex flex-col justify-between"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button
              className={`hidden 2xl:block ${bgColors[category.color]} ${textColors[category.color]} py-2 px-4 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
