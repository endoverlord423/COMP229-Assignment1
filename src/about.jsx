//COMP229-Assignment1, ELijah Stuwe, 301421199, September 19 2025

import Photo from "./assets/Parrot.jpg"
import Resume from "./assets/Elijah STUWE resume.pdf"

export default function About() {
    return (
        <>
        <h2>About Me</h2>
        <p>My name is Elijah Todd Stuwe, I am 20 years old and currently taking
            the game programming class. I decided to do this for school after
            takling some programming classes in high school and finding
            that I really enjoyed it and was rather good at it. I also enjoy
            playing games, reading books, watching movies, music,
            and hanging out with my cat</p>
            <img src={Photo} alt="me and my cat" width={500}/>
            <br />
            <a href={Resume}>My Resume (very out of date)</a>
        </>
    );
}