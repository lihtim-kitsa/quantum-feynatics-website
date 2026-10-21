"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setOpen(false);
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        headerRef.current?.querySelector<HTMLButtonElement>("#mobile-menu-button")?.focus();
      }
    }
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);
  return (
<header id="section-header" ref={headerRef}>
        <div className="container">
            <div className="header-nav-container glass-effect">
                <div className="header-content">
                    <a href="#section-hero" className="logo-link">
                        <img src={asset("quantum-feynatics-group-high-resolution-logo-white-transparent.png")}
                            alt="Q Logo" className="logo-img" width="160" height="40" />
                    </a>
                    <nav className="desktop-nav" aria-label="Main navigation">
                        <ul>
                            <li><a href="#section-hero">Home</a></li>
                            <li><a href="#section-glance">About</a></li>
                            <li><a href="#section-info">Details</a></li>
                            <li><a href="#section-speakers">Speakers</a></li>
                            <li><a href="#section-team">Team</a></li>
                            <li><a href="#section-timeline">Timeline</a></li>
                            <li><a href="#section-contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="header-actions">
                        <a href="#section-contact"
                            className="register-button-desktop">Updates</a>
                        <div className="mobile-menu-button-container">
                            <button id="mobile-menu-button" type="button" aria-label="Toggle navigation" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
                                <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mobile-menu" className={`mobile-menu glass-effect${open ? "" : " hidden"}`} onClick={(event) => { if (event.target instanceof Element && event.target.closest("a")) setOpen(false); }}>
                <ul>
                    <li><a href="#section-hero">Home</a></li>
                    <li><a href="#section-glance">About</a></li>
                    <li><a href="#section-info">Details</a></li>
                    <li><a href="#section-speakers">Speakers</a></li>
                    <li><a href="#section-team">Team</a></li>
                    <li><a href="#section-timeline">Timeline</a></li>
                    <li><a href="#section-contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </header>
  );
}
