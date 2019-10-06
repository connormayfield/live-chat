import React from 'react';
import { getThemeProps } from '@material-ui/styles';


const CTX = React.createContext();

export default function Store() {

    const reducerHook = React.useReducer(red, initState)
    return (
        <CTX.Provider value={}>
        {getThemeProps.children}
        </CTX.Provider>
    )
}
