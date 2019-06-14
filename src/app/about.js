import React from 'react';
import ArticleList from '../components/ArticleList';

export default class About extends React.Component {
    constructor() {
        super();
        this.articleInfo = [{name: '李四', content: 'this is article 1', time: '2011-01-11'}, {name: '张三', content: 'this is article 2', time: '2018-22-23'}]
    }

    render() {
        return (
            <div>
                <ArticleList articleInfo={this.articleInfo}/>
            </div>
        )
    }
}
