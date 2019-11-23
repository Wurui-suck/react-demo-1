import React from 'react'
import './SiteAdd.css'
class SiteAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            site: this.props.site
        }
    }
    addSite() {
        let url = window.prompt('请问你要添加的网址是什么？')
        const { site } = this.state
        if (url.indexOf('http') !== 0) {
            url = 'https://' + url
        }
        let newSite = {
            logo: this.props.simplifyUrl(url)[0].toUpperCase(), url: url, link: url
        }
        site.push(newSite)
        this.props.updateSite(site)
    }
    render() {
        return (
            <li className="addButton lastLi" onClick={this.addSite.bind(this)}>
                <div className="icon-wrapper">
                    <svg className="icon">
                        <use xlinkHref="#icon-add"></use>
                    </svg>
                    <div className="text">新增网站</div>
                </div>
            </li>
        )
    }
}

export default SiteAdd