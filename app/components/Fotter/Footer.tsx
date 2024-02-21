import { foteerData } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLocationOutline, IoLogoYoutube } from "react-icons/io5";
import { MdOutlineMailOutline, MdOutlinePhoneEnabled } from "react-icons/md";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer p-10 bg-primary_gray shadow-xl mt-10 text-base-content">
      <aside>
        <Image
          src="/images/logo.png"
          loading="lazy"
          alt="Logo"
          width={40}
          height={40}
        />
        <div className="mt-2">
          <div className="flex gap-3 items-center justify-start">
            <MdOutlinePhoneEnabled className="text-orange" />
            <a href={`tel:${foteerData.phone}`}>{foteerData.phone}</a>
          </div>

          <div className="flex gap-3 items-center justify-start">
            <MdOutlineMailOutline className="text-orange" />
            <a href={`mailto:${foteerData.email}`}>{foteerData.email}</a>
          </div>

          <div className="flex gap-3 items-center justify-start">
            <IoLocationOutline className="text-orange" />
            <p>{foteerData.location}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <a href={foteerData.socail.facebook} target="_blank">
              <FaFacebookSquare className="text-orange" />
            </a>
          </div>
          <div>
            <a href={foteerData.socail.linkedin} target="_blank">
              <FaLinkedin className="text-orange" />
            </a>
          </div>
          <div>
            <a href={foteerData.socail.instagram} target="_blank">
              <FaInstagram className="text-orange" />
            </a>
          </div>
          <div>
            <a href={foteerData.socail.x} target="_blank">
              <FaSquareXTwitter className="text-orange" />
            </a>
          </div>
          <div>
            <a href={foteerData.socail.youtube} target="_blank">
              <IoLogoYoutube className="text-orange" />
            </a>
          </div>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title ">Company</h6>
        <Link href="/" className="link link-hover">
          Success Story
        </Link>
        <Link href="/" className="link link-hover">
          Privacy & Policy
        </Link>
        <Link href="/" className="link link-hover">
          About Us
        </Link>
        <Link href="/contact" className="link link-hover">
          Contact Us
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link href="/" className="link link-hover">
          Hire Permanent Staff
        </Link>
        <Link href="/" className="link link-hover">
          Staff Augmentation
        </Link>
        <Link href="/" className="link link-hover">
          Software Outsourcing
        </Link>
        <Link href="/" className="link link-hover">
          Build Remote Office
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">How to Start</h6>
        <p>You Asked</p>
        <p>We Proceed</p>
        <p>Negotiate</p>
        <p>You Get</p>
      </nav>
    </footer>
  );
};

export default Footer;
