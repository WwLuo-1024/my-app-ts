import React, { useState } from "react";

interface Props{

}

interface State{
    count: number
}

//当使用类组件时
class example extends React.Component<Props, State>{
    constructor(props){
        super(props);
        this.state= {
            count: 0
        };
    }

    render(){
        return(
            <div>
                <p>你点击了{this.state.count} 次</p>
                <button onClick={()=>
                this.setState({
                    count: this.state.count + 1
                })}>
                    Click me
                </button>
            </div>
        )
    }
}

//使用hook版本(函数组件)
function hooksExample(){
    const [count, setCount] = useState(0); //useState函数让该函数变成了有状态的函数

    return(
        <div>
            <p>你点击了{count}次</p>
            <button onClick={()=>
            setCount(count + 1)}>
                Click
            </button>
        </div>
    )
}

