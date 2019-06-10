import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

class TabSelected extends React.Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0
        }
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
                        return <p> {item}</p>
                    })
                }
                <h2>{ this.props.title }</h2>
            </div>
        )
    }
}

TabSelected.propTypes = {
    data: PropTypes.array
};
export default TabSelected;
