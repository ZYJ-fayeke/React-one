import React from 'react';
import CompoentList from "./CompoentList";
import Inout from "./Inout";


class App extends React.Component  {

    constructor(props){
        super(props);
        this.state = {
            list: [{name:'百年孤寂',id: 0,},{name:'开到荼蘼',id: 1,},{name:'暗流涌动',id:2}],
            inputVal : ''
        }
    }

    handleBut(){
        this.setState({
            list : [...this.state.list,
                {
                  name:this.state.inputVal,
                }],
            inputVal : ''
        })
    }
     handleId = (id) => {
         this.setState({
             id
         });
     };
    handleInput(e){
        this.setState({
            inputVal : e.target.value
        })
    }

    render() {
        return (
            <div className="App" id='main'>
                <div id='input'>
                    <input value={this.state.inputVal} onChange={this.handleInput.bind(this)} style={{height:'25px',weight:'130px'}}/>
                    <button onClick={this.handleBut.bind(this)} style={{
                        backgroundColor:'yellowgreen',
                        height:'40px',
                        color:'white',
                        marginLeft:'20px',
                        borderRadius: '10px',
                        border:'none'
                    }}>以下都是歌</button>
                </div>
                     <Inout list={this.state.list}
                        handleId={this.handleId}/>
                        <CompoentList id={this.state.id} style={{paddingTop:'160px'}}/>

            </div>
        );
    }
}
export default App;