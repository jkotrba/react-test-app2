import * as React from 'react';
import { connect } from 'react-redux';
import { incrementActionAsync, decrementActionAsync } from '../../store/counter/actions';

export interface ExampleProps {
   increment: (by: number) => void;
   decrement: (by: number) => void;
   count: number;
}

class Example extends React.Component<ExampleProps, any> {
   onIncrementClick = () => {
      this.props.increment(1);
   };
   onDecrementClick = () => {
      this.props.decrement(1);
   }


   public render() {
      return (
         <div>
            {this.props.count}
            <div>
               <button onClick={this.onIncrementClick}>Increment</button>
            </div>
            <div>
               <button onClick={this.onDecrementClick}>Decrement</button>
            </div>
         </div>

      );
   }
}

const mapStateToProps = state => {
   const { counter } = state;

   return {
      count: counter.count
   };
}

const mapDispatchToProps = dispatch => {
   
   return {
      increment: (by: number) => dispatch(incrementActionAsync(by)),
      decrement: (by: number) => dispatch(decrementActionAsync(by))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
