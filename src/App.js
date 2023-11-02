import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import THECOMPANY from "./Components/AboutUs/THECOMPANY";
import OurVision from "./Components/AboutUs/OurVision";
import OurBranch from "./Components/AboutUs/OurBranch";
import Legal from "./Components/AboutUs/Legal";
import Report from "./Components/AboutUs/Report";
import Channel from "./Components/AboutUs/Channel";
import Recruitment from "./Components/AboutUs/Recruitment";
import Board from "./Components/AboutUs/Board";
import Terms from "./Components/AboutUs/Terms";
import Securitytips from "./Components/AboutUs/Securitytips";

import "./App.css";
import Loading from "./Components/Loading";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Header from "./Components/Header";

const DepositSchemes = React.lazy(() => import("./Pages/DepositSchemes"));
const GalleryPage = React.lazy(() => import("./Pages/GalleryPage"));
const Calculator = React.lazy(() => import("./Pages/Calculator"));
const LoanSchemes = React.lazy(() => import("./Pages/LoanSchemes"));

function App() {
  return (
    <Router>
      <div className="min-h-[105vh] App font-poppins">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*">
            <Route path="company" element={<THECOMPANY />} />
            <Route path="vision" element={<OurVision />} />
            <Route path="branch" element={<OurBranch />} />
            <Route path="documents" element={<Legal />} />
            <Route path="report" element={<Report />} />
            <Route path="channel" element={<Channel />} />
            <Route path="recruitment" element={<Recruitment />} />
            <Route path="board" element={<Board />} />
            <Route path="terms" element={<Terms />} />
            <Route path="security" element={<Securitytips />} />
          </Route>

          <Route
            path="/loan/:type"
            element={
              <Suspense fallback={<Loading />}>
                <LoanSchemes />
              </Suspense>
            }
          />

          <Route
            path="deposit/:key"
            element={
              <Suspense fallback={<Loading />}>
                <DepositSchemes />
              </Suspense>
            }
          />

          <Route
            path="gallery"
            element={
              <Suspense fallback={<Loading />}>
                <GalleryPage />
              </Suspense>
            }
          />
          <Route
            path="calculator/:type"
            element={
              <Suspense fallback={<Loading />}>
                <Calculator />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
