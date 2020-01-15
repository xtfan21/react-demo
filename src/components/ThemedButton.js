import React from "react";

import { TemeContext } from './ArticleList';

class ThemedButton extends React.Component {
    // static contextType = TemeContext;
    constructor(props, context) {
        super();
        console.log(context, '11');

    }
    render() {
        console.log(this, TemeContext, '====');
        return <button theme={this.context}></button>
    }
}
export default ThemedButton;
