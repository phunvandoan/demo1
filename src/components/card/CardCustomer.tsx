import Image from "next/image";

export default function CartCustomer({
  title,
  img,
  desc,
  name,
  w,
  h,
}: {
  title: string;
  img: string;
  desc: string;
  name: string;
  w: number;
  h: number;
}) {
  return (
    <div
      className={`w-[${w.toString()}px] h-[${h.toString()}px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] px-8 py-8`}
    >
      <span className="text-[24px]">{title}</span>
      <div className="flex mt-8">
        <div className="w-[45px] h-[45px] relative mr-4 ">
          <Image
            src={img}
            alt=""
            width={w}
            height={h}
            className="object-cover absolute w-full h-full rounded-[45px]"
          ></Image>
        </div>
        <div>
          <h6>{name}</h6>
          <span className="text-gray-400">{desc}</span>
        </div>
      </div>
    </div>
  );
}
