import React from 'react';

const comment = ['东邪西毒', '南帝北丐', '我也不清楚我打了些什么'];
class CompoentList extends React.Component {

    switchCom = (id) => {
        return comment[id] ? comment[id] : 'Something happened';
    };
    render() {
        return (
            <div className="comment" style={{marginTop:'100px',textAlign:'center'}}>
                {
                    this.switchCom(this.props.id)
                }
            </div>
        )
    }
}
export default CompoentList;