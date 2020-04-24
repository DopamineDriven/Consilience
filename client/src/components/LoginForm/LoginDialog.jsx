import React from "react";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, rgba(128,128,128, .5) 30%, rgba(65, 131, 215, .75) 90%)',

  },
  content: {
    background: 'linear-gradient(25deg, rgba(128,128,128, .9) 30%, rgba(65, 131, 215, .8) 90%)'
  }
});

export default function FormDialog(props) {

  const classes = useStyles();

  return (
    <div className="overarching">
      <Dialog
        className={classes.root}
        open={props.open}
        onClose={props.close}
        aria-labelledby="form-dialog-title"
      >
        <div className={classes.content}>
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="Email Address*"
              name='email'
              type="email"
              onChange={props.handleInput}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="filled-password-input"
              label="Password (8-32 characters)*"
              name='password'
              type="password"
              autoComplete="current-password"
              onChange={props.handleInput}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Grid container>
              <Grid item xs={12}>
                <Button onClick={props.close} color="primary">
                  Cancel
            </Button>
                <Button onClick={props.submitLogin} color="primary">
                  Submit
            </Button>
              </Grid>
              <Grid item xs={12}>
                <p> Don't have an account? &nbsp; <button className='linkButton' onClick={props.openRegister} > Register Here! </button> </p>
              </Grid>
            </Grid>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
