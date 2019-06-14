import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

class TabSelected extends React.Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0,
            status: false,
            inputVal: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.myInput = React.createRef();
    }

    onActiveClick(val) {
        this.setState({
            activeIndex: val
        });
    }

    activeClass (val) {
        return val === this.state.activeIndex ? 'isActive': ''
    }

    // static propTypes = {
    //     data: PropTypes.array
    // };


    static defaultProps = {
        title: '设置props默认值'
    };


    handleClick() {
        console.log(this.state, 'inputVal');
        // this.myInput.current.focus();
        this.setState({status: !this.state.status});
    }

    handleChange(e) {
        const v = e.target.value;

        // this.setState异步
        this.setState((state, props) => {
            return { inputVal: v, title: state.activeIndex + props.title };
        });
    }

    render() {
        const navList = this.props.data;

        const listItem = navList.map((item)=> <li key={item.value}
                                                  onClick={this.onActiveClick.bind(this, item.value)}
                                                  className={this.activeClass(item.value)}> {item.title} {item.value} </li>);
        return (
            <div className="tab-container">
                <ul>
                    {listItem}
                </ul>
                {
                    navList.map(item => <div className={item.value === this.state.activeIndex ? `${'tab-content'} ${'isActiveContent'}` : 'tab-content'} key={item.value}>{item.value}</div>)
                }
                {
                    React.Children.map(this.props.children, function (item) {
                        return <p style={{color: 'red', fontWeight: 'bold'}}> {item}</p>
                    })
                }

                <button onClick={this.handleClick}>确定</button>
                {
                    this.state.status ? React.createElement('div', null, `${this.props.title}`, React.createElement('h2', {className: 'title'}, 'this is h2')) : ''
                }
                <input type="text" value={this.state.inputVal} onChange={this.handleChange}/>
            </div>
        )
    }
}



// proTypes 类型检验
// optionalArray: PropTypes.array,
//     optionalBool: PropTypes.bool,
//     optionalFunc: PropTypes.func,
//     optionalNumber: PropTypes.number,
//     optionalObject: PropTypes.object,
//     optionalString: PropTypes.string,
//     optionalSymbol: PropTypes.symbol,

TabSelected.propTypes = {
    data: PropTypes.array.isRequired
};

TabSelected.defaultProps = {
    title: 'set props'
};
export default TabSelected;
