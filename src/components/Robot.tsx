import React, {useContext} from "react";
import styles from './Robot.module.css'
import {appContext} from "../AppState"

interface RobotProps {
    id: number,
    name: string,
    email: string
}

const Robot : React.FC<RobotProps> = (props) => {  //FC = functional component函数式组件 接受泛型参数
                             //也可以将props改为({id, name, email})属于ES6写法
     const id = props.id;
     const name = props.name;
     const email = props.email;
     const value = useContext(appContext)

    return(
            <div className = {styles.cardContainer}> 
                <img alt = "robot" src ={`https://robohash.org/${id}`}/>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>作者: {value.userName}</p>
            </div>
    )
};

export default Robot;