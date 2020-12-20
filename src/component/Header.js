import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextState.text !== this.state.text;
    }

    //입력 값 변경 시
    onChange(e){
        //console.log(e.target.value);
        this.setState({text: e.target.value});
    }
    //제출
    onSubmit(){
        this.props.createToDo(this.state.text);
       //console.log('submit');
    }
    //Enter 입력으로 제출
    onKeyUp(e){
        //console.log(e.key);
        if(e.key === "Enter"){
            this.onSubmit();
        }
    }

    render() {
        console.log('render');
        return(
            <div className="container">
                <div className="title">
                    업무 목록
                </div>

                <div className="div_inputContainer">
                    {/*Input*/}
                    <input className="div_input"
                           value={this.state.text}
                           onChange={this.onChange.bind(this)}
                           onKeyUp={this.onKeyUp.bind(this)}
                    />
                    {/*생성 버튼*/}
                    <div className="div_btnContainer">
                        <div className="btn" onClick={this.onSubmit.bind(this)}>
                            생성
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;

