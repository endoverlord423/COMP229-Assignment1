//COMP229-Assignment1, ELijah Stuwe, 301421199, September 19 2025

import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <>
        <h2>Contact Me</h2>
        <a href="mailto:elijah.terraria@gmail.com">Email Me</a> &nbsp;
        <a href="tel:9990008888">Call Me (fake number cause I get too many scam callers)</a>
        <hr />
        <form action="" method="post">
            <label htmlFor="Fname">First Name: </label>
            <input type="text" id="Fname"/>
            &nbsp;
            <label htmlFor="Lname">Last Name: </label>
            <input type="text" id="Lname"/>
            &nbsp;
            <label htmlFor="Email">Email: </label>
            <input type="email" name="" id="Email" />
            <br /><br />
            <label htmlFor="Message">Message:</label>
            <br />
            <textarea name="" id="Message" cols={100} rows={15}></textarea>
            <br />
            <Link to="/" className="button">Submit</Link>
        </form>
        </>
    );
}