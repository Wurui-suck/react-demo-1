import React from 'react'
import SiteAdd from './SiteAdd'
import './SiteSquare.css'
class SiteSquare extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            site: this.props.site
        }
    }
    closeSite(index) {
        this.props.site.splice(index, 1)
        this.props.updateSite(this.props.site)
    }
    render() {
        let { site } = this.props
        const { simplifyUrl } = this.props
        return (
            <ul className='siteList'>
                {site.map((item, key) => {
                    return (
                        <li key={key} onClick={() => { window.open(item.link) }}>
                            <div className="site-wrapper">
                                <div className="logo">
                                    <img width='32' src={`https://${simplifyUrl(item.link)}/favicon.ico`} ></img>
                                </div>
                                <div className="link">{simplifyUrl(item.link)}</div>
                                <div className="close" onClick={(e) => {
                                    e.stopPropagation()
                                    this.closeSite.call(this, key)
                                }} >
                                    <div className="icon-wrapper">
                                        <svg className="icon delete">
                                            <use xlinkHref="#icon-shanchu"></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
                <SiteAdd
                    updateSite={this.props.updateSite}
                    site={this.state.site}
                    simplifyUrl={this.props.simplifyUrl}
                ></SiteAdd>
            </ul>
        )
    }
}

export default SiteSquare