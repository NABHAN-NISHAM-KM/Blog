import React from "react";
import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsGithub,
  BsWhatsapp,
  BsDiscord,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-2 border-teal-500">
      <div className="w-full">
      <Footer.LinkGroup className="flex justify-center font-semibold">
            <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>About</Footer.Link>
            <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>Blog</Footer.Link>
            
            <Footer.Link href='/contact' target='_blank' rel='noopener noreferrer'>Contact Us</Footer.Link>
            <Footer.Link href='#' >Privacy Policy</Footer.Link>
            <Footer.Link href='#' >Terms &amp; Conditions</Footer.Link>
        </Footer.LinkGroup>
        <div className="flex  gap-6  mt-4 mb-4 justify-center">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsTwitterX} />
          <Footer.Icon href="#" icon={BsWhatsapp} />
          <Footer.Icon href="#" icon={BsGithub} />
          <Footer.Icon href="#" icon={BsDiscord} />
        </div>
        <div className="flex justify-center items-center">
            <Footer.Copyright href='#' by='Nabhan Nisham KM.' year={new Date().getFullYear()} />
            <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                All rights reserved.
            </p>
        </div>
      </div>
    </Footer>
  );
}
