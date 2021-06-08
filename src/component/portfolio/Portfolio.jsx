import "./portfolio.scss"
import Portfoliolist from "../portfolioList/Portfoliolist.jsx"
import{useEffect,useState} from "react"
import {
    fearturedPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
} from "../../Data"

export default function Portfolio() {
    const[selected,setSelected]= useState("featured");
    const[data,setData]= useState([]);
    const list =[
        {
            id: "featured", 
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },

        
    ];

    useEffect(()=>{
        switch(selected){
            case "featured":
                setData(fearturedPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(fearturedPortfolio); 
        }

    },[selected])

    return (
        <div className="portfolio" id="portfolio">
           <h1>Portfolio</h1>
           <ul>
               {list.map((item)=>(
                   <Portfoliolist 
                   title = {item.title}  
                   active={selected ===item.id} 
                   setSelected ={setSelected}
                   id={item.id}
                   />
               ))}
           </ul>

           <div className="container">
               {data.map((d)=>(
                   <div className="item">
                   <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
               </div>
               ))}
               
               
           </div>
        </div>
    );
}
 