import useWebSocket from "../lib/websocket";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {updateNotification} from "../store/user";

const WSS_PATH = 'wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self';

const useNotification = () => {
    const {lastJsonMessage, sendJsonMessage} = useWebSocket(WSS_PATH,
        {
            filter: message => {
                try {
                    const data = JSON.parse(message.data);
                    return data.message.type === 'notification';
                } catch (e) {
                    return false;
                }
            }
        });
    const dispatch = useDispatch();


    // echo logic
    useEffect(() => {
        let counter = 1;
        const interval = setInterval(() => {
            sendJsonMessage({
                message: {
                    type: 'notification',
                    date: Date.now(),
                    title: `Title ${counter}`,
                    message: 'constant message'
                }
            })
            counter++;
        }, 5000);

        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        if (lastJsonMessage) {
            dispatch(updateNotification(lastJsonMessage))
        }
    }, [lastJsonMessage])
}

export default useNotification;