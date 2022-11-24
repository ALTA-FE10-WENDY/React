import { useNavigate } from "react-router-dom";

export function withRouter(Component) {
    function Wrapper(props){
        const navigate = useNavigate()
        return <Component navigate={navigate} {...props}/>;

    }
    return Wrapper  
}