import React from 'react'
import SiteSquare from './SiteSquare'
import './GlobalMain.css'
class GlobalMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            siteMap: JSON.parse(localStorage.getItem('siteMap')) ||
                [
                    { logo: "D", url: "https://douyu.com", link: "https://douyu.com" },
                    { logo: "H", url: "https://huya.com", link: "https://huya.com" },
                    { logo: "X", url: "https://xiedaimala.com", link: "https://xiedaimala.com" },
                    { logo: "G", url: "https://github.com", link: "https://github.com" },
                    { logo: "M", url: "https://mail.qq.com/", link: "https://mail.qq.com/" },
                    { logo: "B", url: "https://bilibili.com", link: "https://bilibili.com" }
                ]
        }
    }
    simplifyUrl = (url) => {
        return url.replace('https://', '')
            .replace('http://', '')
            .replace('www.', '')
            .replace(/\/.*/, '')
    }
    updateSite(newSite) {
        this.setState({ siteMap: newSite })
        localStorage.setItem('siteMap', JSON.stringify(newSite))
    }
    componentDidMount() {
        document.addEventListener('keypress', (e) => {
            const { key } = e
            const hashMap = this.state.siteMap
            for (let i = 0; i < hashMap.length; i++) {
                if (hashMap[i].logo.toLowerCase() === key) {
                    window.open(hashMap[i].url)
                }
            }
        })
    }

    render() {
        return (
            <main className="globalMain">
                <SiteSquare site={this.state.siteMap}
                    simplifyUrl={this.simplifyUrl}
                    updateSite={this.updateSite.bind(this)}></SiteSquare>

            </main>
        )
    }
}
export default GlobalMain