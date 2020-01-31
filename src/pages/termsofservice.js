import React from "react"
import PropTypes from "prop-types"
import { container, h1, h2, p } from "./terms/styles"

const TermsOfService = () => {
  return (
    <div style={container}>
      <p style={h1}>Website Terms and Conditions of Use</p>
      <p style={h2}>1. Terms</p>
      <p style={p}>
        By accessing this Website, accessible from http://www.talismanwebs.com,
        you are agreeing to be bound by these Website Terms and Conditions of
        Use and agree that you are responsible for the agreement with any
        applicable local laws. If you disagree with any of these terms, you are
        prohibited from accessing this site. The materials contained in this
        Website are protected by copyright and trade mark law. These Terms of
        Service has been created with the help of the Terms of Service Generator
        and the Terms & Conditions Example.
      </p>
      <p style={h2}>2. Use License</p>
      <p style={p}>
        Permission is granted to temporarily download one copy of the materials
        on Talisman Webs's Website for personal, non-commercial transitory
        viewing only. This is the grant of a license, not a transfer of title,
        and under this license you may not: modify or copy the materials; use
        the materials for any commercial purpose or for any public display;
        attempt to reverse engineer any software contained on Talisman Webs's
        Website; remove any copyright or other proprietary notations from the
        materials; or transferring the materials to another person or "mirror"
        the materials on any other server. This will let Talisman Webs to
        terminate upon violations of any of these restrictions. Upon
        termination, your viewing right will also be terminated and you should
        destroy any downloaded materials in your possession whether it is
        printed or electronic format. Any content that Talisman Webs creates and
        sells to its clients may not be changed or modified with the intention
        of re-selling said content.
      </p>
      <p style={h2}>3. Disclaimer</p>
      <p style={p}>
        All the materials on Talisman Webs’s Website are provided "as is".
        Talisman Webs makes no warranties, may it be expressed or implied,
        therefore negates all other warranties. Furthermore, Talisman Webs does
        not make any representations concerning the accuracy or reliability of
        the use of the materials on its Website or otherwise relating to such
        materials or any sites linked to this Website.
      </p>
      <p style={h2}>4. Limitations</p>
      <p style={p}>
        Talisman Webs or its suppliers will not be hold accountable for any
        damages that will arise with the use or inability to use the materials
        on Talisman Webs’s Website, even if Talisman Webs or an authorize
        representative of this Website has been notified, orally or written, of
        the possibility of such damage. Some jurisdiction does not allow
        limitations on implied warranties or limitations of liability for
        incidental damages, these limitations may not apply to you.
      </p>
      <p style={h2}>5. Revisions and Errata</p>
      <p style={p}>
        The materials appearing on Talisman Webs’s Website may include
        technical, typographical, or photographic errors. Talisman Webs will not
        promise that any of the materials in this Website are accurate,
        complete, or current. Talisman Webs may change the materials contained
        on its Website at any time without notice. Talisman Webs does not make
        any commitment to update the materials.
      </p>
      <p style={h2}>6. Links</p>
      <p style={p}>
        Talisman Webs has not reviewed all of the sites linked to its Website
        and is not responsible for the contents of any such linked site. The
        presence of any link does not imply endorsement by Talisman Webs of the
        site. The use of any linked website is at the user’s own risk.
      </p>
      <p style={h2}>7. Site Terms of Use Modifications</p>
      <p style={p}>
        Talisman Webs may revise these Terms of Use for its Website at any time
        without prior notice. By using this Website, you are agreeing to be
        bound by the current version of these Terms and Conditions of Use.
      </p>
      <p style={h2}>8. Your Privacy</p>
      <p style={p}>Please read our Privacy Policy.</p>
      <p style={h2}>9. Governing Law</p>
      <p style={p}>
        Any claim related to Talisman Webs's Website shall be governed by the
        laws of gb without regards to its conflict of law provisions.
      </p>
      <div></div>
    </div>
  )
}

TermsOfService.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TermsOfService
