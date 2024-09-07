import React from 'react';
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    <div className="p-4 shadow-md">
      <div className="flex justify-center items-center gap-5 mb-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" className="w-10 hover:opacity-80 transition-opacity duration-300" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" className="w-10 hover:opacity-80 transition-opacity duration-300" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" className="w-10 hover:opacity-80 transition-opacity duration-300" />
        </a>
      </div>
      <p className="text-center text-sm text-gray-600">
        Copyright &copy; 2024. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
