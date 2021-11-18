import {useCallback, useEffect, useState} from "react";
import useWebSocket from "../lib/websocket";
import {useDispatch} from "react-redux";
import {WebSocketHook} from "../lib/websocket/types";
import {DispatchProp} from 'react-redux';

const WSS_PATH = 'wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self';

interface IWebSocketConnection {
    wssUrl: string,
    action: (data: Partial<WebSocketHook>) =>  DispatchProp<any>
}

const useWebSocketConnection = ({wssUrl = WSS_PATH, action }: IWebSocketConnection) => {
    const [ready, setReady] = useState(false);
    const dispatch = useDispatch();

    const {
        sendJsonMessage,
        lastJsonMessage,
        readyState,
    } = useWebSocket(wssUrl, {}, ready)

    const connect = useCallback(() => {
        setReady(true);
    }, []);

    const disconnect = useCallback(() => {
        setReady(false);
    }, []);

    // pass callback to dispatch = side effects
    useEffect(() => {
        if (ready) {
            dispatch(action({
                lastJsonMessage,
                readyState
            }))
            return;
        }
        return;
    }, [lastJsonMessage, readyState])

    return {
        connect,
        disconnect,
        send: sendJsonMessage
    };
};

export default useWebSocketConnection;