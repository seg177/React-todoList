import './App.css';
import React ,{Component}from "react";
import ToDoHeader from "../component/Header";
import List from '../component/List';

class App extends Component{

    createToDo(){
        console.log('create!');
    }

    render() {
        return (
            <div className="App">
                <ToDoHeader
                    createToDo={this.createToDo.bind(this)}
                />
                <List />
            </div>
        );
    }
}

export default App;
