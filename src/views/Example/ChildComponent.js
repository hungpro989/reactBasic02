import React from "react";



class ChildComponent extends React.Component {

    render() {
        console.log('>>> call render props: ', this.props)
        // let nameChild = this.props.nameChild;
        // let ageChild = this.props.ageChild;
        let { nameChild, ageChild } = this.props;
        return (
            <div>
                Đây là component số: {this.props.nameChild}, {this.props.ageChild} tuổi<br />
                Đây là component số: {nameChild}, {ageChild} tuổi
            </div >
        )
    }
}
export default ChildComponent;