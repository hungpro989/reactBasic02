import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";


class ExampleComponent extends React.Component {
    // state là: hành động reload các component
    //<>todo</> là: cách render 2 hay nhiều div trong 1 component
    state = {
        //key:'value'
        name: 'Hưng',
        desc: 'Người đẹp zai nhất',
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'Job01', title: 'Java', salary: '22000' },
            { id: 'Job02', title: 'PHP', salary: '5000' },
            { id: 'Job03', title: 'Python', salary: '7000' },
        ]
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnClickButton = () => {
        alert('Click Me!')
    }
    render() {
        console.log('>>> call render state: ', this.state)
        return (
            <div>

                <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} />
                <h1>Xin chào, Mr.{this.state.name}</h1>
                <h2>Mô tả: {this.state.desc}</h2>
                <button onClick={() => this.handleOnClickButton()}>Click Me</button>
                <AddComponent />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />

            </div >
        )
    }
}
export default ExampleComponent;