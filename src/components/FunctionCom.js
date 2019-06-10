import React, {cloneElement} from 'react';

// export default function FunctionCom (props) {
//     console.log(props);
//     return (
//         <div> this is functionCom {props.value}</div>
//     )
// }


// export default class Component extends React.Component {
//
//     shouldComponentUpdate(oldVal, newVal) {
//         return oldVal.a !== this.props.a;
//     }
//
//     render() {
//         return (
//             <div>{JSON.stringify(this.props)}</div>
//         )
//     }
// }


export default class Component extends React.Component {
    onClick() {
        alert('clone');
        const props = this.props.children.props;
        props.onClick();
    }

    render() {
        const newProps = Object.assign({}, this.props.children.props, {onClick: this.onClick.bind(this)});
        return cloneElement(this.props.children, newProps);
    }
}
