import React from 'react';

class Inout extends React.Component{
    render() {
        return (
            <div className="inout">
                <ul style={{textDecoration: 'none',
                   clear:'both'}}>
                    {
                        this.props.list.map((item,index) => {
                            return <li key = {index} style={{listStyle:'none',float:'left',marginRight:'30px'}} ><a href="#" onClick={
                                (e) =>{e.preventDefault();
                                    this.props.handleId(item.id)
                                }}> {item.name}
                            </a>
                            </li>
                        })
                    }
                </ul>

            </div>
        );
    }
}
export default Inout;