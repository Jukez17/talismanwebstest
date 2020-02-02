import React from "react"
import PropTypes from "prop-types"
import { container, h1, h2, p } from "../styles/terms-styles"

const PrivacyPolicies = () => {
  return (
    <div style={container}>
      <p style={h1}>Privacy Policy for Talisman Webs</p>
      <p style={p}>
        At Talisman Webs, accessible from http://www.talismanwebs.com, one of
        our main priorities is the privacy of our visitors. This Privacy Policy
        document contains types of information that is collected and recorded by
        Talisman Webs and how we use it. If you have additional questions or
        require more information about our Privacy Policy, do not hesitate to
        contact us.
      </p>
      <p style={h2}>Log Files</p>
      <p style={p}>
        Talisman Webs follows a standard procedure of using log files. These
        files log visitors when they visit websites. All hosting companies do
        this and a part of hosting services' analytics. The information
        collected by log files include internet protocol (IP) addresses, browser
        type, Internet Service Provider (ISP), date and time stamp,
        referring/exit pages, and possibly the number of clicks. These are not
        linked to any information that is personally identifiable. The purpose
        of the information is for analyzing trends, administering the site,
        tracking users' movement on the website, and gathering demographic
        information.
      </p>
      <p style={h2}>Privacy Policies</p>
      <p style={p}>
        You may consult this list to find the Privacy Policy for each of the
        advertising partners of Talisman Webs. Our Privacy Policy was created
        with the help of the Privacy Policy Generator and the Online Privacy
        Policy Generator. Third-party ad servers or ad networks uses
        technologies like cookies, JavaScript, or Web Beacons that are used in
        their respective advertisements and links that appear on Talisman Webs,
        which are sent directly to users' browser. They automatically receive
        your IP address when this occurs. These technologies are used to measure
        the effectiveness of their advertising campaigns and/or to personalize
        the advertising content that you see on websites that you visit. Note
        that Talisman Webs has no access to or control over these cookies that
        are used by third-party advertisers.
      </p>
      <p style={h2}>Third Party Privacy Policies</p>
      <p style={p}>
        Talisman Webs's Privacy Policy does not apply to other advertisers or
        websites. Thus, we are advising you to consult the respective Privacy
        Policies of these third-party ad servers for more detailed information.
        It may include their practices and instructions about how to opt-out of
        certain options. You may find a complete list of these Privacy Policies
        and their links here: Privacy Policy Links. You can choose to disable
        cookies through your individual browser options. To know more detailed
        information about cookie management with specific web browsers, it can
        be found at the browsers' respective websites. What Are Cookies?
      </p>
      <p style={h2}>Children's Information</p>
      <p style={p}>
        Another part of our priority is adding protection for children while
        using the internet. We encourage parents and guardians to observe,
        participate in, and/or monitor and guide their online activity. Talisman
        Webs does not knowingly collect any Personal Identifiable Information
        from children under the age of 13. If you think that your child provided
        this kind of information on our website, we strongly encourage you to
        contact us immediately and we will do our best efforts to promptly
        remove such information from our records.
      </p>
      <p style={h2}>Online Privacy Policy Only</p>
      <p style={p}>
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in Talisman Webs. This policy is not applicable to
        any information collected offline or via channels other than this
        website.
      </p>
      <p style={h2}>Consent</p>
      <p style={p}>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its Terms and Conditions.
      </p>
      <div></div>
    </div>
  )
}

PrivacyPolicies.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PrivacyPolicies
