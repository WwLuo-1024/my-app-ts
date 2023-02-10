import React from 'react';
import styles from './ShoppingCart.module.css'
import {FiShoppingCart} from "react-icons/fi";
import { isPromise } from 'util/types';

interface Props{

}

interface State{
    isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State>{ //类组件 接受泛型类 
    //P（prop）用于组件间的数据传递 S表示状态 SS表示自定义数据
    constructor(props: Props){ //配置构建函数 constructor
        super(props);
        this.state = {
            isOpen: false //初始化参数 此时意为购物车默认为关闭下拉
        };
        // this.handleClick = this.handleClick.bind(this) 需要bind函数而非箭头函数时
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        console.log("e.target", e.target) //描述的是事件发生的元素
        console.log("e.currentTarget", e.currentTarget) //描述的是事件处理绑定的元素 以后可用于获取比如id，name等参数 currentTarget.id...
        if((e.target as HTMLElement).nodeName === "SPAN"){ //此时判断鼠标点击元素是否为HTML的SPAN
            this.setState({isOpen: !this.state.isOpen}); 
        }
        
    }
    //推荐使用箭头函数

    //使用bind（）函数确保handleClick从class角度绑定this关键词
    // handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    //     this.setState({isOpen: !this.state.isOpen});
    // }
  
    render(){
        return (
            <div className = {styles.cartContainer}>
                <button className = {styles.button}
                onClick = {this.handleClick}
                >
                    <FiShoppingCart />
                    <span>购物车 2(件)</span>
                    </button>
                <div className = {styles.cartDropDown} style={{
                    display: this.state.isOpen ? "block" : "none"
                }}>
                    <ul>
                        <li>robot 1</li>
                        <li>robot 2</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ShoppingCart;
    