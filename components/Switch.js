/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { Switch as HSwitch } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Switch = (props) => {
    console.log(props.enabled, props.enabled ? "bg-primary" : "bg-link");
    return (
        <HSwitch
            checked={props.enabled}
            onChange={(value) => props.onChange(value)}
            className={classNames(
                `${props.enabled ? "bg-primary" : "bg-link"}
                bg-background relative inline-flex flex-shrink-0 h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none ring-2 ${
                    props.enabled ? "ring-link" : "ring-transparent"
                }`
            )}
        >
            <span className="sr-only">Use setting</span>
            <span
                className={classNames(
                    props.enabled ? "translate-x-7" : "translate-x-0",
                    "pointer-events-none relative inline-block h-6 w-6 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                )}
            >
                <span
                    className={classNames(
                        props.enabled
                            ? "opacity-0 ease-out duration-100"
                            : "opacity-100 ease-in duration-200",
                        "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity  text-link"
                    )}
                    aria-hidden="true"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>
                </span>
                <span
                    className={classNames(
                        props.enabled
                            ? "opacity-100 ease-in duration-200"
                            : "opacity-0 ease-out duration-100",
                        "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity bg-background rounded-full border-2 text-link"
                    )}
                    aria-hidden="true"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </svg>
                </span>
            </span>
        </HSwitch>
    );
};

export default Switch;
