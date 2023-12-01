import './netflix.css'
import { useEffect , useState } from 'react';

export default function Netflix() {
    const [count , setCount] = useState(0);
        useEffect(() => {
          let x = setInterval(() => {
                setCount(count => count + 1);
                
                if (count > 10) {
                    clearInterval(x);
                }
            } , 1000);
        } ,[]);

    return(
        <div className = "bg-image">
            <div className = "navbar">
                <h1 className = "logo">Netflix{count}</h1>
                <button className = "btn">sign In</button>
            </div>
            <div className = "content">
                <h1>unlimited movies <br/> Tv shows & more</h1>
                <h2>watch anywhere , cancel anytime</h2>
                <p>Ready to Watch? Enter your email</p>
                <input type = "email" placeholder = "Email Adress"/>
                <button className = "getStarted">Get Started & gt</button>


            </div>
        </div>
    )

}
