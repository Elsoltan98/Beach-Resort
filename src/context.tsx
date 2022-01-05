import React, { createContext } from 'react'

const RoomContext = createContext();


const ContextProvider = ({children}: any) => {
    return (
        <RoomContext.Provider value="Hello">
            {children}
        </RoomContext.Provider>
    )
}

const ContextConsumer = RoomContext.Consumer;


export {RoomContext, ContextProvider, ContextConsumer};
