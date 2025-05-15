import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const FoodContext = createContext(null)

const FoodContextProvider = (props) => {
    const [menu_list,setMenuList] = useState([])
    const url = "http://localhost:4000";
    const [token,setToken] = useState("");

    const contextValue = {
        menu_list,
        url,
    }

    const fetchMenuList = async () => {
        const response = await axios.get(url+"/api/food/list")
        setMenuList(response.data.data)
    }

    useEffect(()=>{
        async function loadData() {
            await fetchMenuList()
        }
        loadData();
    },[])

    return(
        <FoodContext.Provider value={contextValue}>
            {props.children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider;