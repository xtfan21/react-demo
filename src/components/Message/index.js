import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class MessageEntity extends React.Component {

    constructor(props) {
        super(props);
    }


    close = () => {
        const { container, type } = this.props;
        ReactDOM.unmountComponentAtNode(container);
        container && document.body.removeChild(container);
    };

    render() {
        return (
            <div id="message-info">
                <div className={`${this.props.type}-message message-notice`}>
                    <span>{this.props.message}</span>
                    <button onClick={this.close}>关闭</button>
                </div>
            </div>
        )
    }
}


const Message = {
    entity(props) {
        const container = document.createElement('div');
        // const messageInfo = document.getElementById('message-info');
        container.className = 'message-container';
        document.body.appendChild(container);
        ReactDOM.render(<MessageEntity container={container} {...props}/>, container);
    },
    error(message) {
        this.entity({type: 'error', message})
    },
    success(message) {
        this.entity({type: 'success', message})
    },

};

export default Message;

