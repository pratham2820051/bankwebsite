import React from "react";
import SchemeOption from "./SchemeOption";
import img1 from "./Assets/1.jpg";
import img2 from "./Assets/2.jpg";
import img3 from "./Assets/3.jpg";
import img4 from "./Assets/4.jpg";
import img5 from "./Assets/5.jpg";
import img6 from "./Assets/6.jpg";

function Scheme() {
  return (
    <div className="my-20">
      <div className="w-full m-auto">
        <div className="max-w-max m-auto text-[30px] font-bold">
          Our Scheme
          <hr className="border-2 border-[red]" />
        </div>
        <div className="max-w-[1120px] m-auto grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          <SchemeOption
            img={img1}
            title="Saving Deposit Scheme"
            desc="Money can be deposited / withdraw into an account as per the wish of account holder."
          />
          <SchemeOption
            img={img2}
            title="Fixed Deposit Scheme"
            desc="A fixed deposit is a financial instrument where a member gets assured ROI."
          />
          <SchemeOption
            img={img3}
            title="Recurring Deposit Scheme"
            desc="Recurring Deposit is a special kind of Term Deposit offered by KVNL."
          />
          <SchemeOption
            img={img4}
            title="Daily Deposit Scheme"
            desc="Daily Deposit Scheme is a monetary deposit scheme introduced by KVNL."
          />
          <SchemeOption
            img={img5}
            title="Pigmy Deposit"
            desc="Daily Deposit Scheme is a monetary deposit scheme introduced by KVNL."
          />
          <SchemeOption
            img={img6}
            title="Monthly Income Scheme"
            desc="Monthly interest scheme is introduced by KVNL."
          />
        </div>
      </div>
    </div>
  );
}

export default Scheme;
