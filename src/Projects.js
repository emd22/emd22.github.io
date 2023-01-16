import React from "react";

import pic_acheron from './screenshots/multiple-point-shadows.png';
import pic_hyperion from './screenshots/screenshot68.png';

function Card(args) {
    return (
        <div className={"flex flex-wrap my-3 mx-3 bg-slate-800 rounded-xl shadow-xl"}>
            <img className={"object-cover lg:min-h-96 rounded-t-xl max-w-full"} src={args.image}/>
            <div className={"px-5 py-4"}>
                <h2 className={"font-bold"}>{args.title}</h2>
                <p>{args.text}</p>
            </div>
        </div>
    );
}

const Projects = () => {
    return (
        <div className={"relative text-gray-300 px-10 py-10"}>
            <h1 className={""}>Projects</h1>
            <div className={"grid md:grid-cols-2 xl:grid-cols-3"}>
                <Card title={"Acheron3D"} image={pic_acheron} text={"A 3D OpenGL game engine written in C99 for fast game development."}  />
                <Card title={"Hyperion Engine"} image={pic_hyperion} text={"A powerful Vulkan based game engine built for modern features and fast speed."}  />
                <Card title={"Pop Kernel"} image={pic_hyperion} text={"An x86 kernel written in C and Assembler for learning, writing drivers and testing hardware."}  />
            </div>
        </div>
    );
}
export default Projects;