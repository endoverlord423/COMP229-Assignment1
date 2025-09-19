//COMP229-Assignment1, ELijah Stuwe, 301421199, September 19 2025

import Img1 from "./assets/JavaCode.png"

export default function Service() {
    return (
        <>
        <h2>My Services</h2>
        <p>I am very good at coding projects and games with C#, I also have
            experience with web development and java programming.
        </p>
        <img src={Img1} alt="Java Code" width={620}/>
        </>
    );
}