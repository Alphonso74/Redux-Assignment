import React, { Component } from 'react';
import {connect} from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// import * as actionTypes from '../../store/actions/actions';
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {



    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubFive}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <h3>Click Entries to Delete</h3>
                <ul>
                    {this.props.storedResults.map(strResult => (

                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>

                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

    const mapDispatchToProps = dispatch => {
        return {
            onIncrementCounter: () => dispatch(actionCreators.increment()),
            onDecrementCounter: () => dispatch(actionCreators.decrement()),
            onAddFive: () => dispatch(actionCreators.addFive(5)),
            onSubFive: () => dispatch(actionCreators.subFive(5)),
            onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
            onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))






        };
    };


export default connect(mapStateToProps,mapDispatchToProps)(Counter);
