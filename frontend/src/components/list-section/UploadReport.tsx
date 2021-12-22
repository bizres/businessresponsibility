import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {IconButton, styled, Tooltip} from "@mui/material";
import {tw} from "twind";
import {NoteAddOutlined} from "@mui/icons-material";
import {useIntl} from "react-intl";


const Input = styled('input')({
  display: 'none',
});


export default function UploadReport() {
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
      <Tooltip title={f({id: "Report error"})} className={tw(`align-top`)} arrow placement={`top`}>
        <IconButton onClick={handleClickOpen}>
          <NoteAddOutlined className={tw(`text-2xl`)}/>
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> {f({id: "Upload a report"})}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {f({id: "You have an additional report for listing here? We gladly add it to our reporting list after a short inspection. Thanks for your cooperation."})}
          </DialogContentText>
           <TextField
             autoFocus
             margin="dense"
             id="title"
             label={f({id: "Report title"})}
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
          <label htmlFor="upload-report-file">
            <Input accept="application/pdf" id="upload-report-file" multiple={false} type="file"/>
            <Button variant="contained" component="span" className={tw(`mt-2`)}>{f({id: "Upload a report"})}</Button>
          </label>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{f({id: "Cancel"})}</Button>
          <Button onClick={handleClose}>{f({id: "Send"})}</Button>
        </DialogActions>
      </Dialog>
    </span>
  );
}
