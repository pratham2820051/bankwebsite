const navItems = [
  { label: "Home", link: "/" },
  {
    label: "About Us",
    link: "/about",
    subItems: [
      { label: "The Company", link: "/about/company" },
      { label: "Our Vision & Mission", link: "/about/vision" },
      { label: "Our Branches", link: "/about/branch" },
      { label: "Legal Documents", link: "/about/documents" },
      { label: "Annual Reports", link: "/about/report" },
      { label: "Our Channel Partners", link: "/about/channel" },
      { label: "Recruitment of Career", link: "/about/recruitment" },
      { label: "Board of Directors", link: "/about/board" },
      { label: "Terms & Conditions", link: "/about/terms" },
      { label: "Security Tips", link: "/about/security/" },
    ],
  },
  {
    label: "Deposit Schemes",
    link: "/deposit",
    subItems: [
      { label: "Saving Deposit Scheme", link: "/deposit/saving" },
      { label: "Fixed Deposit Scheme", link: "/deposit/fd" },
      { label: "Recurring Deposit Scheme", link: "/deposit/rd" },
      { label: "Daily Deposit Scheme", link: "/deposit/daily" },
      { label: "Monthly Income Scheme", link: "/deposit/mis" },
    ],
  },
  {
    label: "Secured Loan Schemes",
    link: "/loan",
    subItems: [
      { label: "Secured General Loan", link: "/loan/general" },
      // { label: "Secured Property Loan", link: "/loan/property" },
      { label: "Secured Vehicle Loan", link: "/loan/vehicle" },
      { label: "Secured Education Loan", link: "/loan/education" },
      // { label: "Secured Business Loan", link: "/loan/business" },
      { label: "Secured Mortgage Loan", link: "/loan/mortage" },
      // {
      //   label: "Secured Loan Against Deposit",
      //   link: "/loan/againstdeposit",
      // },
      {
        label: "Secured Gold",
        link: "/loan/gold",
      },
    ],
  },
  { label: "Gallery", link: "/gallery" },
  {
    label: "Calculator",
    link: "/calculator",
    subItems: [
      { label: "FD Calculator", link: "/calculator/fd" },
      { label: "RD Calculator", link: "/calculator/rd" },
      { label: "Daily Calculator", link: "/calculator/daily" },
      { label: "MIS Calculator", link: "/calculator/mis" },
      { label: "Loan Calculator", link: "/calculator/loan" },
    ],
  },
  { label: "Contact us", link: "/contact" },
  {
    label: "Login",
    link: "/login",
    subItems: [
      { label: "Customer Login", link: "/login/customer" },
      { label: "Brand Login", link: "/login/brand" },
      { label: "Staff Login", link: "/login/staff" },
    ],
  },
];

export default navItems;
