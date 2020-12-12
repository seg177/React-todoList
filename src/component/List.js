import React, {Component} from 'react';
import './List.css';
import Cell from './Cell';
class List extends Component{
    constructor(props) {
        super(props);
    }

    getList(data){
        return(
            data.map((item)=>
                <Cell
                    index={item.index}
                    isDone={item.isDone}
                    text={item.text}
                    key={item.index}
                    onClickDone={this.props.onClickDone}
                    onClickDelete={this.props.onClickDelete}
                />
            )
        );
    }

    render() {
        const list = this.getList(this.props.data);
        return(
            <div className= "listContainer">
                {list}
            </div>
        );
    }
}
export default List;
