import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from "lucide-react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="line mt-[100px] pt-10 bg-[#0a0f24]">
      <div className="max-container padding-x bg-[#0a0f24]">
        <div className=" flex justify-center items-center gap-8 max-sm:text-sm max-sm:flex-wrap ">
          <div className="hover:text-[#da2f68] cursor-pointer">
            Terms Of Use
          </div>
          <div className="hover:text-[#da2f68] cursor-pointer">
            Privacy-Policy
          </div>
          <div className="hover:text-[#da2f68] cursor-pointer">About</div>
          <div className="hover:text-[#da2f68] cursor-pointer">Blog</div>
          <div className="hover:text-[#da2f68] cursor-pointer">FAQ</div>
        </div>
        <div className="text-center flex justify-center ">
          <div className="w-[800px] text-slate-500  text-sm mt-10 max-sm:text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quo
            laboriosam praesentium ratione amet dignissimos, voluptatibus ex
            quam fugit nam dolor officia alias eveniet quibusdam expedita eos
            optio quae iste nostrum doloremque voluptas, aspernatur distinctio
            minima sunt? Et, quod provident iure suscipit minima soluta eum
            quas. obcaecati nobis reiciendis ex corrupti modi?
          </div>
        </div>
        <div className="flex mt-10 justify-center gap-3 mb-14">
          <div className="bg-slate-700 rounded-full p-3 icon">
            <Instagram strokeWidth="1" className="w-[17px] h-[17px]" />
          </div>
          <div className="bg-slate-700 rounded-full p-3 icon">
            <Facebook strokeWidth="1" className="w-[17px] h-[17px]" />
          </div>
          <div className="bg-slate-700 rounded-full p-3 icon">
            <Linkedin strokeWidth="1" className="w-[17px] h-[17px]" />
          </div>
          <div className="bg-slate-700 rounded-full p-3 icon">
            <Twitter strokeWidth="1" className="w-[17px] h-[17px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
