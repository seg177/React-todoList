import './App.css';
import React ,{Component}from "react";
import ToDoHeader from "../component/Header";
import List from '../component/List';

class App extends Component{
    id = 0;
    state = {
        data: [],
    }
    //작업 생성
    createToDo(text){
        const newData = this.state.data.concat();
        const index = this.id++;
        newData.push({index: index, text: text, isDone: false});
        this.setState({data: newData});
    }
    //작업 완료 전환
    onClickDone(object){
        console.log("done:"+object);
        const data = this.state.data;

    }
    //작업 삭제
    onClickDelete(id){
        let data = this.state.data.concat();
        const index = data.findIndex((value, index, obj)=> id === index);
        const newData = data.filter(item => index !== item.index);
        console.log(JSON.stringify(newData));
        this.setState({data: newData});
    }

    render() {
        return (
            <div className="App">
                <ToDoHeader
                    createToDo={this.createToDo.bind(this)}
                />
                <List
                    data={this.state.data}
                    onClickDone={this.onClickDone.bind(this)}
                    onClickDelete={this.onClickDelete.bind(this)}
                />
            </div>
        );
    }
}

export default App;
