import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Log extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    submitForm=(e)=>{
        e.preventDefault();
        this.props.history.push('/msg')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm.bind(this)}>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Log);