import React from "react";

const About = () => {
    return (
        <div className={"relative text-gray-300 px-20 py-10"}>
            <h1 className={""}>About me</h1>
            <p>&emsp;When it comes to programming, I take massive pride in my work. I make sure that what has to be done
                is done properly, and I will research a project to death. Even for this website I looked for days to find the perfect frontend library
                to suit my needs, even though it would be something that is not familiar to me. For this site, I used <a href={"https://tailwindcss.com/"}>TailwindCSS</a>,
                and <a href={"https://reactjs.org/"}>React</a> for building simple and interactive interfaces. Even though I had not used
                either before, I always want to try new things to improve my knowledge of computer science as a whole. Whether it be
                a JIT compiler, Game engine, custom bootloader, a kernel, networking library, or a website, it is always an absolute blast to
                work on something I love to do.
            </p>
            <br/>
            <p>&emsp;Early on, I started programming in Python when I was first entering Grade 5, and was immediately hooked when
            when I found out about Pygame. I also started using Linux based operating systems since I was in middle school, and since then, i've made kernels, text editors, bootloaders, networking libraries,
            games, and much more. Me and my brother Andrew(@ajmd17) have also participated in a few code jams, including making an interpreted
            language(and a few examples in it!) named <a href={"https://replit.com/talk/challenge/PEACH-programming-language/51581"}>Peach</a>, and an <a href={"https://dos-v2--ajmd17.repl.co/"}>online game</a> about fighting off <i>shitcoins</i>.
            </p>
            <br/>
            <p>&emsp;Soon after, I started a growing interest in game development and all the technologies that go into making a game. For a challenge, I began writing <a href={"https://github.com/emd22/acheron"}>Acheron Engine</a> completely from scratch in C for an added challenge.
                I wanted to learn more about the internals of game development, and the math involved, and this was an amazing learning opportunity and a great stepping stone to my current project.</p>
            <br/>
            <p>&emsp;Currently, me and my brother are building <a href={"https://github.com/krait-games/hyperion-engine"}>Hyperion</a> Game Engine using <u>only</u> modern techniques, and wrote the whole engine completely from scratch for <a href={"https://www.vulkan.org/"}>Vulkan</a>.
                With a custom scripting language and multi-threaded rendering, our game engine gives solid performance
                while also being a great learning tool. We have been developing the engine since January 2022, and have started gaining popularity on Github!
            </p>
            <br/>
        </div>
    );
}
export default About;