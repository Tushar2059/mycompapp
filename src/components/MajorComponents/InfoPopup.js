import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

const InfoPopup = ({ openDialog, onAgree, closeDialog, content,popuptitle }) => {
  return (
    <>
      <Dialog open={openDialog}>
        <DialogTitle>
          {popuptitle}
        </DialogTitle>
        <DialogContent dividers>
          {content}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={onAgree}>
            Agree
          </Button>
          <Button variant="contained" color="secondary" onClick={closeDialog}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default InfoPopup;
