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
        this.setState({
            data: this.state.data.concat({index: this.id++, text: text, isDone: false})
        });
    }
    //작업 완료 전환
    onClickDone(id){
        let data = this.state.data;
        const index = data.findIndex(item => item.index === id);
        data[index] = {
            ...data[index],
            isDone: !data[index].isDone,
        }
        this.setState({
            data: data,
        });
    }
    //작업 삭제
    onClickDelete(id){
        const data = this.state.data;
        //const index = data.findIndex(item=> item.index === id);
        const newData = data.filter(item => item.index !== id);
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
