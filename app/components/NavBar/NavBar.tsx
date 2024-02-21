"use client";
import Link from "next/link";
import React, { useCallback, useMemo } from "react";
import { NavLinksT, ChildrenT, ButtonsNavBarT } from "./data.d";
import { usePathname } from "next/navigation";
import Image from "next/image";
type Props = {
  links: NavLinksT[];
  buttons?: ButtonsNavBarT[];
};

const NavBar = (props: Props) => {
  const { links, buttons } = props;
  const pathname = usePathname();
  const isActive = useCallback(
    (path: string) => {
      if (path === "/" && pathname === "/") {
        return true;
      }

      return path === pathname.slice(1);
    },
    [pathname]
  );
  const renderLinks = links.map((link: NavLinksT) => {
    if (!link?.children) {
      return (
        <li key={link.id}>
          <Link
            href={link.to}
            className={isActive(link.to) ? "activeButton" : ""}>
            {link.title}
          </Link>
        </li>
      );
    } else {
      return (
        <li key={link.id}>
          <details>
            <summary>{link.title}</summary>
            <ul className="p-2">
              {link.children?.map((child: ChildrenT) => {
                return (
                  <li key={child.id}>
                    <Link
                      href={child.to}
                      className={isActive(link.to) ? "activeButton" : ""}>
                      {child.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </details>
        </li>
      );
    }
  });

  const renderButtons = buttons?.map((button: ButtonsNavBarT) => {
    if (button.type === "link") {
      return (
        <Link
          key={button.id}
          href={button.link!}
          className={`text-sm ${isActive(button.link!) ? "activeLink" : ""}`}>
          {button.title}
        </Link>
      );
    } else {
      return (
        <button
          key={button.id}
          className={`btn text-black ${
            isActive(button.link!) ? "activeButton" : ""
          }`}
          onClick={button.onClick}>
          {button.title}
        </button>
      );
    }
  });
  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-52 xs:px-4 sm:px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {renderLinks}
          </ul>
        </div>
        <Image
          src="/images/logo.png"
          loading="lazy"
          alt="Logo"
          width={40}
          height={40}
          className="xl:ml-0 lg:ml-1 md:ml-2 sm:ml-2 xs:ml-2"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{renderLinks}</ul>
      </div>
      <div className="navbar-end">{renderButtons}</div>
    </div>
  );
};

export default NavBar;
