import React from "react";



class ChildComponent extends React.Component {

    render() {
        console.log('>>> call render props: ', this.props)
        // let nameChild = this.props.nameChild;
        // let ageChild = this.props.ageChild;
        let { nameChild, ageChild, address, arrJobs } = this.props;
        return (
            <div>
                {/* Đây là component số: {this.props.nameChild}, {this.props.ageChild} tuổi<br /> */}
                Dev: {nameChild}, {ageChild} age, {address}
                <div className="jobs-list">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}$
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        )
    }
}
export default ChildComponent;