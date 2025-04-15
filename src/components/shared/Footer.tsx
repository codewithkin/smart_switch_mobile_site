"use client";
import Link from "next/link";
import { FaWhatsapp, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

function Footer() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Shop",
      href: "/shop",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Cart",
      href: "/cart",
    },
  ];

  const contactInfo = {
    address: "Shop #18 2nd Floor Meikles Market, Mutare, Zimbabwe",
    phone: "+263 78 353 2164",
    email: "support@smartswitch.co.zw",
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://wa.me/+263783532164", // Replace with the actual WhatsApp link
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      href: "https://facebook.com/SmartSwitchMobile", // Replace with the actual Facebook link
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      href: "https://tiktok.com/@SmartSwitchMobile", // Replace with the actual TikTok link
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com/SmartSwitchMobileZW", // Replace with the actual Instagram link
    },
  ];

  return (
    <footer className="bg-slate-200 p-4 md:p-8 lg:p-16 flex flex-col gap-16">
      {/* Brand name and links */}
      <article className="flex flex-col md:flex-row justify-between items-center">
        {/* Branding */}
        <article className="flex flex-col">
          <h2 className="text-2xl font-semibold">Smart Switch Mobile</h2>
          <p className="text-sm max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et
            pariatur similique id voluptates
          </p>
        </article>

        {/* Links */}
        <article className="flex flex-col gap-4 items-start">
          {links.map((link, index: number) => (
            <Link key={index} href={link.href}>
              {link.name}
            </Link>
          ))}
        </article>

        {/* Contact info */}
        <article className="flex flex-col gap-4">
          <article>
            <h4 className="text-md font-medium">Address</h4>
            <p>{contactInfo.address}</p>
          </article>

          <article>
            <h4 className="text-md font-medium">Email</h4>
            <p>{contactInfo.email}</p>
          </article>

          <article>
            <h4 className="text-md font-medium">Phone</h4>
            <p>{contactInfo.phone}</p>
          </article>
        </article>
      </article>

      {/* Copyright and social media links */}
      <article className="flex justify-between items-center">
        <h4 className="">
          Copyright &copy; {new Date().getFullYear()} Smart Switch Mobile
        </h4>

        {/* Social media links */}
        <article className="flex gap-2 items-center">
          {socialLinks.map(
            (
              socialLink: {
                name: string;
                icon: typeof FaFacebook;
                href: string;
              },
              index: number,
            ) => (
              <Link key={index} href={socialLink.href}>
                <socialLink.icon size={24} className="w-4 h-4" />
              </Link>
            ),
          )}
        </article>
      </article>
    </footer>
  );
}

export default Footer;
