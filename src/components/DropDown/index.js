import React from 'react';
import PropTypes from 'prop-types';

export default class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionVal: this.props.data[0].title
        };
        this.handleClick = this.handleClick.bind(this);
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
                <select name="" id="" onChange={this.handleClick} value={this.state.optionVal}>
                    {optionList}
                </select>
            </div>
        )
    }
}
