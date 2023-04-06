import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const isGraphPage = router.pathname === "/graph";

  return (
    <div
      className={`flex h-16 items-center ${
        isGraphPage ? "justify-between" : "justify-center"
      } bg-background-header pl-10`}
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 100 }}
    >
      <div></div>
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
  );
};

export default Header;
