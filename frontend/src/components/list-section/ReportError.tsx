import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {IconButton, Tooltip} from "@mui/material";
import {tw} from "twind";
import {FeedbackOutlined, SentimentDissatisfiedOutlined} from "@mui/icons-material";
import {useIntl} from "react-intl";

export default function ReportError() {
  const [open, setOpen] = React.useState(false);
  const {formatMessage: f} = useIntl();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <span>
      <Tooltip title={f({id: "Report error"})} className={tw(`l-4`)} arrow placement={`top`}>
        <IconButton onClick={handleClickOpen}>
          <FeedbackOutlined className={tw(`text-2xl`)}/>
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> {f({id: "Send a Feedback"})}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {f({id: "You found inconsistencies or errors in the reporting list?"})} <SentimentDissatisfiedOutlined/>
            <br/>
            {f({id: "Thanks for informing us! We will fix them as soon as possible."})}
          </DialogContentText>
           <TextField
             autoFocus
             margin="dense"
             id="firstname"
             label={f({id: "Firstname"})}
             variant="filled"
             fullWidth
             required
           />
          <TextField
            margin="dense"
            id="lastname"
            label={f({id: "Lastname"})}
            variant="filled"
            fullWidth
            required
          />
           <TextField
             margin="dense"
             id="company"
             label={f({id: "Company"})}
             variant="filled"
             fullWidth
             required
           />
          <TextField
            margin="dense"
            id="name"
            label={f({id: "E-Mail"})}
            type="email"
            fullWidth
            variant="filled"
            required
          />
          <TextField
            margin="dense"
            id="name"
            label={f({id: "Your message"})}
            type="email"
            multiline={true}
            minRows={3}
            fullWidth
            variant="filled"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{f({id: "Cancel"})}</Button>
          <Button onClick={handleClose}>{f({id: "Send"})}</Button>
        </DialogActions>
      </Dialog>
    </span>
  );
}
