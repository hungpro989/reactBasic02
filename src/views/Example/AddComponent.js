import React from "react";

class AddComponent extends React.Component {
    state = {
        //key:'value'
        title: '',
        salary: '',
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> Check data input submit: ', this.state.title, '+', this.state.salary)
    }
    render() {
        console.log('>>> call render state: ', this.state)
        return (
            <div>
                <div>
                    <form >
                        <label htmlFor="fname">Title:</label><br />
                        <input type="text" id="fname" name="fname"
                            value={this.state.title} onChange={(event) => this.handleOnChangeTitle(event)}
                        /><br />
                        <label htmlFor="lname">Salary:</label><br />
                        <input type="text" id="lname" name="lname"
                            value={this.state.salary} onChange={(event) => this.handleOnChangeSalary(event)}
                        /><br /><br />
                        <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
                    </form>
                </div>
            </div >
        )
    }
}

export default AddComponent;