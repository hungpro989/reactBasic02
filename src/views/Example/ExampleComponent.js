import React from "react";



class ExampleComponent extends React.Component {
    // state là: hành động reload các component
    //<>todo</> là: cách render 2 hay nhiều div trong 1 component
    state = {
        //key:'value'
        name: 'Hưng',
        desc: 'Người đẹp zai nhất'
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
        return (
            <div>
                <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} />
                <h1>Xin chào, Mr.{this.state.name}</h1>
                <h2>Mô tả: {this.state.desc}</h2>
                <button onClick={() => this.handleOnClickButton()}>Click Me</button>

            </div>
        )
    }
}
export default ExampleComponent;