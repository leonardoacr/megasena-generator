import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "./Menu";

const Header = () => {
  const router = useRouter();

  const isGraphPage = router.pathname === "/graph";

  const routes = [
    { name: "Home", path: "/" },
    { name: "Dashboards", path: "/dashboards" },
    { name: "Graph", path: "/graph" },
  ];

  return (
    <>
      <div
        className={`flex h-16 items-center ${
          isGraphPage ? "justify-between" : "justify-center"
        } bg-background-header pl-10`}
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 100 }}
      >
        <Menu />
        <button>
          <Link href="/">
            <div className="flex items-center">
              <Image
                className="grayscale filter"
                src="/megasena.svg"
                width={40}
                height={10}
                alt="lottery-icon"
              />
              <span className="ml-2 text-lg font-bold text-white">
                MEGASENA GENERATOR
              </span>
            </div>
          </Link>
        </button>
        {isGraphPage && (
          <div className="">
            <button>
              <Link href="/dashboards">
                <Image
                  className="mr-5 invert filter"
                  src="/return-page.svg"
                  width={30}
                  height={50}
                  alt="lottery-icon"
                />
              </Link>
            </button>
          </div>
        )}
      </div>
      <hr className="mt-16 border-t border-gray-600" />
      <div className="flex h-10 items-center justify-center bg-background-header text-gray-400">
        {routes.map((route) => (
          <Link key={route.path} href={route.path}>
            <span
              className={`mx-2 cursor-pointer font-bold ${
                router.pathname === route.path ? "text-purple-700" : ""
              }`}
            >
              {route.name}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
