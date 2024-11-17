import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { PiLinkedinLogo } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="mx-[325px] py-[47px] flex justify-between border-t-[gray] border-t border-solid">
      {/* footer left */}
      <div>
        <span className="text-[24px]">Site name</span>
        {/* icon footer */}
        <div className="flex justify-between w-[180px] text-[22px] mt-[73px]">
          <FaFacebook />
          <PiLinkedinLogo />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>

      {/* footer right */}
      <div className="flex justify-around w-[calc(50%_-_120px)] text-[24px]">
        <ul>
          <li className="">Topic</li>
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
        </ul>
        <ul>
          <li>Topic</li>
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
        </ul>
        <ul>
          <li>Topic</li>
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
        </ul>
      </div>
    </div>
  );
}
