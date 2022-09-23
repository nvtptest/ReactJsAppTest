import React from 'react';
import AddComponent from './AddComponent';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
    state = {
        arrayJob: [
            { id: 1, name: 'Dev', salary: '500' },
            { id: 2, name: 'Test', salary: '400' },
            { id: 3, name: 'PM', salary: '1000' },

        ]
    }

    addNewJob = (job) => {
        console.log('Check function parent', job);
        this.setState({
            arrayJob: [...this.state.arrayJob, job]
        })
    }

    deleteJob = (job) => {
        let arrayJob = this.state.arrayJob;
        arrayJob.splice(arrayJob.indexOf(job), 1);

        this.setState({
            arrayJob: arrayJob
        }
        )
    }

    componentDidMount() {
        console.log('componentDidMount1');
    }

    componentDidUpdate(preProps, preState) {
        console.log('>>Run DidUpdate: ', 'pre state: ', preState, ' current state: ', this.state);
    }

    render() {
        console.log('>>Render MyComponent');
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />

                <ChildComponent arrayJobs={this.state.arrayJob} deleteJob={this.deleteJob} />
            </>
        );
    }
}

export default MyComponent;