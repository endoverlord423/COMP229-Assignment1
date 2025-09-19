//COMP229-Assignment1, ELijah Stuwe, 301421199, September 19 2025

import Img1 from "./assets/flymethroughtheroom.png"
import Img2 from "./assets/foodbutsimple.png"
import Img3 from "./assets/comp305lab3.png"

export default function Project() {
    return (
        <>
        <h2>My Projects</h2>
        <div>
            <h3>Fly Me Through The Room</h3>
            <p>This was the first game I created in college with my groupmates
                in COMP391. It is a game where you are a fly trying to collect
                crumbs as points while avoiding all the dangerous traps and other bugs.
                Unfortunately for the fly, at the end you get eaten by a flytrap.
            </p>
            <img src={Img1} alt="Fly Me Through The Room Game Image" />
        </div>
        <hr />
        <div>
            <h3>Food But Simple</h3>
            <p>Food But Simple was the final assignment for my first web development
                class. It is the store page for a resturaunt that has extremely simple
                foods for those who don't like complicated decisions.
            </p>
            <img src={Img2} alt="Food But Simple" width={610}/>
        </div>
        <hr />
        <div>
            <h3>COMP305-Lab3</h3>
            <p>This lab was me learning about coroutines and trigger colliders</p>
            <img src={Img3} alt="COMP305-Lab3" width={610}/>
        </div>
        </>
    );
}