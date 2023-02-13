import React, {useContext} from "react";
import styles from './Robot.module.css'
import {appContext} from "../AppState"
import { appSetStateContext } from "../AppState";
import { withAddToCart } from "./addToCart";

interface RobotProps {
    id: number,
    name: string,
    email: string,
    addToCart: (id, name) => void
}

const RobotDiscount : React.FC<RobotProps> = (props) => {  //FC = functional component函数式组件 接受泛型参数
                             //也可以将props改为({id, name, email})属于ES6写法
     const id = props.id;
     const name = props.name;
     const email = props.email;
     const addToCart = props.addToCart
     const value = useContext(appContext)
     const setState = useContext(appSetStateContext)

    //  const addToCart = () =>{
    //     if(setState){ //
    //         setState(state =>{
    //             return{
    //                 ...state,
    //                 shoppingCart:{
    //                     items: [...state.shoppingCart.items, {id, name}]
    //                 }
    //             }
    //         })
    //     }
    //  }


    return(
            <div className = {styles.cardContainer}> 
                <img alt = "robot" src ={`https://robohash.org/${id}`}/>
                <h2>打折商品</h2>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>作者: {value.userName}</p>
                <button onClick={()=>{addToCart(id, name)}}>加入购物车</button>
            </div>
    )
};

export default withAddToCart(RobotDiscount);