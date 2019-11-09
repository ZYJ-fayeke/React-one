import React from 'react';

class AddCom extends React.Component{

    handleDemo =()=>{
        let {num} = this.state;
        switch (num) {
            case 1 :
                return '这是1';
            case 2 :
                return '这是2';
            case 3 :
                return '这是3';
            default :
                return '如果以上都不是，那么必须使用default返回，哪怕是 null'
        }
    };

    render() {
        return <div className='addcom'>
            {
                this.handleDemo()
            }
        </div>
    }
}
export default AddCom;