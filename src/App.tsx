import React from 'react';
import logo from './assets/images/logo.svg';
// import './App.css';
import styles from './App.module.css';
import robots from './mockdata/robots.json'
import Robot from "./components/Robot"
import { emit } from 'process';
import ShoppingCart from './components/ShoppingCart';

//以下两段用于测试在JSX中防止注入攻击
//** */
// const html = "<img onerror = 'alert(\"Hacker!\")' src = 'invalid-image' />"
// const jsHacked = "javascript: alert('Hacked!');"
//*** */
interface Props{

}

interface State{
  robotGallery: any[];
  count: number;
}


class App extends React.Component<Props, State> { 

  // * 生命周期第一阶段：初始化
  // 初始化组件 state
  constructor(props){
    super(props);
    this.state = {
      robotGallery: [],
      count: 0
    };
  }

  //在组建创建好dom元素后、挂载进页面的时候调用
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users") //此时返回的并不是直接的数据 而是Promise
    .then((response) => response.json()) //response.json仍然返回的是Promise 需要继续.then
    .then((data) => this.setState({robotGallery: data}));
  }

  // * 生命周期第二阶段：更新
  //在组件接收到一个新的prop（更新后）时被调用
  //componentWillReceiveProps
  //state getDerivedStateFromProps(nextProps, prevState){}
  // shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    
  // }
  //组件更新后调用
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    
  }

  //* 生命周期第三阶段： 销毁
  //组件销毁后调用，回收内存 删除事件监听
  //可以当作析构函数 destructor来使用
  componentWillUnmount(): void {
    
  }

  render(): React.ReactNode {
    return (
      //以下为原始代码
      //** */
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.tsx</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      //** */
      <div className = {styles.app}>
        <div className = {styles.appHeader}>
          <img src = {logo} className = {styles.appLogo} alt = "logo"/>
          <h1>罗伯特机器人炫酷吊炸天Online购物平台的名字要长</h1>
        </div>
        <button onClick={() =>{
          // this.setState({count: this.state.count + 1}, ()=>{
          //   console.log("count ", this.state.count) //在this.setState的第二参数处添加箭头函数便可以同步 本质是异步更新，同步执行
          // });
          // this.setState({count: this.state.count + 1}, ()=>{
          //   console.log("count ", this.state.count) //在this.setState的第二参数处添加箭头函数便可以同步 本质是异步更新，同步执行
          // });
          //在类似上面两次调用state语句时，只要生命周期没有变化 那么state的状态会停留在上次操作的state来进行赋值 此时增量只是加一
          //改变上面的情况 需要在第一参数也引用箭头函数

          this.setState((preState, preProps) =>{
            return {count: preState.count + 1}
          }, ()=>{
            console.log("count ", this.state.count) 
          });

          this.setState((preState, preProps) =>{
            return {count: preState.count + 1}
          }, ()=>{
            console.log("count ", this.state.count) 
          });
          //此时 点击按钮则数据会以增量为2来增加

          
        }}>Click</button>
        <span>count: {this.state.count}</span>
        <ShoppingCart />
  
        {/* <div className = {styles.robotList}>
          {robots.map( (r) => (
            <Robot id = {r.id} email = {r.email} name = {r.name} />
          ))}
        </div> */}
        <div className = {styles.robotList}>
          {this.state.robotGallery.map( (r) => (
            <Robot id = {r.id} email = {r.email} name = {r.name} />
          ))}
        </div>

      </div>
    );
  }
  
}

export default App;
