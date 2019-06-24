import React from 'react';
import PropTypes from 'prop-types';

const Fnbutton = React.forwardRef((props, ref) => {
    return <button ref={ref} className="refButtonClass">{props.children}</button>
});

export default class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionVal: this.props.data[0].title
        };
        this.handleClick = this.handleClick.bind(this);
        this.createRef = React.createRef();
        this.btnRef = React.createRef();
    }


    static propTypes = {
        changeValue: PropTypes.func
    };

    handleClick(e) {
        const val = e.target.value;

        this.setState(state => {
            return {optionVal: val}
        });

        this.props.changeValue(val);
    }


    render() {
        const { data } = this.props;
        const optionList = data.map(item => <option key={item.value} value={item.title}>{item.title}</option>);
        return (
            <div>
                <select name="" id="" onChange={this.handleClick} value={this.state.optionVal} style={{height: 30}}>
                    {optionList}
                </select>
                <h1 ref="stringRef">h1</h1>
                <h2 ref={el => this.callBackRef= el}>h2</h2>
                <h3 ref={this.createRef}>h3</h3>
                <Fnbutton ref={this.btnRef}>提交</Fnbutton>
            </div>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            this.refs.stringRef.textContent = 'new h1';
            this.callBackRef.textContent = 'new h2';
            this.createRef.current.textContent = 'new h3';
            console.log(this.refs.stringRef, this.callBackRef, this.createRef, this.btnRef.current,'---');
        }, 1000)
    }
}
