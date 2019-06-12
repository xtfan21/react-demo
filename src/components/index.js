import React from 'react';
import FunctionCom from './FunctionCom';
import MemoCom from './MemoCom';
import PureComponent from './PureComponent';
import TabSelected from './TabSelected/index';

const ob = {
    a: 11
};
export default class component extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'init fanxiaotong',
            data: [{title: '首页', value: 0}, {title: '支撑系统', value: 1}, {title: '客户洞察', value: 2}],
        };

        // setTimeout(() => {
        //     this.setState({
        //         value: Math.random() * 100,
        //         type: 1
        //     });
        //     ob.b = Math.random() * 100;
        //     ob.a = 222333222;
        // }, 4000)
    }

    render() {
        console.log('render===============');
        const { value, data } = this.state;
        return (
            <div>
                <h3>
                    FunctionCom
                </h3>
                <FunctionCom>
                    <span onClick={() => {alert('我是父组件事件')}}>点击我哦~</span>
                </FunctionCom>

                <h3>MemoCom:</h3>
                <MemoCom ob={ob} value={value}/>

                <h3>PureComponent</h3>
                <PureComponent ob={ob} />

                <h3>tab切换组件</h3>
                <TabSelected data={data}>
                    <span>hello</span>
                    <span>world</span>
                </TabSelected>
            </div>
        )
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        this.timeId = setInterval(() => {
            this.setState({
                value: 'update' + new Date()
            })
        }, 8000);

        console.log('componentDidMount');
    }

    componentWillUpdate(nextProps, nextState) {
        // nextProps, nextState 更新后的值
        console.log(nextProps, nextState, 'componentWillUpdate');
    }

    componentDidUpdate(nextProps, nextState) {
        // nextProps, nextState 更新前的值
        console.log(nextProps, nextState, 'componentDidUpdate');
    }

    componentWillUnmount() {
        clearInterval(this.timeId, '执行卸载');
    }
}
