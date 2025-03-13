import { createContext } from "react";
import { menu_list } from "../assets/assets";

export const FoodContext = createContext(null)

const FoodContextProvider = (props) => {

    const contextValue = {
        menu_list
    }

    return(
        <FoodContext.Provider value={contextValue}>
            {props.children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider;