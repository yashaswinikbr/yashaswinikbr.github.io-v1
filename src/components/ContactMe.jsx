import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5wefgex', 'template_dcgzc39', form.current, 'R0dSZ-Wo89xIcPfkK')
      .then((result) => {
          console.log(result.text);
          console.log('message sent!')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
<div className="ContactForm" sx={{marginBottom:"10px"}}> 
      <Grid>
        <Card style={{ maxWidth: 450, padding: "10px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Me
          </Typography> 
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField name='user_name' placeholder="Enter full name" label="Full Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField name='user_email' type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField name='message' label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" value="send" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <br/>
    </div>
  );
};
export default ContactMe;