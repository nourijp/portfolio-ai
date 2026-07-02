import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>Hamed Nouri</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h1>AI Automation {"&"} Communications<br />Specialist</h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">I build AI-assisted tools and automated systems that streamline development, content, and learning processes. By translating complex technical systems into clear, user-facing communication, I help teams optimize their product workflows, reduce adoption friction, and scale their impact.</p>
          </div>
          {/* Temporary Video Preview */}
          <video
            src={getImgPath("/images/home/banner/video-banner.mp4")}
            autoPlay
            muted
            playsInline
            className="block lg:hidden w-full max-w-[685px] mx-auto"
          />
          {/* <Image
            src={getImgPath("/images/home/banner/banner-img.png")}
            alt="banner-img"
            width={685}
            height={650}
            className="block lg:hidden"
          /> */}
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        {/* Temporary Video Preview */}
        <video
          src={getImgPath("/images/home/banner/video-banner.mp4")}
          autoPlay
          muted
          playsInline
          className="absolute right-0 top-0 z-1 w-[685px] h-[650px] object-cover"
        />
        {/* <Image
          src={getImgPath("/images/home/banner/banner-img.png")}
          alt="banner-img"
          width={685}
          height={650}
          className=" absolute right-0 top-0 z-1"
        /> */}
      </div>
    </section>
  );
};

export default index;
