"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { sections } from "@/constants";
import { Accessbeta } from "@/components";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Nav onMenuOpenChange={setIsMenuOpen} maxWidth="xl" height="5rem">
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <Image src="/logo.png" width={129} height={40} alt="Fuddy logo" />
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {sections.map((section) => (
          <NavbarItem key={section.name}>
            <a
              className="hover:text-primary-500 transition"
              href={section.href}
            >
              {section.name}
            </a>
          </NavbarItem>
        ))}
        <NavbarItem>
          <a
            className="hover:text-primary-500 transition"
            href="https://blog.fuddy.click/"
            target="_blank"
          >
            Blog
          </a>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="end">
        {/* <NavbarItem>
          <a className="btn btn-outline" href={`${APP_URL}/register`}>
            Registrarse
          </a>
        </NavbarItem>
        <NavbarItem>
          <a className="btn" href={`${APP_URL}/login`}>
            Ingresar
          </a>
        </NavbarItem> */}
        <NavbarMenuItem>
          <a
            className="btn btn-outline"
            href="https://app.fuddy.click/register"
            target="_blank"
          >
            Formar Parte
          </a>
        </NavbarMenuItem>
      </NavbarContent>

      <NavbarMenu className="gap-4">
        {sections.map((section) => (
          <NavbarMenuItem key={section.name}>
            <a
              className="hover:text-primary-500 transition"
              href={section.href}
            >
              {section.name}
            </a>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <a
            className="hover:text-primary-500 transition"
            href="https://blog.fuddy.click/"
            target="_blank"
          >
            Blog
          </a>
        </NavbarMenuItem>
        {/* <NavbarMenuItem>
          <a className="btn btn-outline" href={`${APP_URL}/register`}>
            Registrarse
          </a>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <a className="btn" href={`${APP_URL}/login`}>
            Ingresar
          </a>
        </NavbarMenuItem> */}
        <NavbarMenuItem>
          <NavbarMenuItem>
            <a
              className="btn btn-outline"
              href="https://app.fuddy.click/register"
            >
              Registrarse
            </a>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <a className="btn" href="https://app.fuddy.click">
              Ingresar
            </a>
          </NavbarMenuItem>
        </NavbarMenuItem>
      </NavbarMenu>
    </Nav>
  );
}

export default Navbar;
