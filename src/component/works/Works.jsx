import "./works.scss";
import {useState} from "react";

export default function Works() {
    const[currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            title: "Web Designing",
            icon: "assets/monitor.png",
            desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "assets/Banner.png",
        },
        {
            id: "2",
            title: "Mobile App Designing",
            icon: "assets/smartphone-call.png",
            desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "assets/mobile-app-template.png",
        },
        {
            id: "3",
            title: "Branding",
            icon: "assets/smartphone-call.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "assets/1399816_d7a8.jpg",
        },

    ];

    const handleClick =(way)=>{
        way ==="left" ? 
        setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2):
        setCurrentSlide(currentSlide<data.length-1 ? currentSlide+1 : 0);
    };

    return (
        <div className="works" id="works">
            <div 
                className="slider" 
                 style = {{ transform: `translateX(-${currentSlide * 100}vw)`}}
            >
                {data.map((d) =>(
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imageContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <span>Projects</span>

                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))
                }           
            </div>   
            
            <img src="assets/next.png" className="arrow left" alt="" onClick={()=> handleClick("left")}/>
            <img src="assets/next.png" className="arrow right" alt="" onClick={()=> handleClick("right")}/>

        </div>
    );
}
 