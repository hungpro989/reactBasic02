import React from "react";



class ChildComponent extends React.Component {

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <div>
                Đây là component số: {this.props.nameChild}
            </div >
        )
    }
}
export default ChildComponent;