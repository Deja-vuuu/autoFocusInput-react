import React, {Component} from 'react';

interface State  {
    a: number
}
class AutoFocusInput extends Component <any, State> {
    state= {
        a: 1
    }
    render() {
        const {a} = this.state;
        return (
            <div>
               {a}
            </div>
        );
    }
}

export default AutoFocusInput;