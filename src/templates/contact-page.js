import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as Icon from 'react-feather';

export const ContactPageTemplate = ({ name, address, mailing_address, city_state_zip, phone, alt_phone, fax, hours, website }) => {
  return (
    <div>
      <div className="container container-main grid-md">
        <div className="card">
          <div className="card-header">
            Address
          </div>
          <div className="card-body">
            {name}<br />
            {address}<br />
            {city_state_zip}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Mailing Address
          </div>
          <div className="card-body">
            {name}<br />
            {mailing_address}<br />
            {city_state_zip}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Phone
          </div>
          <div className="card-body">
            T: <a href={"tel:1-" + phone}>{phone}</a><br />
            F: {fax}<br />
            For After Hour Emergencies Only: <a href={"tel:1-" + alt_phone}>{alt_phone}</a><br />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Website
          </div>
          <div className="card-body">
            {website}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Hours
          </div>
          <div className="card-body">
            {hours}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="d-inline-block float-right">
          <a className="btn btn-sm btn-link tooltip tooltip-left" data-tooltip="Settings" rel="noopener noreferrer" href="https://flemingwater.geosync.cloud/admin" target="_blank">
            <Icon.Settings size={16}/>
          </a>
        </div>
      </div>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  address: PropTypes.string,
  phone: PropTypes.string,
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactPageTemplate
        name={frontmatter.name}
        address={frontmatter.address}
        mailing_address={frontmatter.mailing_address}
        city_state_zip={frontmatter.city_state_zip}
        phone={frontmatter.phone}
        alt_phone={frontmatter.alt_phone}
        fax={frontmatter.fax}
        hours={frontmatter.hours}
        website={frontmatter.website}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name,
        address,
        mailing_address,
        city_state_zip,
        phone,
        alt_phone,
        fax,
        hours,
        website
      }
    }
  }
`
