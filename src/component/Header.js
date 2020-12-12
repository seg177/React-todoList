import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    onChange(e){
        //console.log(e.target.value);
        this.setState({text: e.target.value});
    }
    onSubmit(){
        this.props.createToDo(this.state.text);
       //console.log('submit');
    }
    onKeyUp(e){
        //console.log(e.key);
        if(e.key === "Enter"){
            this.onSubmit();
            return;
        }
    }

    render() {
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

