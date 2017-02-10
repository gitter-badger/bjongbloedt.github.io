import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import ReactGa from 'react-ga';
import './style.css'
import '../../static/fonts/fontawesome/style.css'

class SiteLinks extends React.Component {
    render () {

      return (
        <div className="blog-links">
          <ul>
            {config.siteTwitterUrl && (
              <li>
                <ReactGa.OutboundLink
                  eventLabel="link-to-twitter"
                  to={config.siteTwitterUrl} >
                  <i className="fa fa-twitter" />
                </ReactGa.OutboundLink>
              </li>
            )}
            {config.siteLinkedinUrl && (
              <li>
                <ReactGa.OutboundLink
                  eventLabel="link-to-linkedin"
                  to={config.siteLinkedinUrl} >
                  <i className="fa fa-linkedin" />
                </ReactGa.OutboundLink>
              </li>
            )}
            {config.siteStackOverflowUrl && (
              <li>
                <ReactGa.OutboundLink
                  eventLabel="link-to-stack-overflow"
                  to={config.siteStackOverflowUrl} >
                  <i className="fa fa-stack-overflow" />
                </ReactGa.OutboundLink>
              </li>
            )}
            {config.siteGithubUrl && (
              <li>
                <ReactGa.OutboundLink
                  eventLabel="link-to-github"
                  to={config.siteGithubUrl} >
                  <i className="fa fa-github-alt" />
                </ReactGa.OutboundLink>
              </li>
            )}
          </ul>
          <ul>
            {config.siteEmailUrl && (
              <li>
                <ReactGa.OutboundLink
                  eventLabel="link-to-email"
                  to={config.siteEmailUrl} >
                  <i className="fa fa-envelope-o" />
                </ReactGa.OutboundLink>
              </li>
            )}
            {config.siteTelegramUrl && (
              <li>
                <a href={config.siteTelegramUrl}>
                  <i className="fa fa-paper-plane" />
                </a>
              </li>
                )}
          </ul>
          <ul>
            {config.siteRssUrl && (
              <li>
                <a href={config.siteRssUrl}><i className="fa fa-rss" /></a>
              </li>
            )}
          </ul>
        </div>
      )
  }
}

export default SiteLinks
