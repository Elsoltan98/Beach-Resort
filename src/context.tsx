import React, { createContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import items from './data'

const RoomContext = createContext({});

const initialState = {
    rooms: [],
    sortRooms: [],
    featuredRooms: [],
    loading: true,
}

const ContextProvider = ({children}: any) => {
    const [state, setState] = useState(initialState);
    const formatData = (items: any) => {
        let tempItems = items.map((item: { sys: { id: any; }; fields: { images: { fields: { file: { url: any; }; }; }[]; }; }) => {
            let id = item.sys.id;
            let images = item.fields.images.map((img: { fields: { file: { url: any; }; }; }) => 
                img.fields.file.url
            )
            let room = {...item.fields, images, id};
            return room;
        })
        return tempItems;
    }

    useEffect(() => {
        let rooms = formatData(items);
        let featuredRooms = rooms.filter((room: { featured: boolean; }): any => room.featured === true);

        setState({
            rooms,
            featuredRooms,
            sortRooms: rooms,
            loading: false
        })
    }, [])
    return (
        <RoomContext.Provider value={{...state}}>
            {children}
        </RoomContext.Provider>
    )
}

const ContextConsumer = RoomContext.Consumer;


export {RoomContext, ContextProvider, ContextConsumer};
