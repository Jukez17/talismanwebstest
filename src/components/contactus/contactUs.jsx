import React from 'react'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { useStyles } from '../contactus/styles'

const ContactForm = props => {
    const classes = useStyles();
    const { firstName, email, message } = props

    return (
      <form className={classes.container}>
        <div>
          <TextField
              value={firstName}
              className={classes.firstNameField}
              name="Name"
              label="Name"
              onChange={event => event.target.value}
            />
        </div>
        <div>
          <TextField
            className={classes.emailField}
            name="email" 
            label="Email" 
            value={email}
            onChange={event => event.target.value}
          />
        </div>
        <div />
        <div className={classes.messageField}>
          <TextareaAutosize
            className={classes.textArea}
            aria-label="Message"
            placeholder="Write your message..."
            multiline
            rowsMin={6}
            value={message}
            onChange={event => event.target.value}
          />
        </div>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={() => {}}
          >
            Send
          </Button>
        </div>
      </form>
    )
  }
  
  export default ContactForm
  