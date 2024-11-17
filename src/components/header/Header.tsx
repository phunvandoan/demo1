"use client";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center h-[164px]  mx-[325px]">
      {/* site name */}
      <span className="text-[36px]">Site name</span>

      {/* nav */}
      <div className="text-[22px]">
        <Link className="mr-10" href={"/"}>
          Page
        </Link>
        <Link className="mr-10" href={"/"}>
          Page
        </Link>
        <Link className="mr-10" href={"/"}>
          Page
        </Link>
        <button className="text-[18px] w-[99px] h-[52px] bg-black text-[white] px-[24px] py-[14px] rounded-[14px]">
          Button
        </button>
      </div>
    </div>
  );
}
