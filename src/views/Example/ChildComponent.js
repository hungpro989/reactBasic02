import React from "react";



class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render() {

        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> call render props: ', this.props)
        console.log('>>> call check show-hide: ', check)
        return (
            <>
                <div>
                    {showJobs === false ?
                        <div><button onClick={() => this.handleShowHide()}>Show</button></div>
                        :
                        <>
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
                            <div><button onClick={() => this.handleShowHide()}> Hide</button></div>
                        </>
                    }
                </div >
            </>
        )
    }
}
// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     return (
//         <div className="jobs-list">
//             {
//                 arrJobs.map((item, index) => {
//                     return (
//                         <div key={item.id}>
//                             {item.title} - {item.salary}$
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }
export default ChildComponent;