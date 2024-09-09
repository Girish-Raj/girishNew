import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";
import Icon from "./Icon";

import { useThemeProvider } from "../Context/ThemeContext";
declare global {
    interface Window {
      cpSource?: string;
    }
  }

type HeaderProps = {
  sidebarOpen?: boolean;
  isLoggedIn?: boolean;
  setSidebarOpen?: Function;
};

function Header({ sidebarOpen, setSidebarOpen, isLoggedIn }: HeaderProps) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const { currentTheme } = useThemeProvider();
  const darkMode = currentTheme === "dark";

  const hostname =
    (window.location.hostname || "").replace(/www./, "") || "check-point.live";

  const isNauka = hostname.indexOf("nauka") !== -1;

  let cpSource = window?.cpSource?.toLowerCase();
  if (cpSource != "yubha") {
    cpSource = "";
  }

  return (
    <header className="sticky top-0 bg-white border-b dark:border-slate-800 dark:bg-slate-800 z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {cpSource ? (
            <img className="logo-img" src={`/sources/${cpSource}.png`} />
          ) : (
            <>
              {isLoggedIn || isNauka ? (
                <img className="logo-img" src={`/logo.png`} />
              ) : (
                <>
                  {darkMode ? (
                    <img
                      className="logo-img-login"
                      src={`/cp-dark-banner.jpg`}
                    />
                  ) : (
                    <img className="logo-img-login" />
                  )}
                </>
              )}
            </>
          )}

          <div className="flex justify-center items-center"></div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            {isLoggedIn ? (
              <>
                <hr className="w-px h-6 bg-slate-200 dark:bg-slate-700 border-none" />
                <UserMenu align="right" />
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
