import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
import Register from "./Register";

const SimpleModal = () => {
    const [open, setOpen] = useState(true);


    return (
        <div>
            <Dialog
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <h2 className="dialog-regist">Registration</h2>
                <Register />
            </Dialog>
        </div>
    )
}
export default SimpleModal;