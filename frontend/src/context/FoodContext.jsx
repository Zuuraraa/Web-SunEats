import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
        try {
            const response = await axios.get(url+"/api/food/list")
            if (response.data.success) {
                setMenuList(response.data.data)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
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