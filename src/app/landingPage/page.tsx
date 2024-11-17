import Image from "next/image";
import { products, products2 } from "@/lib/data";
import CardProduct from "@/components/card/CardProduct";

export default function LandingPage() {
  return (
    <>
      <div>
        {/* title */}
        <div className="w-[884px] h-[173px]">
          <h1 className="text-[64px]">Landing page title</h1>
          <p className="text-[24px]">
            Subheading that sets up context, shares more info about the website,
            or generally gets people psyched to keep scrolling.
          </p>
        </div>
        <button className="w-[141px] h-[66px] bg-black text-[white] rounded-[8px] px-[32px] py-[20px] my-[78px]">
          Button
        </button>
        <div className="w-full">
          <Image
            src={"/1.png"}
            alt=""
            width={1280}
            height={640}
            className="object-cover mb-[78px] rounded-[8px]"
            layout="responsive"
          ></Image>
        </div>

        {/* section heading 1 */}
        <h1 className="text-[48px]">Section Heading</h1>
        {/* Card */}
        <div className="flex justify-between mt-5 mb-[170px] mx-0">
          {products.map((item, index) => (
            <CardProduct
              key={index}
              image={item.img}
              w="405px"
              h="405px"
              subh={item.subh}
              desc={item.desc}
            />
          ))}
        </div>

        {/* section heading 2 */}
        <div className="flex justify-between  mb-[200px]">
          {/* left */}
          <div className="w-[516px]">
            <h1 className="text-[48px] mb-7">Section Heading</h1>
            <div>
              <h6 className="text-[24px] mt-12">Subheading</h6>
              <p className="text-[24px] text-gray-500">
                Body text for whatever you’d like to expand on the main point.
              </p>
            </div>

            <div>
              <h6 className="text-[24px] mt-12">Subheading</h6>
              <p className="text-[24px] text-gray-500">
                Body text for whatever you’d like to expand on the main point.
              </p>
            </div>

            <div>
              <h6 className="text-[24px] mt-12">Subheading</h6>
              <p className="text-[24px] text-gray-500">
                Body text for whatever you’d like to expand on the main point.
              </p>
            </div>
            {/* button */}
            <div className="mt-10">
              <button className="bg-black text-white rounded-[8px] text-[20px] px-2 py-2 w-[125px] h-[60px] mr-4 ">
                Button
              </button>
              <button className="bg-gray-300 text-black rounded-[8px] text-[20px] px-2 py-2 w-[225px] h-[60px]">
                Secondary button
              </button>
            </div>
          </div>

          {/* right */}
          <div className="w-[704px] h-[704px] relative">
            <Image
              src={"/Image3.png"}
              alt=""
              width={704}
              height={704}
              className="object-cover absolute w-full h-full rounded-[8px]"
            ></Image>
          </div>
        </div>

        {/* section heading 3 */}
        <h1 className="text-[48px] mb-4">Section Heading</h1>
        <div className="grid gap-7 grid-cols-2 mb-[200px]">
          {products2.map((item, index) => (
            <CardProduct
              key={index}
              image={item.img}
              w="620px"
              h="341px"
              subh={item.subh}
              desc={item.desc}
            />
          ))}
        </div>

        {/* section heading 4 */}
        <h1 className="text-[48px]">Section Heading</h1>
        <div className="grid gap-7 grid-cols-3 mb-[200px] mt-6">
          <div className="w-[406px] h-[198px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] px-8 py-8">
            <span className="text-[24px]">“A terrific piece of praise”</span>
            <div className="flex mt-8">
              <div className="w-[45px] h-[45px] relative mr-4 ">
                <Image
                  src={"/Avatar1.png"}
                  alt=""
                  width={45}
                  height={45}
                  className="object-cover absolute w-full h-full rounded-[45px]"
                ></Image>
              </div>
              <div>
                <h6>Name</h6>
                <span className="text-gray-400">Description </span>
              </div>
            </div>
          </div>

          <div className="w-[406px] h-[198px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] px-8 py-8">
            <span className="text-[24px]">“A terrific piece of praise”</span>
            <div className="flex mt-8">
              <div className="w-[45px] h-[45px] relative mr-4 ">
                <Image
                  src={"/Avatar2.png"}
                  alt=""
                  width={45}
                  height={45}
                  className="object-cover absolute w-full h-full rounded-[45px]"
                ></Image>
              </div>
              <div>
                <h6>Name</h6>
                <span className="text-gray-400">Description </span>
              </div>
            </div>
          </div>
          <div className="w-[406px] h-[198px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] px-8 py-8">
            <span className="text-[24px]">“A terrific piece of praise”</span>
            <div className="flex mt-8">
              <div className="w-[45px] h-[45px] relative mr-4 ">
                <Image
                  src={"/Avatar3.png"}
                  alt=""
                  width={45}
                  height={45}
                  className="object-cover absolute w-full h-full rounded-[45px]"
                ></Image>
              </div>
              <div>
                <h6>Name</h6>
                <span className="text-gray-400">Description </span>
              </div>
            </div>
          </div>
        </div>

        {/* section heading 5 */}
        <div className="flex justify-between items-center bg-gray-100 h-[236px] px-20 mr-[-80px] ml-[-80px]">
          {/* left */}
          <h1 className="text-[48px] font-bold">Section Heading</h1>

          {/* right */}
          <div className="">
            <button className="bg-black text-white rounded-[8px] text-[20px] px-2 py-2 w-[125px] h-[60px] mr-4 ">
              Button
            </button>
            <button className="bg-gray-300 text-black rounded-[8px] text-[20px] px-2 py-2 w-[225px] h-[60px]">
              Secondary button
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
