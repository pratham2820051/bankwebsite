import React from "react";

function Banner() {
  return (
    <div className="my-20 max-w-[1440px] px-5 mx-auto">
      <div className="flex flex-col items-start justify-between w-full m-auto md:flex-row">
        <div className="py-5 xl:py-10 text-[28px] md:text-[30px] xl:text-[30px] font-bold md:w-[33%] border-b-2 md:border-b-0 border-[red] animate-pulse">
          <span className="text-[red]">SECURITY</span> TIPS FOR SAFE BANKING
        </div>

        <div className="md:w-[55% lg:w-[65%] py-5 md:pl-10 text-start md:border-l-2 border-[red] leading-7 xl:leading-8">
          NEVER RESPOND TO FRAUDULENT CALLS ASKING FOR REMOTE ACCESS. CHANGE
          YOUR INTERNET BANKING PASSWORD AT PERIODICAL INTERVALS. ALWAYS USE
          OFFICIAL WEBSITE/MOBILE APPLICATION FOR BANKING. NEVER SHARE USERNAME,
          PASSWORD, OTP, CVV, CARD NUMBER AND PIN WITH ANYONE. REMOVE ALL THE
          TEMP INTERNET FILES AFTER USING INTERNET BANKING SERVICES. DO NOT
          CLICK ON ANY LINKS IN ANY E-MAIL MESSAGE TO ACCESS THE OFFICIAL SITE
        </div>
      </div>
    </div>
  );
}

export default Banner;
