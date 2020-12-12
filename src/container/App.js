import './App.css';
import React ,{Component}from "react";
import ToDoHeader from "../component/Header";
import List from '../component/List';

class App extends Component{
    state = {
        data: [],
    }
    createToDo(text){
        const newData = this.state.data.concat();
        const index = newData.length;
        newData.push({index: index, text: text, isDone: false});
        this.setState({data: newData});
    }

    onClickDone(object){
        console.log("done:"+object);
        const data = this.state.data;

    }
    onClickDelete(object){
        const newData = this.state.data.concat();
        const index = newData.findIndex((item)=>item.obj === object);
        newData[index] = {
            ...newData[index],
            isDone: !newData[index].isDone,
        }
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
