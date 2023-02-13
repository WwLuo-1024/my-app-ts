import React, {useContext} from "react";
import { appSetStateContext } from "../AppState";
import { RobotProps } from "./Robot";

export const withAddToCart = (ChildComponet: React.ComponentType<RobotProps>) =>{ //命名规范 HOC告诫组件通常使用with开头
    // return class extends React.Component{} 类组件
    return (props)=>{
        const setState = useContext(appSetStateContext)

        const addToCart = (id, name) =>{
           if(setState){ //
               setState(state =>{
                   return{
                       ...state,
                       shoppingCart:{
                           items: [...state.shoppingCart.items, {id, name}]
                       }
                   }
               })
           }
        }
        return <ChildComponet {...props} addToCart={addToCart}/>
    }

}

export const useAddtoCart = () =>{ //自定义hook函数
    const setState = useContext(appSetStateContext)
    const addToCart = (id, name) =>{
        if(setState){ //
            setState(state =>{
                return{
                    ...state,
                    shoppingCart:{
                        items: [...state.shoppingCart.items, {id, name}]
                    }
                }
            })
        }
     }
    return addToCart; //返回的不再是函数 而是这个业务逻辑本身
}