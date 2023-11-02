import React from 'react';
import './AboutUs.css'; 

function Securitytips() {
  return (
    <div className="about-us-container">
      <h1 className="main-heading">SECURITY TIPS</h1>
      <div className="branch-info">
        <p>"Security Tips For Safe Banking".</p>
        <ul>
         <li>Never respond to fraudulent calls asking for remote access.</li>
         <li>Change your Internet Banking password at periodical intervals.</li>
         <li>Always use official website/Mobile application for banking.</li>
         <li>Never share Username, Password, OTP, CVV, Card Number and PIN with anyone.</li>
         <li>Remove all the Temp internet files after using internet banking services.</li>
         <li>Do not click on any links in any e-mail message to access the official site.</li>
         </ul>
      </div>
    </div>
  );
}

export default Securitytips;
