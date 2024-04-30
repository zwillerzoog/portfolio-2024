"use client";
import React, { useState, useEffect, useContext } from "react";

import Link from "next/link";
import { Toolbar, IconButton, Drawer, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Contact from "../components/contact";
import SiteTitle from "../components/SiteTitle";

const headersData = [
  {
    label: "Login",
    href: "/login",
  },
  {
    label: "View Rating History",
    href: "/history",
  },
];

export default function Header(props: any) {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
    showHeader: false,
  });

  const { mobileView, drawerOpen, showHeader } = state;

  useEffect(() => {
    setTimeout(() => {
      setState((prevState) => ({ ...prevState, showHeader: true }));
    }, 2000);
  });

  useEffect(() => {
    const setResponsiveness = () => {
      if (window.innerWidth >= 768 && mobileView) handleDrawerClose();
      return window.innerWidth < 768
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, [mobileView]);

  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));

  const handleDrawerClose = () => {
    setState((prevState) => ({ ...prevState, drawerOpen: false }));
  };

  const displayMobile = () => {
    return (
      <Toolbar>
        <IconButton
          //   sx={{ marginLeft: "auto" }}
          //   edge={"start"}
          //   anchor="right"
          //   color="inherit"
          aria-label="menu"
          aria-haspopup="true"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
          <IconButton
            // sx={{ borderRadius: 0, marginLeft: "auto" }}
            // anchor="right"
            color="inherit"
            aria-label="close"
            onClick={handleDrawerClose}
          >
            <CloseIcon sx={{ marginLeft: "auto" }} />
          </IconButton>
          <div className="drawerContainer">{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          key={label + href}
          //   component={RouterLink}
          href={href}
          color="inherit"
          style={{ textDecoration: "none" }}
        >
          <MenuItem key={label + href} sx={{ padding: "6px 30px" }}>
            {label}
          </MenuItem>
        </Link>
      );
    });
  };

  const displayDesktop = () => {
    const responsiveMargins = {
      md: "0 32px",
      sm: "0 16px",
    };

    const showInitialProps = {
      showInitial: props.showInitial,
    };

    return (
      <>
        <SiteTitle {...showInitialProps} />
        {showHeader && (
          <div className="w-screen flex relative box-shadow box shadow-md fade-in-box">
            <div className="flex m-auto items-center">
              <Link href="/about" className="m-8 color-hover">
                About Me
              </Link>
              <Link href="/work" className="m-8 color-hover">
               Experience
              </Link>
              {/* <Link href="/Resume" className="m-8 color-hover">
                Resume
              </Link> */}
            </div>
            <div className="absolute right-0 m-8 color-hover">
              <Contact />
            </div>
          </div>
        )}
      </>
    );
  };

  return <>{mobileView ? displayMobile() : displayDesktop()}</>;
}
