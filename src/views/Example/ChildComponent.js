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
    handleOnClickButtonDelete = (job) => {
        //console.log('>>> child render clickdelete: ', job)
        this.props.deleteAJob(job)
    }
    render() {

        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        //let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        //console.log('>>>ChildComp: call render props: ', this.props)
        //console.log('>>>ChildComp: call check show-hide: ', check)
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
                                                <></> <span onClick={() => this.handleOnClickButtonDelete(item)}>x</span>
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