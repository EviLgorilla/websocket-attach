import {useSelector} from "react-redux";
import {IRootState} from "./store/types";

const TestComponent = () => {
    const user = useSelector<IRootState>(state => state.user);

    return (
        <div>
            <pre>
                {JSON.stringify(user, null,  2)}
            </pre>
        </div>
    );
}

export default TestComponent;