import React from 'react';
import './Demo.scss';

class ChildComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        showJobs: false
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    sumitOnChange = (event) => {
        event.preventDefault()
        alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    clickShowJob = (event) => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    onClickDelete = (job) => {
        console.log('X on me', job);
        this.props.deleteJob(job);
    }

    render() {
        let { arrayJobs } = this.props
        let isShowJobs = this.state.showJobs
        return (
            <>

                {
                    !isShowJobs ?
                        <div><button className='btn-show' onClick={(event) => this.clickShowJob(event)}>
                            Show
                        </button></div>
                        :
                        <>
                            <div>
                                {
                                    arrayJobs.map((item, index) => {
                                        return (
                                            <div>
                                                <div key={item.id}>
                                                    {item.name} - {item.salary}
                                                    <></><span onClick={() => this.onClickDelete(item)}> x</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div><button onClick={(event) => this.clickShowJob(event)}>Hide</button></div>
                        </>
                }
            </>
        );
    }
}

// const ChildComponent = (props) => {
//     console.log('>>Check child props', props);
//     let arrayJobs = props.arrayJobs
//     return (
//         <>
//             <div>Child Component {props.name}</div>
//             <div>
//                 {
//                     arrayJobs.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div>
//                                     <div key={item.id}>
//                                         {item.name}
//                                     </div>
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// };

export default ChildComponent;