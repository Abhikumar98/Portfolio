import Head from "next/head";
import Image from "next/image";

export default function Home() {
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
        },
        {
            skillName: "Vercel",
            iconPath: "/vercel.svg",
        },
    ];

    return (
        <div className="container mx-12 grid grid-cols-12 text-blue-500 font-title xl:mx-24 lg:mx-20 md:mx-16 sm:mx-14">
            <Head>
                <title>Abhishek Kumar</title>
            </Head>
            <div className="mt-16 col-span-full">
                <div className=" text-xl pb-5">Hey </div>
                <div className="text-2xl font-semibold text-blue-600">
                    I'm Abhishek kumar
                </div>
            </div>
            <p className="col-start-1 col-end-12 mt-10 text-xl md:col-end-12 sm:col-end-12">
                I'm a Frontend Web Developer, currently located in Bangalore,
                India (GMT +5:30).
            </p>
            <p className="col-start-1 col-end-12 mt-10 text-xl">
                Developer at{" "}
                <a
                    href="https://zomentum.com"
                    target="__blank"
                    className=" hover:text-blue-600 hover:underline font-semibold leading-3 mx-1 text-blue-600"
                >
                    Zomentum
                </a>
            </p>
            <div className="mt-10 col-span-full text-xl font-semibold">
                I know ⤵
            </div>
            <div className="mt-5 flex flex-wrap col-start-1 col-end-12 md:col-end-12 sm:col-end-12">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={`grid place-items-center mb-8 mr-8`}
                    >
                        <Image width={56} height={56} src={skill.iconPath} />
                        <span className="text-blue-600 text-md mt-2">
                            {skill.skillName}
                        </span>
                    </div>
                ))}
            </div>
            <div className="col-span-full my-6">
                I also dabble in NodeJS and Express.
            </div>
            <div className="col-span-full">
                You can reach me at{" "}
                <a
                    href="mailto:abhishekkumar35962@gmail.com?subject=Hey Abhishek, I was checking out your portfolio&body=👋 Hey, wanted to have a quick chat."
                    className="hover:underline font-semibold text-blue-600"
                >
                    abhishekkumar35962@gmail.com
                </a>
            </div>
            <footer className="my-6 flex items-center col-start-1 col-end-6 ">
                <a
                    className="mr-5"
                    target="__blank"
                    href="https://github.com/Abhikumar98"
                >
                    <Image width={24} height={24} src="/github.svg" />
                </a>
                <a
                    className="mr-5"
                    target="__blank"
                    href="https://www.linkedin.com/in/abhishekkumar98/"
                >
                    <Image width={24} height={24} src="/linkedin.svg" />
                </a>
                <a target="__blank" href="https://twitter.com/abhikumar_98">
                    <Image width={24} height={24} src="/twitter.svg" />
                </a>
            </footer>
        </div>
    );
}
