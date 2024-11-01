import Link from "next/link";
import SubscribeForm from "./SubscribeFormHeader";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Menu from "./Menu";

export default function Header({}) {
  const router = useRouter()
  const [showSubscription, setShowSubscription] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  

  useEffect(() => {
    const bodyElement = document.querySelector("body");
  
    if (menuOpen) {
      bodyElement.classList.add("scrollbar-hide");
      bodyElement.style.overflow = "hidden"; // Block scrolling
    } else {
      bodyElement.classList.remove("scrollbar-hide");
      bodyElement.style.overflow = ""; // Reset to default
    }
  
    return () => {
      // Clean up to avoid affecting other parts of the app
      bodyElement.style.overflow = ""; 
    };
  }, [menuOpen]);
  

  const handleSubscribeClick = () => {
    setShowSubscription(true);
  };

  const handleCancel = () => {
    setShowSubscription(false);
  };

  const handleMenuClose = () => {
    setTimeout(() => {
      setMenuOpen(false);
    }, 42);
  };

  const handleMenuToggle = () => {
    // setTimeout(() => {
    setMenuOpen(!menuOpen);
    // }, 42);
  };

  return (
    <header className={`h-20 bg-neutral-700 items-center flex fixed w-full ${router.route.startsWith('/posts') ?"text-neutral-200": "text-neutral-200"} ${router.asPath === "/symbol-trainer" && "text-neutral-500"} `} >
      <nav className="max-w-2xl pt-6 mx-auto flex flex-grow items-center px-4">
        <Link
          className=" absolute bottom- [25px] c3 font-semibold text-2xl hover:text-neutral-200  "
          href="/"
          onClick={handleMenuClose}
        >
          <h1 className="">LeonAndersen</h1>
        </Link>
        <ul className="hidden -mb-1.5 c1:flex gap-x-4 ml-auto    font-medium [470]">
          <li>
            <Link
              className="text- base sm xl text-orange- 500  hover:text-neutral-200 "
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
              <Link
                className="text-  hover:text-neutral-200"
                href="/symbol-trainer"
              >
                Tools
              </Link>
            </li>
          {/* <li className=" flex items-center relative">
            <button
            className="text- sm xl text-red- 500 hover:text-neutral-200 "
              onClick={handleSubscribeClick}
            >
              Subscribe
            </button>
            {showSubscription && (
              <SubscribeForm
                onCancel={handleCancel}
                onSubscribe={handleCancel}
              />
            )}
          </li> */}
        </ul>
        <Menu
          handleMenuToggle2={handleMenuToggle}
          menuOpen={menuOpen}
          handleMenuClose={handleMenuClose}
        />
      </nav>
    </header>
  );
}
