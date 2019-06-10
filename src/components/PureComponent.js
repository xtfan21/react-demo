import React from 'react';

export default class PureCom extends React.PureComponent {
    render() {
        return (
            <div>{JSON.stringify(this.props)}</div>
        )
    }
}
