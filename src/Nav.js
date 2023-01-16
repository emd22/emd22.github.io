
const Navbar = () => {
    return (
        <div className={"border-b-2 border-gray-800 dark:bg-black"}>
            <div className="flex px-6 py-6 mx-auto bg-white dark:bg-slate-900/50 uppercase text-black dark:text-gray-200">
                <a href={"/"} className={"no-underline hover:text-gray-500"}>home</a>
                <div className={"right-0 space-x-5 mx-6 absolute"}>
                    <a href="/projects" className={"no-underline hover:text-gray-500"}>projects</a>
                    <a href="/about" className={"no-underline hover:text-gray-500"}>about</a>
                    <a href="/contact" className={"no-underline hover:text-gray-500"}>contact</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

