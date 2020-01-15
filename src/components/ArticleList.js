import React from 'react';
import ThemedButton from './ThemedButton';

export const TemeContext = React.createContext('light');
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
                <TemeContext.Provider value='dark'>
                    <Toolbar />
                </TemeContext.Provider>
            </div>
        )
    }
}

// class ThemedButton extends React.Component {
//     static contextType = TemeContext;
//
//     render() {
//         console.log(this, TemeContext, '====');
//         return <button theme={this.context}></button>
//     }
// }

function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}


export default ArticleList
