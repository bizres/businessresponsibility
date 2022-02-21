import * as React from 'react';
import {useEffect, useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useIntl} from "react-intl";
import {tw} from 'twind';
import Button from "@/components/button";

const PdfOverlay = (props) => {
  const {onClose} = props;
  const [open, setOpen] = useState({...props.openOverlay});
  const [url, setUrl] = useState({...props.pdfUrl});
  const {formatMessage: f} = useIntl();

  // iframe causing content-restriction errors, since the data is coming from another domain
 // const mockPdfUrl = '/data/template_report.pdf'

  useEffect(() => {
    setOpen(props.openOverlay)
    setUrl(props.pdfUrl)
  }, [props.openOverlay, props.pdfUrl]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth={'md'} className={tw(`h-screen`)}>
      <DialogTitle> {f({id: "Report"})}</DialogTitle>
      <DialogContent className={tw(`h-screen`)}>
        <div className={tw(`h-full border-2 border-rose-600`)}>
          <object
            data={`${url}`}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <iframe
              src={`${url}`}
              width="100%"
              height="100%"
            >
              <p>This browser does not support PDF!</p>
            </iframe>

          </object>
        </div>
      </DialogContent>
      <DialogActions>
        <Button primary={true} onClick={onClose}>{f({id: "Close"})}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default PdfOverlay;

