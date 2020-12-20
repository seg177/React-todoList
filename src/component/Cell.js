import React, {Component} from 'react';
import './Cell.css';

const Cell = (props)=>{
    return(
        <div className={"cellContainer"}>
            <div className={"indexView"}>
                {props.index}
            </div>
            <div className={"textView"}>
                <div className={props.isDone ? "textContentsDone" : "textContents"}>{props.text}</div>
            </div>
            <div className={"btnView"}>
                <div className={"btnDone"} onClick={()=>props.onClickDone(props.index)}>
                    완료
                </div>
                <div className={"btnDelete"} onClick={()=>props.onClickDelete(props.index)}>
                    삭제
                </div>
            </div>
        </div>
    );
}
export default Cell;
