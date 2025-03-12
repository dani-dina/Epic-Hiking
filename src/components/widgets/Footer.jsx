import { contact, hero, navigations, supports } from "../../constants";
import Button from "./Button";
import Empty from "../../assets/icons/Empty";
import logo from "../../assets/logo.png";
import FaceBook from "../../assets/icons/FaceBook";
import X from "../../assets/icons/X";
import LinkedIn from "../../assets/icons/LinkedIn";
import Pinterest from "../../assets/icons/Pinterest";

const Footer = () => {
  return (
    <div className="w-full h-[140vh] lg:h-[90vh] flex flex-col items-center justify-around">
      {/* Top Section */}
      <div className="w-full h-[40%] flex items-center justify-between lg:justify-center">
        <div className="w-[100%] lg:w-[70%] h-[100%] flex flex-col items-center justify-around">
          <h1 className="text-center text-5xl lg:text-4xl font-bold fontt-[Inter]">
            Have <br className="lg:hidden" /> Better Hiking
          </h1>
          <p className="w-[80%] lg:w-[60%] text-center">{hero[1]}</p>
          <div className="w-[90%] lg:w-[50%] h-[35%] lg:h-[30%] flex flex-col lg:flex-row items-center justify-around">
            <input
              className="w-[80%] lg:w-[50%] h-[30%] lg:h-[65%] rounded-md border-[2px] outline-0 border-gray-200 input-placeholder"
              placeholder="   example@example.com"
            />
            <Button
              title={"Subscribe"}
              className="text-white bg-[rgb(44,9,220)] h-[30%] lg:h-[65%] w-[80%] lg:w-[10em] rounded-md"
              Child={Empty}
            />
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="w-[90%] h-[70%] lg:h-[50%] lg:flex flex-col items-center justify-around">
        <div
          className="w-full lg:w-[95%] h-[84%] lg:flex flex-col lg:flex-row items-center justify-between 
                     grid grid-cols-2 grid-rows-[auto_auto_auto] gap-4 p-4 mx-[1em]"
        >
          {/* Logo and Social Media */}
          <div className="col-span-2 w-[90%] lg:w-[25%] h-[90%] flex flex-col items-start justify-between">
            <img src={logo} width={"180px"} height={"40px"} />
            <p className="w-[90%] lg:w-[80%]">{hero[1]}</p>
            <div className="relative bottom-0 w-[90%] flex items-center justify-around">
              <FaceBook />
              <X />
              <LinkedIn />
              <Pinterest />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-[20%] h-[90%] flex flex-col items-start justify-around">
            <h1 className="font-bold">Links</h1>
            <div className="h-[50%] flex flex-col justify-around">
              {navigations.map((link) => (
                <a key={link.id} href={link.url}>
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div className="w-[20%] h-[90%] flex flex-col items-start justify-around">
            <h1 className="font-bold">Supports</h1>
            <div className="h-[50%] flex flex-col justify-around">
              {supports.map((link) => (
                <a key={link.id} href={link.url}>
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="w-[20%] h-[90%] flex flex-col items-start justify-around">
            <h1 className="font-bold">Contact us</h1>
            <div className="h-[50%] flex flex-col justify-around">
              {contact.map((link) => (
                <a key={link.id} href={link.url}>
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="h-[2px] bg-gray-200 w-full lg:w-[80%]"></div>
        <div className="w-full lg:w-[80%] h-[15%] lg:h-[10%] flex items-center justify-between text-gray-400">
          <p>Copy Right Reserved &copy; Daniel A.</p>
          <p>Terms of Use | Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
