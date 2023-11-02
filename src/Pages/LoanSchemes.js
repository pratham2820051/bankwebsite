// SECURED LOAN SCHEME MAIN JS FILE //

import { useParams, NavLink } from "react-router-dom";
import "../Components/SecuredLoan/SecuredLoan.css";
import SchemeData from "../data/LoanSchemeData.json";
import { Breadcrumb } from "react-bootstrap";
import React from "react";

function LoanSchemes() {
  const { type } = useParams();
  const scheme = SchemeData.find((loanScheme) => loanScheme?.type === type);
  return (
    <>
      <div className="page_container">
        <h3 className="heading3">LOAN SCHEMES</h3>
        <div className=" current_page_link">
          <Breadcrumb data-bs-theme="dark" className="my-5 ">
            <Breadcrumb.Item
              linkAs={NavLink}
              linkProps={{ to: "/" }}
              href="/"
              className="py-2 underline"
            >
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item className="py-2 ">Loan Schemes</Breadcrumb.Item>
            <Breadcrumb.Item className="py-2 s ">
              {scheme?.loan_type}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div
        key={scheme?.loan_type}
        className="max-w-[1440px] m-auto px-1 sm:px-3 py-10 animate-fade-in"
      >
        <div className="page_container1 max-w-[800px]">
          <h2 className="mb-3 text-4xl font-bold uppercase text-slate-800">
            {scheme?.loan_type}
          </h2>
          <p>{scheme?.description}</p>
        </div>

        <div className="page_container2 ">
          <div className="page_container21">
            <h4>FEATURES & BENEFITS :-</h4>
            <ul className="lists">
              {scheme?.features_and_benefits?.map((lists) => (
                <li key={lists}>{lists}</li>
              ))}
            </ul>
          </div>
          <div className="page_container22">
            <img className="Image" src={scheme?.image} alt={scheme?.name} />
          </div>
        </div>

        <div className="page_container3 max-w-[800px]">
          <div className="page_container31">
            <h4>ELIGIBILITY</h4>
            <ul className=" lists">
              {scheme?.eligibility?.requirements?.map((lists) => (
                <li key={lists}>{lists}</li>
              ))}
            </ul>
          </div>

          <div className="page_container31">
            <h4>PURPOSE OF LOAN</h4>
            <ul className="lists">
              {scheme?.loan_purpose?.map((lists) => (
                <li key={lists}>{lists}</li>
              ))}
            </ul>
          </div>

          <div className="page_container31">
            <h4>QUANTUM OF FINANCE</h4>
            <ul className="lists">
              <li>{scheme?.quantum_of_finance}</li>
            </ul>
          </div>

          <div className="page_container31">
            <h4>REPAYMENT DETAILS</h4>
            <ul className="lists">
              <li>{scheme?.repayment_details}</li>
            </ul>
          </div>
          <div className="page_container31">
            <h4>PROCESSING CHARGES & SERVICE TAX</h4>
            <ul className="lists">
              <li>{scheme?.processing_charges_and_service_tax}</li>
            </ul>
          </div>

          <div className="page_container31">
            <h4>SUPPORTING DOCUMENTS FOR LOAN SANCTIONING</h4>
            <ul className="lists1">
              <h5>Photo Identity Proof:</h5>
              {scheme?.supporting_documents?.photo_identity_proof?.map(
                (lists) => (
                  <li key={lists}>{lists}</li>
                )
              )}
            </ul>

            <ul className="lists2">
              <h5>Residence Proof:</h5>
              {scheme?.supporting_documents?.residence_proof?.map((lists) => (
                <li key={lists}>{lists}</li>
              ))}
            </ul>

            <ul className="lists3">
              <h5>Other Documents:</h5>
              {scheme?.supporting_documents?.other_documents?.map((lists) => (
                <li key={lists}>{lists}</li>
              ))}
            </ul>
          </div>
        </div>
        <button className="applyBtn">Apply Now</button>
      </div>
    </>
  );
}

export default LoanSchemes;
