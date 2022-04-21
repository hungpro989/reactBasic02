import React from "react";
import ChildComponent from "./ChildComponent";


class ExampleComponent extends React.Component {
    // state là: hành động reload các component
    //<>todo</> là: cách render 2 hay nhiều div trong 1 component
    state = {
        //key:'value'
        // name: 'Hưng',
        // desc: 'Người đẹp zai nhất',
        firstName: '',
        //lastName: '',
        arrJobs: [
            { id: 'Job01', title: 'Java', salary: '1000' },
            { id: 'Job02', title: 'PHP', salary: '1000' },
            { id: 'Job03', title: 'Python', salary: '1000' },
        ]
    }
    // handleOnChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }
    handleOnChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    // handleOnChangeLastName = (event) => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }
    // handleOnClickButton = () => {
    //     alert('Click Me!')
    // }
    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     console.log('>>> Check data input submit: ', this.state.firstName, '+', this.state.lastName)
    // }
    render() {
        console.log('>>> call render state: ', this.state)
        return (
            <div>
                <input type="text" id="fname" name="fname"
                    value={this.state.firstName} onChange={(event) => this.handleOnChangeFirstName(event)}
                />
                {/* <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} />
                <h1>Xin chào, Mr.{this.state.name}</h1>
                <h2>Mô tả: {this.state.desc}</h2>
                <button onClick={() => this.handleOnClickButton()}>Click Me</button>
                <div>
                    <form >
                        <label htmlFor="fname">First name:</label><br />
                        <input type="text" id="fname" name="fname"
                            value={this.state.firstName} onChange={(event) => this.handleOnChangeFirstName(event)}
                        /><br />
                        <label htmlFor="lname">Last name:</label><br />
                        <input type="text" id="lname" name="lname"
                            value={this.state.lastName} onChange={(event) => this.handleOnChangeLastName(event)}
                        /><br /><br />
                        <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
                    </form>
                </div> */}
                <ChildComponent
                    nameChild={this.state.firstName}
                    ageChild={'27'}
                    address={'Hai phong'}
                    arrJobs={this.state.arrJobs}
                />

            </div >
        )
    }
}
export default ExampleComponent;