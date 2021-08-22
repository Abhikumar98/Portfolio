import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Switch = dynamic(() => import("../components/Switch"), {
    ssr: false,
});

const App = () => {
    const cachedTheme =
        typeof localStorage !== "undefined" && localStorage.getItem("theme");
    const isDarkTheme = cachedTheme === "dark";

    const isDarkMode = !cachedTheme
        ? typeof window !== "undefined" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        : isDarkTheme;

    const [darkMode, setDarkMode] = useState(isDarkMode);

    const updateTheme = (value) => {
        const theme = value ? "dark" : "light";
        localStorage.setItem("theme", theme);
        setDarkMode(value);
    };

    const updatePageTheme = () => {
        const theme = {
            primaryColor: "",
            secondaryColor: "",
            backgroundColor: "",
            link: "",
        };

        if (darkMode) {
            theme.primaryColor = "#b8c1ec";
            theme.secondaryColor = "#fffffe";
            theme.backgroundColor = "#232946";
            theme.link = "#ffffff";
        } else {
            theme.primaryColor = "#0d0d0d";
            theme.secondaryColor = "#2a2a2a";
            theme.backgroundColor = "#eff0f3";
            theme.link = "#ff8e3c";
        }

        document.documentElement.style.setProperty(
            "--primaryColor",
            theme.primaryColor
        );
        document.documentElement.style.setProperty(
            "--secondaryColor",
            theme.secondaryColor
        );
        document.documentElement.style.setProperty(
            "--backgroundColor",
            theme.backgroundColor
        );
        document.documentElement.style.setProperty("--link", theme.link);
    };

    useEffect(() => {
        updatePageTheme();
    }, [darkMode]);

    useEffect(() => {
        updateTheme(darkMode);
    }, []);

    console.log(darkMode, isDarkMode);

    const skills = [
        {
            skillName: "JavaScript",
            iconPath: "/javascript.svg",
        },
        {
            skillName: "TypeScript",
            iconPath: "/typescript.svg",
        },
        {
            skillName: "React",
            iconPath: "/react.svg",
        },
        {
            skillName: "Redux",
            iconPath: "/redux.svg",
        },
        {
            skillName: "Firebase",
            iconPath: "/firebase.svg",
        },
        {
            skillName: "NextJs",
            iconPath: "/nextjs.svg",
            darkPath: "/nextjsdark.svg",
            dark: true,
        },
        {
            skillName: "Vercel",
            iconPath: "/vercel.svg",
            darkPath: "/verceldark.svg",
            dark: true,
        },
    ];

    return (
        <div className="mx-none h-screen w-screen p-12 pt-6 grid grid-cols-12 text-primary font-title xl:p-24 xl:pt-12 lg:p-20 lg:pt-10 md:p-16 md:pt-8 sm:p-14 sm:p-7 bg-background overflow-y-auto">
            <div className="col-start-11 mb-6">
                <Switch enabled={darkMode} onChange={updateTheme} />
            </div>
            <div className=" col-span-full">
                <div className=" text-xl pb-5">Hey 👋</div>
                <h1 className="text-2xl font-semibold">I'm Abhishek kumar</h1>
            </div>
            <p className="my-4 sm:my-0 col-start-1 col-end-12  text-xl md:col-end-12 sm:col-end-12">
                I'm a Frontend Web Developer, currently located in Bangalore,
                India (GMT +5:30).
            </p>
            <p className="my-4 sm:my-0 col-start-1 col-end-12  text-xl">
                Developer at{" "}
                <a
                    href="https://zomentum.com"
                    target="__blank"
                    className="text-link hover:underline font-semibold leading-3 mx-1 text-secondary"
                >
                    Zomentum
                </a>
            </p>
            <div className=" col-span-full text-xl font-semibold">I know ⤵</div>
            <div className="mt-5 flex flex-wrap col-start-1 col-end-12 md:col-end-12 sm:col-end-12">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={`grid place-items-center mb-8 mr-8`}
                    >
                        <Image
                            width={56}
                            height={56}
                            src={
                                skill.dark && darkMode
                                    ? skill.darkPath
                                    : skill.iconPath
                            }
                            alt={skill.skillName}
                        />
                        <span className="text-primary text-md mt-2">
                            {skill.skillName}
                        </span>
                    </div>
                ))}
            </div>
            <div className="col-span-full ">
                I also dabble in NodeJS and Express.
            </div>
            <div className="my-4 sm:my-0 col-span-full">
                You can reach me at{" "}
                <a
                    href="mailto:abhishekkumar35962@gmail.com?subject=Hey Abhishek, I was checking out your portfolio&body=👋 Hey, wanted to have a quick chat."
                    className="text-link hover:underline font-semibold"
                >
                    abhishekkumar35962@gmail.com
                </a>
            </div>
            <footer className="my-4 pb-4 sm:my-0 sm:pb-0 flex items-center col-start-1 col-end-6 ">
                <a
                    className="mr-5"
                    target="__blank"
                    href="https://github.com/Abhikumar98"
                >
                    <Image
                        alt="Github"
                        width={24}
                        height={24}
                        src={darkMode ? "/githubdark.svg" : "/github.svg"}
                    />
                </a>
                <a
                    className="mr-5"
                    target="__blank"
                    href="https://www.linkedin.com/in/abhishekkumar98/"
                >
                    <Image
                        alt="LinkedIn"
                        width={24}
                        height={24}
                        src="/linkedin.svg"
                    />
                </a>
                <a target="__blank" href="https://twitter.com/abhikumar_98">
                    <Image
                        alt="Twitter"
                        width={24}
                        height={24}
                        src="/twitter.svg"
                    />
                </a>
            </footer>
        </div>
    );
};

export default App;
