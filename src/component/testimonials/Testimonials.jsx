import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
            id: "1",
            name: "Tom Durden",
            title: "Senior Developer",
            icon: "assets/youtube.png",
            desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "assets/istockphoto-1045886560-612x612.jpg",
        },
        {
            id: "2",
            title: "Co-Founder of DELKA",
            name: "Alex Kalansiki",
            icon: "assets/youtube.png",
            desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "assets/girl.png",
            featured: true,
        },
        {
            id: "3",
            title: "CEO of ABD",
            name: "Ana jackson",
            icon: "assets/youtube.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "assets/women.png",
        },

    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d)=>
                    <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img className="user"
                            src={d.img} alt="" 
                        />
                        <img src={d.icon} className="right" alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                        
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                )}
                
            </div>
            
            
        </div>
    )
}
 