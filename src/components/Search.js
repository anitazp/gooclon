import{useState} from "react";
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"
import {GoogleInput} from "./GoogleInput"
import {GoogleButton} from "./GoogleButton"
import "./Search.css"
import { setTextstring } from "../features/textSlice";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";



const Search = ({hideButtons = false}) => {
    const [input, setInput] = useState("")
    const history = useHistory();
    const dispatch = useDispatch();

    const search = (e) => {
        e.preventDefault()
        dispatch(setTextstring(input))
        history.push("/SearchPage")
    }
    return (
        <>
            <form className="search">
                <GoogleInput>
                    <SearchIcon className="search__inputIcon"/>
                    <input value={input} onChange={e=>setInput(e.target.value)}/>
                    <MicIcon className="mic__inputIcon"/>
                </GoogleInput>
                <div className="search__buttons">
                    <GoogleButton type="submit" onClick={search} className={hideButtons ? "search__hideButtons": ""}>Buscar con Google</GoogleButton>
                    <GoogleButton type="submit" className={hideButtons ? "search__hideButtons": ""}>Voy a tener suerte </GoogleButton>
                </div>
            </form>
        </>
    )
}

export default Search
