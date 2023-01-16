import React from "react";

const Contact = () => {
    return (
        <div className={"relative text-gray-300 px-20 py-10"}>
            <h1 className={""}>Contact me</h1>
            <p>To contact me, you can email me at <img className={"inline-block "} src={"email-addr.png"}/> for any questions or suggestions! <br/>
                You can also find me through my Github profile at <a className={"text-cyan-600"} href={"https://github.com/emd22"}>@emd22</a> or on Discord at <a href={"https://discordapp.com/users/483393362544689189"}>emd22#5982</a>.
            </p>
        </div>
    );
}
export default Contact;