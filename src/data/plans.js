const plans = {
  fd: [
    {
      name: "FD1 (8.0%)",
      interest: "8.00%",
      "minimum deposit": "$1,000",
      term: "12 months",
    },
    {
      name: "FD2 (8.5%)",
      interest: "8.50%",
      "minimum deposit": "$5,000",
      term: "24 months",
    },
    {
      name: "FD3 (9.0%)",
      interest: "9.00%",
      "minimum deposit": "$10,000",
      term: "36 months",
    },
  ],
  rd: [
    {
      name: "RD1 (7.5%)",
      interest: "7.50%",
      "monthly installment": "$500",
      term: "12 months",
    },
    {
      name: "RD2 (8.0%)",
      interest: "8.00%",
      "monthly installment": "$1,000",
      term: "24 months",
    },
    {
      name: "RD3 (8.5%)",
      interest: "8.50%",
      "monthly installment": "$2,000",
      term: "36 months",
    },
  ],
  "Saving Deposit": [
    {
      name: "SD1 (2.5%)",
      interest: "2.50%",
    },
    {
      name: "SD2 (2.75%)",
      interest: "2.75%",
    },
    {
      name: "SD3 (3.0%)",
      interest: "3.00%",
    },
  ],
  mis: [
    {
      name: "MIS1 (6.0%)",
      interest: "6.00%",
      "monthly income": "$550",
      term: "12 months",
    },
    {
      name: "MIS2 (6.5%)",
      interest: "6.50%",
      "monthly income": "$600",
      term: "24 months",
    },
    {
      name: "MIS3 (7.0%)",
      interest: "7.00%",
      "monthly income": "$650",
      term: "36 months",
    },
  ],
  daily: [
    {
      name: "Pigmy1 (4.0%)",
      interest: "4.00%",
      "minimum deposit": "$10",
    },
    {
      name: "Pigmy2 (4.25%)",
      interest: "4.25%",
      "minimum deposit": "$20",
    },
    {
      name: "Pigmy3 (4.5%)",
      interest: "4.50%",
      "minimum deposit": "$50",
    },
  ],
  loan: [
    {
      name: "Loan1 (8.5%)",
      interest: "8.50%",
      "loan type": "Personal Loan",
      "maximum loan amount": "$20,000",
    },
    {
      name: "Loan2 (6.75%)",
      interest: "6.75%",
      "loan type": "Home Loan",
      "maximum loan amount": "$200,000",
    },
    {
      name: "Loan3 (7.25%)",
      interest: "7.25%",
      "loan type": "Auto Loan",
      "maximum loan amount": "$50,000",
    },
  ],
};

export default plans;
