"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => setSticky(window.scrollY >= 80);
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) =>
    setOpenIndex(openIndex === index ? -1 : index);

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center transition-all duration-300 ${
          sticky
            ? "fixed bg-white/90 shadow-[0_1px_0_0_rgba(59,130,246,0.15)] backdrop-blur-md dark:bg-gray-900/90 dark:shadow-[0_1px_0_0_rgba(129,140,248,0.12)]"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            {/* Logo */}
            <div className="shrink-0 px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo flex items-center gap-2 w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                }`}
              >
                <Image
                  src="/images/riverpe.png"
                  alt="RiverPe Logo"
                  width={36}
                  height={36}
                  className="shrink-0"
                />
                <span className="text-xl font-bold font-[family-name:var(--font-outfit)]">
                  {/* Gradient text on transparent header, solid when sticky */}
                  <span className={sticky
                    ? "text-dark dark:text-white"
                    : "gradient-text"
                  }>
                    RiverPe
                  </span>
                </span>
              </Link>
            </div>

            <div className="flex flex-1 items-center justify-between px-4">
              <div className="lg:flex lg:flex-1 lg:justify-center">
                {/* Mobile hamburger */}
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-dark transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-dark transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-dark transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-8px] -rotate-45" : ""
                    }`}
                  />
                </button>

                {/* Nav */}
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded-lg border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-10">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 font-medium transition-colors duration-200 ${
                              usePathName === menuItem.path
                                ? "text-primary dark:text-primary-light"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-primary-light"
                            }`}
                          >
                            {menuItem.title}
                            {/* Active underline indicator */}
                            {usePathName === menuItem.path && (
                              <span className="absolute bottom-4 left-0 hidden h-[2px] w-full rounded-full bg-primary lg:block" />
                            )}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base font-medium lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-primary-light"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu dark:bg-dark relative top-full left-0 rounded-lg bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu?.map((submenuItem, subIndex) => (
                                <Link
                                  href={submenuItem.path!}
                                  key={subIndex}
                                  className="text-dark hover:text-primary block rounded-md py-2.5 text-sm font-medium lg:px-3 dark:text-white/70 dark:hover:text-primary-light"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Right actions */}
              <div className="flex items-center justify-end gap-3 pr-16 lg:pr-0">
                <Link
                  href="/signin"
                  className="text-dark hidden px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:text-primary md:block dark:text-white/80 dark:hover:text-primary-light"
                >
                  Sign In
                </Link>
                <div className="hidden md:block">
                  <Link
                    href="/contact"
                    className="btn btn-primary text-sm"
                  >
                    Contact Sales
                  </Link>
                </div>
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
