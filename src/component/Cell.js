import React, {Component} from 'react';
import './Cell.css';
class  Cell extends Component{
    render() {
        return(
            <div className={"cellContainer"}>
                <div className={"indexView"}>
                    {this.props.index}
                </div>
                <div className={"textView"}>
                    <div className={"textContents"}>{this.props.text}</div>
                </div>
                <div className={"btnView"}>
                    <div className={"btnDone"} onClick={this.props.onClickDone}>
                        완료
                    </div>
                    <div className={"btnDelete"} onClick={this.props.onClickDelete}>
                        삭제
                    </div>
                </div>
            </div>
        );
    }
}
export default Cell;
