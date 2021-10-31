import HeaderResponsive from "../../Components/HeaderResponsive";
import api from "../../Api";
import { useState, useEffect } from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Personagens(){
    const [data,setData] = useState(null);
    useEffect(() =>{ 
        async function loadAll(){
            const res = await api.getPersonagemByName();
            console.log("Dados: ", res.data);    
        }
        loadAll();
    }, [data]);

    function checkButton(){
        setData("")
    }
    return(
        <div>
            <HeaderResponsive />
            <div className = "search-cotainer">
                <form onSubmit = {checkButton}>
                    <input />
                    <button type="submit"><FontAwesomeIcon icon = {faSearch} size="lg"/></button>
                </form>
            </div>
        </div>
    );
}


export default Personagens;