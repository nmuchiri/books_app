import { Link } from 'react-router-dom'


const Home =()=>{


    return(
        <div>

            <div>
           <h1>Shameless Bibliophile</h1>

            </div>


            <div className="card card-container">
                <img
                    src="https://content.storymagic.co/cdn/website/assets/sign-in/parentLogin-graphic.svg"
                    alt="logo-img"
                    className="app-logo"
                    />
             </div>
             <div> 
                <p>A private app that's a diary about your numerous, shameless love affairs with books! Don't worry! We'll keep your secrets safe!!</p>
            </div> 
            <div>
                <Link to={'/login'} className='nav-link'>
                    <h2>Login</h2>
                </Link>
            </div> 

            <div>
                <Link to={'/signup'} className='nav-link'>
                    <h3>Signup</h3>
                </Link>
            </div> 

        </div>        
        
    )

}

export default Home