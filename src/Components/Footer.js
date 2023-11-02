import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-20 leading-10 shadow-2xl bg-slate-800 footer">
      <div className="grid grid-cols-1 px-5 text-left text-white xl:px-40 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        <div className="my-5">
          <div className="text-xl font-bold">About Us</div>
          <div className="pr-16 my-4 text-sm leading-6">
            To carry on the business of all kind and description as may be
            prescribed to be carried by Nidhi Companies in terms of the
            provisions of the Companies Act 2013 and rules made there under and
            to encourage afford
          </div>
        </div>

        <div className="my-5">
          <div className="text-xl font-bold">Nidhi Schemes</div>
          <div className="my-4 text-sm cursor-default">
            <NavLink
              to="/"
              className="text-white no-underline hover:font-medium"
            >
              Fixed Deposit Scheme
            </NavLink>
          </div>
          <div className="my-4 text-sm cursor-default">
            <NavLink
              to="/"
              className="text-white no-underline hover:font-medium"
            >
              Recurring Deposit Scheme
            </NavLink>
          </div>
          <div className="my-4 text-sm cursor-default">
            <NavLink
              to="/"
              className="text-white no-underline hover:font-medium"
            >
              Daily Deposit Scheme
            </NavLink>
          </div>
          <div className="my-4 text-sm cursor-default">
            <NavLink
              to="/"
              className="text-white no-underline hover:font-medium"
            >
              Monthly Income Scheme
            </NavLink>
          </div>
          <div className="my-4 text-sm cursor-default">
            <NavLink
              to="/"
              className="text-white no-underline hover:font-medium"
            >
              Secured Loan Schemes
            </NavLink>
          </div>
        </div>

        <div className="my-5">
          <div className="text-xl font-bold">Useful Links</div>
          <div className="my-4 text-sm cursor-default">
            <NavLink
              to="/"
              className="text-white no-underline hover:font-medium"
            >
              Home
            </NavLink>
          </div>
          <div className="my-4 text-sm cursor-default">
            <NavLink
              to={"/about/company"}
              className="text-white no-underline hover:font-medium"
            >
              About Company
            </NavLink>
          </div>
          <div className="my-4 text-sm cursor-default">
            <NavLink
              to="/"
              className="text-white no-underline hover:font-medium"
            >
              Legal Documents
            </NavLink>
          </div>
          <div className="my-4 text-sm cursor-default">
            <NavLink
              to="/"
              className="text-white no-underline hover:font-medium"
            >
              Our Branches
            </NavLink>
          </div>
          <div className="my-4 text-sm cursor-default">
            <NavLink
              to="/"
              className="text-white no-underline hover:font-medium"
            >
              Customer Support
            </NavLink>
          </div>
          <div className="my-4 text-sm cursor-default">
            <NavLink
              to="/"
              className="text-white no-underline hover:font-medium"
            >
              Company Services
            </NavLink>
          </div>
          <div className="my-4 text-sm cursor-default">
            <NavLink
              to="/"
              className="text-white no-underline hover:font-medium"
            >
              Privacy Policy
            </NavLink>
          </div>
        </div>

        <div className="my-5 mb-10 md:w-[300px]">
          <div className="text-xl font-bold">Corporate Office</div>
          <div className="flex my-4 space-x-2 text-sm">
            {/* <LocationOnIcon className="mr-1" /> */}
            <div>Complex Apartment, Pune-16</div>
          </div>
          <div className="flex my-4 space-x-2 text-sm">
            {/* <LocalPhoneIcon className="mr-1" /> */}
            <div>(+91) 9876543210 / (+91) 9876543210</div>
          </div>
          <div className="flex items-center my-4 space-x-2 text-sm">
            {/* <MailIcon className="mr-1" /> */}
            <div className="space-y-2">
              <div>official@loan.com</div>
              <div>info@nidhi.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
