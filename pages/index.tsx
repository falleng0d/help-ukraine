import type { NextPage, NextPageContext } from "next";
import Head from "next/head";

import { Fragment, useEffect, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

import { useTimeoutFn } from "react-use";

import styles from "../styles/index.module.css";
import { GrayTranspButton } from "../components/grayTranspButton";

export const getStaticProps = async (context: NextPageContext) => ({});

function FoldableDisclosures() {
  let [isShowing, setIsShowing] = useState(false);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);

  useEffect(() => setIsShowing(true), []);

  let disclosureButtonClasses =
    "flex justify-between px-4 py-2 w-full text-sm font-medium text-left text-orange-900 bg-white rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75";

  return (
    <Transition
      as={Fragment}
      show={isShowing}
      enter="transform transition duration-[400ms]"
      enterFrom="opacity-0 rotate-[-10deg] scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <div className="px-4 pt-8 w-full">
        <div
          className={`p-2 mx-auto w-full max-w-md  bg-white/75 rounded-2xl ${styles.shadow} mv-10 backdrop-blur-xl`}
        >
          <Disclosure defaultOpen={true}>
            {({ open }) => (
              <>
                <Disclosure.Button className={disclosureButtonClasses}>
                  <span>DA</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-orange-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-900">
                  Aaaa
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure defaultOpen={true} as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className={disclosureButtonClasses}>
                  <span>DB</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-orange-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-900">
                  Bbbb
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </Transition>
  );
}

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-amber-300 to-orange-500 relative">
      <div className="py-12 h-screen overflow-y-scroll overflow-x-hidden relative z-10">
        <Head>
          <title>Ukrania Matters</title>
          <meta name="description" content="The Waifu Lover's Anime Server" />
        </Head>{" "}
        <main className="pl-2 pr-2">
          <div className="flex relative flex-col justify-center items-center mt-8 mb-12 rounded-xl">
            <h1
              className="text-5xl text-center text-white font-cursive
              text-transparent bg-clip-text bg-gradient-to-br from-white to-orange-200 drop-shadow-md"
            >
              Help Ukraine!{" "}
            </h1>
          </div>
          <div className="flex relative flex-col justify-center items-center">
            <button className="inline-flex justify-center px-4 py-2 text-lg font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Help Ukraine!
            </button>
          </div>
          <div className="">
            <div className="flex relative flex-col justify-center items-center mt-8 mb-12 rounded-xl">
              <FoldableDisclosures />
            </div>

            <div className="flex relative justify-center items-center gap-4 flex-wrap">
              <GrayTranspButton>Support Ukraine</GrayTranspButton>
            </div>

            <div className="w-full">
              <p className="font-md m-auto text-center text-white mt-10 drop-shadow-sm">
                <i> Buy me a cup of coffee. </i> <br /> 🤝{" "}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
