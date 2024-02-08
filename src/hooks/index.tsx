import React from "react";


export function useSyncedReducer<S, A>(
    reducer: (state: S, action: A) => S,
    initialState: S,
    socket: any, sessionId: string, eventName: string,
    transient?: string[]): [S, React.Dispatch<A>] {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const syncDispatch = React.useCallback((value: any) => {
        dispatch(value);
        if (!transient || !transient.includes(value.type)) {
            const message = JSON.stringify({...value, sessionId});
            console.log("emitting", eventName, value, message, socket);
            socket.emit(eventName, message);
        }
    }, [socket, sessionId, eventName, transient]);

    React.useEffect(() => {
        const onReceive = (load: string) => {
            const value = JSON.parse(load);
            console.log("received", eventName, value);
            if (value.sessionId !== sessionId) {
                dispatch(value);
            }
        }
        if (socket) {
            socket.on(eventName, onReceive);
            return () => {
                socket.off(eventName);
            }
        }
    }, [socket, sessionId, eventName]);

    return [state, syncDispatch];
}