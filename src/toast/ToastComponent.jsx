import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { closeToast } from "../state/toastSlice";

const Toast = () => {
  const message = useSelector((state) => state.toast?.message);
  const severity = useSelector((state) => state.toast?.severity);
  const isOpen = useSelector((state) => state.toast?.isOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeToast());
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={5000} onClose={handleClose}>
      <MuiAlert severity={severity} onClose={handleClose}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Toast;
