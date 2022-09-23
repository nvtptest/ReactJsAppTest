import React from 'react';

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }

    handleChangetitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    sumitOnChange = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params');
            return;
        }
        console.log(event);
        this.props.addNewJob({ id: Math.floor(Math.random() * 100) + 1, name: this.state.title, salary: this.state.salary })

        this.setState({
            title: ``,
            salary: ``
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="title">Title job:</label><br />
                <input type="text" value={this.state.title}
                    onChange={(event) => this.handleChangetitle(event)}
                /><br />
                <label htmlFor="salary">Salary:</label><br />
                <input type="text" value={this.state.salary}
                    onChange={(event) => this.handleChangesalary(event)}
                /><br /><br />

                <input type="Submit" value="Submit"
                    onClick={(event) => this.sumitOnChange(event)}
                />
            </form>
        )
    }
};

export default AddComponent;