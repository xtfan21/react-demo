import React from 'react';

class ArticleList extends React.Component {

    itemBox() {
        return (
            this.props.articleInfo.map(item => {
                return (
                    <li key={item.name}>
                        姓名：<span>{item.name}</span>
                        内容： <p>{item.content}</p>
                        加入时间： <span>{item.time}</span>
                    </li>
                )
            })
        )
    }

    render() {
        return (
            <div>
                <ul>
                    { this.itemBox() }
                </ul>
            </div>
        )
    }
}


export default ArticleList
