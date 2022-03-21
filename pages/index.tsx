import type { NextPage, NextPageContext } from "next";
import Head from "next/head";

import {
  Fragment,
  PropsWithoutRef,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

import { useTimeoutFn } from "react-use";

import styles from "../styles/index.module.css";
import { GrayTranspButton } from "../components/grayTranspButton";

export const getStaticProps = async (context: NextPageContext) => ({
  props: {},
});

interface StyledDisclosureProps
  extends Omit<PropsWithoutRef<typeof Disclosure>, "Button" | "Panel"> {
  open: boolean;
  title: string;
  children: ReactNode;
}

function StyledDisclosure(props: StyledDisclosureProps) {
  const disclosureButtonClasses =
    "flex justify-between px-4 py-2 w-full text-sm font-medium text-left text-blue-900 bg-white rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75";

  return (
    <Disclosure {...props} defaultOpen={props.open}>
      {({ open }) => (
        <div>
          <Disclosure.Button className={disclosureButtonClasses}>
            <span>{props.title}</span>
            <ChevronUpIcon
              className={`${
                open ? "transform rotate-180" : ""
              } w-5 h-5 text-blue-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-900">
            {props.children}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

function FoldableDisclosures() {
  let [isShowing, setIsShowing] = useState(false);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);

  useEffect(() => setIsShowing(true), []);

  return (
    <Transition
      as={Fragment}
      show={isShowing}
      enter="transform transition duration-[800ms]"
      enterFrom="opacity-0 rotate-[-10deg] scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <div className="px-4 pt-8 w-full">
        <div
          className={`p-2 mx-auto w-full max-w-lg bg-white/75 rounded-2xl ${styles.shadow} mv-10 backdrop-blur-xl flex flex-col gap-1`}
        >
          <StyledDisclosure open={true} title="Donate!">
            <a
              href="https://www.comebackalive.in.ua/donate"
              className="hover:underline hover:text-blue-500"
            >
              <b>🤍 COME BACK ALIVE</b> - &quot;Since its birth in 2014, Come
              Back Alive has become the largest foundation providing support to
              the Ukrainian Armed Forces.&quot;
            </a>
          </StyledDisclosure>
          <StyledDisclosure open={true} title="Support Ukrainian Developers">
            <div className="prose-sm">
              <a
                href="https://github.com/chernivtsijs/made-in-ukraine"
                className="hover:underline hover:text-blue-500"
              >
                <div>
                  <b> Made in Ukraine </b> - A collection of the best projects
                  that were made and mainly contributed by Ukrainian developers
                </div>
              </a>
              <p className="mb-1"> Some of examples are: </p>
              <h4 className="mt-0">
                <a
                  href="https://github.com/trekhleb/javascript-algorithms"
                  className="hover:underline hover:text-blue-500"
                >
                  JavaScript Algorithms and Data Structures by Oleksii Trekhleb
                  📝
                </a>
              </h4>
              <h4>
                <a
                  href="https://github.com/ansible/ansible"
                  className="hover:underline hover:text-blue-500"
                >
                  Ansible co-maintained by Sviatoslav Sydorenko / Red Hat
                  Ansible
                </a>
              </h4>
              <h4>
                <a
                  href="https://github.com/Leaflet/Leaflet"
                  className="hover:underline hover:text-blue-500"
                >
                  Leaflet 🍃 by Vladimir Agafonkin - JavaScript library for
                  mobile-friendly interactive maps
                </a>
              </h4>
            </div>
          </StyledDisclosure>
          <StyledDisclosure open={true} title="👷 Work In Progress">
            <div>
              <p className="mb-2">
                This page is a work in progress and I will be adding more
                content through the week!.
              </p>
              <p className="mb-2">
                If you&#39;re interested you can help me by sending me links
                with useful content that can help in supporting the Ukrainian
                people.
              </p>
              <p className="mb-2">
                Contact-me on:{" "}
                <a
                  href="mailto:juniormateusknd@gmail.com"
                  className="hover:underline hover:text-blue-500"
                >
                  juniormateusknd@gmail.com
                </a>
              </p>
            </div>
          </StyledDisclosure>
        </div>
      </div>
    </Transition>
  );
}

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-yellow-400 relative">
      <div className="py-12 h-screen overflow-y-scroll overflow-x-hidden relative z-10">
        <Head>
          <title>Help Ukraine!</title>
          <meta
            name="description"
            content="A collection of useful resources aimed at those who are interested in supporting the people in Ukraine."
          />
        </Head>
        <main className="pl-2 pr-2">
          <div className="flex relative flex-col justify-center items-center mt-8 mb-8 rounded-xl">
            <h1
              className="text-5xl text-center text-white font-cursive
              text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-200 drop-shadow-md mb-4"
            >
              Support the people in Ukraine!
            </h1>
            <h2
              className="text-xl text-center text-white font-cursive
              text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-200 drop-shadow-md"
            >
              <i>
                A collection of useful resources aimed at those who are
                interested in supporting the people in Ukraine.{" "}
              </i>
            </h2>
          </div>
          <div className="">
            <div className="flex relative flex-col justify-center items-center mt-8 mb-12 rounded-xl">
              <FoldableDisclosures />
            </div>

            <div className="flex relative justify-center items-center gap-4 flex-wrap">
              <GrayTranspButton
                onClick={() => {
                  console.log("meta: ");
                  return (window.location.href =
                    "https://www.comebackalive.in.ua/donate");
                }}
              >
                Support Ukraine
              </GrayTranspButton>
            </div>

            <div className="w-full">
              <p className="font-md m-auto text-center text-white mt-10 drop-shadow-sm">
                <a
                  href="https://matj.dev/"
                  className="hover:underline hover:text-blue-100"
                >
                  <p className="mb-2">
                    <i>Hi There! 👋</i>
                  </p>
                  <p>
                    <i>
                      I am Mateus, a brazilian developer who loves doing cool
                      stuff!
                    </i>
                  </p>
                  <p>
                    <i>(Click to read more)</i>
                  </p>
                </a>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
