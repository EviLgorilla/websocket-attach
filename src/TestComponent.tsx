import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "./store/types";
import {useCallback} from "react";
import {updateNotification} from "./store/user";

const TestComponent = () => {
    const user = useSelector<IRootState>(state => state.user);
    const dispatch = useDispatch();

    const onUpdateNotification = useCallback(() => {
        dispatch(updateNotification({
            date: new Date(Date.now()).toDateString(),
            title: 'New notification',
            message: 'Random message'
        }))
    }, [dispatch])

    return (
        <div>
            <pre>
                {JSON.stringify(user, null,  2)}
            </pre>
            <div>
                <button onClick={onUpdateNotification}> update state </button>
            </div>
        </div>
    );
}

export default TestComponent;