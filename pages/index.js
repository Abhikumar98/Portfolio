import Head from "next/head";
import Image from "next/image";

export default function Home() {
    const skills = [
        {
            skillName: "JavaScript",
            iconPath: "/javascript.png",
        },
        {
            skillName: "TypeScript",
            iconPath: "/typescript.png",
        },
        {
            skillName: "React",
            iconPath: "/react.png",
        },
        {
            skillName: "Redux",
            iconPath: "/redux.png",
        },
        {
            skillName: "Firebase",
            iconPath: "/firebase.png",
        },
    ];

    return (
        <div className="container mx-auto grid grid-cols-12 text-blue-400 font-title">
            <Head>
                <title>Abhishek Kumar</title>
            </Head>
            <div className="mt-16 col-span-full">
                <div className=" text-xl pb-5">Hey </div>
                <div className="text-2xl font-semibold text-blue-500">
                    I'm Abhishek kumar
                </div>
            </div>
            <p className="col-start-1 col-end-8 mt-10 text-xl font-montserrat">
                I'm a Frontend Web Developer, currently located in Bangalore.
            </p>
            <p className="col-start-1 col-end-8 mt-10 text-xl">
                Developer at{" "}
                <a
                    href="https://zomentum.com"
                    target="__blank"
                    className=" hover:text-blue-600 hover:underline font-semibold leading-3 mx-1 text-blue-500"
                >
                    Zomentum
                </a>
            </p>
            <div className="mt-10 col-span-full text-xl font-semibold">
                I know ⤵
            </div>
            <div className="mt-5 flex flex-wrap col-start-1 col-end-8">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={`grid place-items-center mb-2 mr-8`}
                    >
                        <img width={56} height={56} src={skill.iconPath} />
                        <span className="text-blue-500 text-md mt-2">
                            {skill.skillName}
                        </span>
                    </div>
                ))}
            </div>
            <div className="col-span-full my-6">
                I also dabble in NodeJS and Express 😛{" "}
            </div>
            <div className="col-span-full">
                You can reach me at{" "}
                <a
                    href=""
                    className="hover:underline font-semibold text-blue-500"
                >
                    abhishekkumar35962@gmail.com
                </a>
            </div>
            <footer className="mt-10 flex col-span-1">
                <a target="__blank" href="https://github.com/Abhikumar98">
                    <img
                        width={32}
                        height={32}
                        src="/github.png"
                        className="mr-5"
                    />
                </a>
                <a target="__blank" href="https://twitter.com/abhikumar_98">
                    <img width={32} height={32} src="/twitter.png" />
                </a>
            </footer>
        </div>
    );
}
