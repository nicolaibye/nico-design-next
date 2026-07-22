"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

type BlogPost = {
  id: string | number;
  slug: string;
  cardImageUrl: string;
  cardImageAlt?: string | null;
  cardTitle: string;
  category: string;
};

export const BlogCard = ({ post }: { post: BlogPost }) => {
  const categoryArrows: Record<string, string> = {
    design: "bg-red-CoralRed",
    lifestyle: "bg-green-RiverBed",
    career: "bg-blue-NileBlue",
    other: "bg-black-Mirage",
  };

  return (
    <li key={post.id} className="w-full sm:w-auto">
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-row items-center w-full sm:w-85 h-35 rounded-2xl bg-white overflow-hidden relative drop-shadow-[0_4px_6px_rgba(0,0,0,0.14)] lg:hover:scale-105"
      >
        <Image
          src={post.cardImageUrl}
          alt={post.cardImageAlt || "Cover image"}
          className="w-35 h-35 object-cover object-bottom"
          width={1000}
          height={1000}
        />
        <div className="flex flex-col justify-start h-full p-5">
          <h2 className="font-lexend font-regular leading-[1.2] text-base">
            {post.cardTitle}
          </h2>
          <p className="font-lexend font-light text-base capitalize">
            {post.category}
          </p>
          <div
            className={`flex items-center justify-center absolute bottom-2 right-2 ${categoryArrows[post.category] ?? "bg-black-Mirage"} rounded-full`}
          >
            <ArrowUpRightIcon
              size={26}
              weight="regular"
              className={`text-white-LinkWater p-1.5`}
            />
          </div>
        </div>
      </Link>
    </li>
  );
};
