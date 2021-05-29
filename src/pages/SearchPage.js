import "./SearchPage.css"
import {Link} from "react-router-dom"
import Search from "../components/Search"
import SearchIcon from "@material-ui/icons/Search"
import DescriptionIcon from "@material-ui/icons/Description"
import ImageIcon from "@material-ui/icons/Image"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import RoomIcon from "@material-ui/icons/Room"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SettingsIcon from '@material-ui/icons/Settings'
import BuildIcon from '@material-ui/icons/Build'
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from "@material-ui/core"
import {selectTextString} from "../features/textSlice"
import {useSelector} from "react-redux"  
import useGoogleSearch from "../UseGoogleSearch"
import Result from "../components/Result"


const SearchPage = () => {
    const textString = useSelector(selectTextString);
    const  {data} = useGoogleSearch (textString);
    console.log(data)
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="logo"/>
                </Link>   
            
                <div className="searchPage__headerCenter">
                    <Search hideButtons/>
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon fontSize="small"/>
                                <Link to="/All" >All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon fontSize="small"/>
                                <Link to="/News">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon fontSize="small"/>
                                <Link to="/Images">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon fontSize="small"/>
                                <Link to="/Shopping">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon fontSize="small"/>
                                <Link to="/Maps">Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon fontSize="small"/>
                                <Link to="/More">More</Link>
                            </div>
                            
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <SettingsIcon fontSize="small" className="searchPage__option"/>
                                <Link to="/Settings" >Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                <BuildIcon fontSize="small"/>
                                <Link to="/Tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="searchPage__headerRight">
                    
                    <AppsIcon fontSize="small"/> 
                      
                    <Avatar className="headerRight__Avatar"/>     
                </div>
            </div>
                {textString && (
                    <div className="searchPage_results">
                        <p className="searchPage_resultsCount">
                            About {data?.searchInformation.formattedTotalResults} Results (
                                {
                                    data?.searchInformation.formattedSearchTime
                                }seconds) 
                        </p>  
                        { 
                        data?.items.map(item =>
                        <Result key={item.cacheId} data={item}/>
                        ) 
                    }              
                    </div>   
    ) 
                
                }
        </div>
    )
}

export default SearchPage
