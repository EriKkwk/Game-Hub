import { Link } from "react-router-dom";

function Footer(){
    return <div style={{
        position:"absolute",
        bottom:"0",
        left:"0",
        width:"100%",
        backgroundColor:"#242424",
        textAlign:"center",
        padding:"5px"
    }}>
        <span style={{
            margin:"0",
            padding:"0",
            fontWeight:"bold"
        }}>Game Hub
        </span><br/>
        <span style={{
            margin:"0",
            padding:"0",
            fontWeight:"bold"
        }}>Created by SFS students
        </span><br/>
    </div>
}

export default Footer;