import React from "react"
import Grid from "@material-ui/core/Grid"
// Compoments for the page.
import Header from "../components/header"
import Footer from "../components/footer/footer"
import ContactForm from "../components/contactus/contactUs"
import NewsLetter from "../components/newsletter/newsLetter"
import WhyUs from "../components/whyus/whyUs"
import MeetTeam from "../components/team/team"
import CarouselOne from "../components/slider/slider"
import CarouselTwo from "../components/slider/slidertwo"
import CarouselThree from "../components/slider/sliderthree"
import TotalAmount from "../components/total/amount"
// Styling
import {
  mainStyle,
  carouselStyle,
  expertiseStyle,
  meetTeamStyle,
  totalAmountStyle,
  contactUsStyle,
  newsLetterStyle,
  h1,
  p,
} from "../styles/styles"

const IndexPage = () => (
  <div style={mainStyle}>
    <Header siteTitle="Talisman Webs" />
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <div style={carouselStyle}>
          <CarouselOne />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div style={expertiseStyle}>
          <p style={h1}>Why choose us?</p>
          <p style={p}>
            Experts in Web and App development, we are exactly what your
            business needs to thrive in the digital world.
          </p>
          <WhyUs />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div style={carouselStyle}>
          <CarouselTwo />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div style={carouselStyle}>
          <p style={h1}>Latest Projects</p>
          <p style={p}>Have a look at some of our recent masterpieces.</p>
          <CarouselThree />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div style={meetTeamStyle}>
          <p style={h1}>Meet The Team</p>
          <p style={p}>Some of the key people behind our success.</p>
          <MeetTeam />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div style={totalAmountStyle}>
          <TotalAmount />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div style={contactUsStyle}>
          <p style={h1}>Get In Touch</p>
          <p style={p}>Contact us on Social Media or email. We don't bite!</p>
          <ContactForm />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div style={newsLetterStyle}>
          <NewsLetter />
        </div>
      </Grid>
    </Grid>
    <Footer />
  </div>
)

export default IndexPage
