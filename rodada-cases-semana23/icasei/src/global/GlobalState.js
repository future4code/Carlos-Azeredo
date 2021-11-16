import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {

    const data = 0

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState