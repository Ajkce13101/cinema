import SocialIcons from "@/components/socialIcons/SocialIcons";
import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  LucideFacebook,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="max-container padding-x ">
      <div className="mt-[150px] flex justify-center items-center gap-8">
        <div className="hover:text-[#da2f68] cursor-pointer">Terms Of Use</div>
        <div className="hover:text-[#da2f68] cursor-pointer">Privacy-Policy</div>
        <div className="hover:text-[#da2f68] cursor-pointer">About</div>
        <div className="hover:text-[#da2f68] cursor-pointer">Blog</div>
        <div className="hover:text-[#da2f68] cursor-pointer">FAQ</div>
      </div>
      <div className="text-center flex justify-center ">
        <div className="w-[800px] text-slate-500  text-sm mt-10 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quo
          laboriosam praesentium ratione amet dignissimos, voluptatibus ex quam
          fugit nam dolor officia alias eveniet quibusdam expedita eos optio
          quae iste nostrum doloremque voluptas, aspernatur distinctio minima
          sunt? Et, quod provident iure suscipit minima soluta eum quas.
          obcaecati nobis reiciendis ex corrupti modi?
        </div>
      </div>
      <div className="flex mt-10 justify-center gap-3 mb-14">
        <SocialIcons Icon={Instagram}></SocialIcons>
        <SocialIcons Icon={Facebook}></SocialIcons>
        <SocialIcons Icon={Twitter}></SocialIcons>
        <SocialIcons Icon={Linkedin}></SocialIcons>
      </div>
    </div>
  );
};

export default Footer;
