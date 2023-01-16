import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Nav';
import Projects from './Projects';
import About from './About';
import Home from './Home';
import Contact from './Contact';

const Bubble = (args) => {
    return (
        <div className={
            "absolute inline-block h-[30em] w-[30em] rounded-full right-[0em] top-[5em]" + args.color}>
        </div>
    );
}

export default function App() {
    return (
        <Router>

        <body className={"min-h-screen bg-slate-900"}>
        <div className={"blur-[100px]"}>
            <div className={
                "absolute bg-cyan-900/100 inline-block h-[30em] w-[30em] rounded-full right-[0em] top-[5em]"}>
            </div>
            <div className={"absolute inline-block bg-blue-900/50 h-[30em] w-[30em] rounded-full left-[0em] top-[2em] "}></div>
            <div className={"absolute inline-block bg-blue-900/100 h-[20em] w-[30em] rounded-full left-[4em] top-[30em] "}></div>
            <div className={"absolute inline-block bg-blue-900/50 h-[20em] w-[30em] rounded-full right-[0em] top-[3em] "}></div>
        </div>
        <Navbar />
        <div className={"flex justify-center"}>
        <div className={"max-w-[100em]"}>
            <Routes>
                <Route exact path ='/' exact element={<Home />} />
                <Route path={"/projects"} element={<Projects/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
            </Routes>
        </div>
        </div>

        </body>
        </Router>
    );
}
