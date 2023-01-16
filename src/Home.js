import React from "react";

import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import profile_pic from './screenshots/pfp.jpg';

const Home = () => {
    return (
        <div>
            <div className={"relative text-gray-300 px-20 py-10"}>
                <h1 className={""}>Ethan MacDonald
                    (<a className={"text-cyan-600"} href={"https://github.com/emd22"}>@emd22</a>)
                </h1>
                <div className={"grid md:grid-cols-2 sm:grid-cols-1 gap-10"}>
                    <img className={"rounded-xl border-2 border-cyan-900 max-w-10"} src={profile_pic} alt={"Picture of me"}/>
                    <div>
                        <p> Hi there! I am a software developer from Sydney, Nova Scotia and program
                            primarily in C/C++, Python, Lua, and can take any other language you throw at me.
                            I am currently studying Computer Science at Dalhousie University and am in my first year.

                        </p>
                        <br/>
                        <p>
                            You can view some of the projects I have worked on either on my <a href={"https://github.com/emd22"}>Github page</a>, or
                            in the <a href={"/projects"}>Projects</a> section of this website!
                        </p>
                    </div>
                </div>
            </div>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
        </div>
    );
}

export default Home;