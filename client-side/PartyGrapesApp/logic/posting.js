// Dummy Data
import axios from "axios";
import { partydata } from "../components/Mainscreen.js";


// Logig for posting in FaunaDB via Axios HTTP Post
export function postParty(){
    /*let config = {
        header: {
            'Content-Type': 'application/json'
        }
    }*/
    axios.post('http://localhost:5000/create',  { partydata },)
        .then(res => {
            console.log(res);
            console.log(res);
        })
        .catch(error => {
            console.log(error)
        })
}
