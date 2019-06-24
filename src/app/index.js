import React from 'react';
import Message from '../components/Message/index';

export default class Home extends React.Component {

    handleClick() {
        Message.success('更改成功');
        Message.error('更新失败');
    }

    render() {
        return (
            <div className="app-contain">
                this is 主页内容
                <button onClick={this.handleClick}>提交</button>
            </div>
        )
    }
}
