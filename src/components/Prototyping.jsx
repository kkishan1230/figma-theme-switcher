import proto_img from "../images/letter.png";
import {
  TextH2,
  TextH3,
  TextParagraph,
} from "./globalComponents/globalComponents";

const Prototyping = () => {
  return (
    <div className="max-w-[1440px] mx-auto mt-[200px] md:mt-[100px] lg:max-w-[680px]  xl:px-[50px] xl2:max-w-[1100px] xl2:px-0">
      <div className="flex items-center justify-between lg:flex-col lg:gap-10 sm:flex-col-reverse">
        <div className="w-[50%]  md:pr-0 md:w-[50%] lg:w-[80%] xl2:pr-[20px] sm:w-[360px]">
          <img src={proto_img} alt="" />
          <div className="hidden sm:block text-center mt-[95px] max-w-[320px]  mx-auto">
            <h3>Subscribe to our Newsletter</h3>
            <p className="mt-[10px]">Available exclusivery on Figmaland</p>
            <input
              type="text"
              placeholder="Your Email"
              className="w-[100%] h-[54px] rounded-[39px] border-solid border-[1px] border-[#E8E8E8] font-Roboto placeholder:text-[#18171D] bg-[#F4F4F4] pl-[35px] mt-[34px]"
            />
            <button className="btn w-[100%] h-[54px] rounded-[39px] mt-[12px] mb-[114px]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-[50%] pl-[113px] md:pl-0 lg:w-[80%] xl2:pl-[40px] sm:w-[300px]">
          <TextH3 className="md:text-center" color="secondary">
            At your fingertips
          </TextH3>
          <TextH2
            className="mt-4 w-[324px] mb-9 md:text-[36px] md:leading-[36px] md:text-center md:mx-auto sm:w-[300px] sm:mb-[27px]"
            color="secondary"
          >
            <span className="sm:hidden">Lightning fast prototyping</span>
            <span className="hidden sm:block">Newsletter</span>
          </TextH2>
          <div className="pl-2 md:text-center sm:hidden">
            <TextH3 color="secondary">Subscribe to our Newsletter</TextH3>
            <TextParagraph
              className="mb-[36px] md:text-[24px] md:max-w-[270px] md:mx-auto"
              color="secondary.lightGrey"
            >
              Available exclusivery on Figmaland
            </TextParagraph>
            <div className="flex gap-3 items-center md:flex-col">
              <input
                type="text"
                placeholder="Your Email"
                className="w-[273px] h-[54px] py-[19px] px-[39px] rounded-[39px] border-solid border-[1px] border-[#E8E8E8] font-Roboto placeholder:text-[#18171D] bg-[#F4F4F4] md:w-[100%]"
              />
              <button className="btn w-[178px] h-[58px] rounded-[35px] md:w-[150px] md:h-[40px] md:text-[16px] md:self-end">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prototyping;
