import Image from "next/image";

export default function CardProduct({
  w,
  h,
  subh,
  desc,
  image,
}: {
  w: string;
  h: string;
  subh: string;
  desc: string;
  image: string;
}) {
  return (
    <div className={`w-[${w}]`}>
      <div className={`w-full h-[${h}] relative`}>
        <Image
          src={image}
          alt=""
          width={405}
          height={405}
          className="object-cover absolute w-full h-full rounded-[8px]"
        />
      </div>
      <div className="mt-7">
        <h6 className="text-[24px]">{subh}</h6>
        <p className="text-[24px] text-gray-500">{desc}</p>
      </div>
    </div>
  );
}
