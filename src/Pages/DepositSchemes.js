import React from "react";
import schemeData from "../data/scheme.json";
import { NavLink, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Breadcrumb } from "react-bootstrap";
import Calculator from "./Calculator";

export default function DepositSchemes() {
  const { key } = useParams();
  const scheme = schemeData.find((scheme) => scheme.key === key);
  return (
    <>
      <div
        className="max-w-[1440px] mx-auto px-2 md:px-5 animate-fade-in"
        key={scheme.name}
      >
        <Breadcrumb className="w-full my-5 text-sm ">
          <Breadcrumb.Item
            linkAs={NavLink}
            linkProps={{ to: "/" }}
            href="/"
            className="py-2"
          >
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item className="py-2 " active>
            Deposit Schemes
          </Breadcrumb.Item>
          <Breadcrumb.Item className="py-2 " active>
            {scheme.name}
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="py-5 font-bold leading-normal capitalize sm:text-5xl text-sky-900 ">
          {scheme.name.toLocaleLowerCase()}
        </h1>
        <div className="md:flex ">
          <div className="w-full md:w-2/3">
            {" "}
            <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-slate-600">
              <p className="text-xl italic font-medium leading-relaxed text-gray-50 ">
                {scheme.quote}
              </p>
            </blockquote>
            <p className="text-gray-700 ">{scheme.description}</p>
            <h2 className="mt-16 text-slate-800">
              {scheme.name} FEATURES AND BENEFITS :-
            </h2>
            <ul className="mb-16 text-gray-500 list-disc">
              {scheme.featuresAndBenefits.map((feature) => (
                <li key={feature} className="py-1 text-lg">
                  {feature}
                </li>
              ))}
            </ul>
            {scheme?.kycDocumentsRequired && (
              <>
                <h2 className="text-slate-800">
                  KYC DOCUMENTS REQUIRED FOR ACCOUNT OPENING :-
                </h2>

                <ul className="px-3 py-10 my-5 border rounded shadow-sm ">
                  <h4 className="pb-3">Address Proof</h4>
                  {scheme.kycDocumentsRequired["Address Proof"].map(
                    (document) => (
                      <li key={document} className="px-2 py-2 mb-2 border-b ">
                        {document}
                      </li>
                    )
                  )}
                </ul>
                <ul className="px-3 py-10 my-5 border shadow-sm ">
                  <h4 className="pb-3">Identity Proof</h4>
                  {scheme.kycDocumentsRequired["Identity Proof"].map(
                    (document) => (
                      <li key={document} className="px-2 py-2 mb-2 border-b ">
                        {document}
                      </li>
                    )
                  )}
                </ul>
              </>
            )}
            <Button
              endIcon={<ArrowForward />}
              variant="contained"
              size="large"
              className="px-5 py-3"
            >
              Apply Now
            </Button>
          </div>
          <div className="px-3 md:w-1/3">
            <div className="sticky top-0">
              {key !== "saving" && <Calculator customType={key} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
