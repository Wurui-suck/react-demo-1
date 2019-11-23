import React from 'react';
import './GlobalHeader.css'
class GlobalHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '使用百度搜索',
            style: { color: 'grey' }
        }
    }
    inputChange(e) {
        this.setState({ inputValue: e.target.value })
    }
    inputFocus() {
        if (this.state.inputValue === '使用百度搜索') {
            this.setState({
                inputValue: '', style: { color: 'black' }
            })
        }
    }
    inputBlur() {
        if (this.state.inputValue === '') {
            this.setState({
                inputValue: '使用百度搜索', style: { color: 'grey' }
            })
        }
    }
    render() {
        return (
            <header className="globalHeader">
                <form className='search' method="GET" action="https://www.baidu.com/s" target='_blank'>
                    <input
                        name="word"
                        type="text"
                        id="searchInput"
                        value={this.state.inputValue}
                        style={this.state.style}
                        onChange={this.inputChange.bind(this)}
                        onFocus={this.inputFocus.bind(this)}
                        onBlur={this.inputBlur.bind(this)}>
                    </input>
                    <button type="submit">搜索</button>
                </form>
            </header>
        )
    }
}
export default GlobalHeader