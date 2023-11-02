import React from "react";
import LoanOption from "./LoanOption";
import DiamondIcon from "@mui/icons-material/Diamond";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import PaidIcon from "@mui/icons-material/Paid";

function Loans() {
  return (
    <div className="my-20">
      <div className="w-full m-auto">
        <div className="max-w-max m-auto text-[30px] font-bold">
          Our Loans
          <hr className="border-2 border-[red]" />
        </div>
        <div className="max-w-[1100px] m-auto py-3 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
          <LoanOption
            icon={<DiamondIcon style={{ fontSize: "50px" }} />}
            title="SECURED GOLD, SILVER, JEWELLARY"
            desc="Let the gold add glitter to your life. Unlock the value of your gold while you continue to own it."
          />
          <LoanOption
            icon={<HomeIcon style={{ fontSize: "50px" }} />}
            title="SECURED PROPERTY LOAN"
            desc="A mortgage is a loan where the property or real estate which is used as collateral."
          />
          <LoanOption
            icon={<BusinessCenterIcon style={{ fontSize: "50px" }} />}
            title="SECURED BUSINESS LOAN"
            desc="This loan will be given for the purpose of the business by mortgaging the immovable property of the borrower."
          />
          <LoanOption
            icon={<PaidIcon style={{ fontSize: "50px" }} />}
            title="SECURED LOAN AGAINST DEPOSIT"
            desc="Loan will be sanctioned to purchase a new or an old vehicle, by hypothecating the same for the personal or commercial use ."
          />
          <LoanOption
            icon={<TimeToLeaveIcon style={{ fontSize: "50px" }} />}
            title="SECURED VEHICLE LOAN"
            desc="This loan will be given for the purpose of the business by mortgaging the immovable property of the borrower after considering security."
          />
          <LoanOption
            icon={<SchoolIcon style={{ fontSize: "50px" }} />}
            title="SECURED EDUCATION LOAN"
            desc="This loan aims at providing financial support to deserving /meritorious students for pursuing higher education in India and abroad."
          />
        </div>
      </div>
    </div>
  );
}

export default Loans;
