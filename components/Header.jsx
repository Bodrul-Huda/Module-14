"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const router = useRouter();

  const currentPath = usePathname();

  const Logout = async () => {
    const res = await fetch("api/login");
    const json = await res.json();
    if (json["status"] === true) {
      router.replace("/");
    }
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="w-full bg-teal-950 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <h2 className="text-2xl text-white font-bold">MyApp</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {currentPath === "/dashboard" ? (
                  <li>
                    <Link href="/">
                      <button
                        onClick={() => Logout()}
                        className="bg-gradient-to-r text-slate-100 from-blue-800 to-blue-600 py-2 px-4 rounded-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 "
                      >
                        Logout
                      </button>
                    </Link>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link href="/login">
                        <button className="bg-gradient-to-r text-slate-100 from-blue-800 to-blue-600 py-2 px-4 rounded-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 ">
                          Login
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href="/register">
                        <button className="bg-gradient-to-r text-slate-100 from-orange-800 to-orange-600 py-2 px-4 rounded-md hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-800 ">
                          Register
                        </button>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
