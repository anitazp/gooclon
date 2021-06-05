import API_KEY from "./keys";
import{useState} from "react";
import { useEffect } from "react";


const CONTEXT_KEY="83c9993a22bead5d4";

const useGoogleSearch = (textString) => {
    
    const [data, setData] = useState(null);
    
    useEffect(() => {
     if (textString) {
       
      const URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${textString}`
      const fetchData = () =>{
          fetch(URL).then(response=>response.json().then(result=>setData(result)))
      }
      fetchData();
     }
      

    }, [textString]);


    return {data} ;
}
export default useGoogleSearch;