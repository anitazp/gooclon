import "./Home.css"
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar, IconButton } from "@material-ui/core";
import {Link} from "react-router-dom"
import Search from "../components/Search";

const home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/About">Sobre Google</Link>
                    <Link to="/Store">Tienda</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/Gmail">Gmail</Link>
                    <Link to="/Images">Imagenes</Link> 
                    <IconButton>
                     <AppsIcon/> 
                    </IconButton>    
                    <Avatar/>            
                </div>
            </div>
            <div className="home__body">
                <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt="logo"/>
                <Search/>
            </div>
        </div>
    )
}

export default home
