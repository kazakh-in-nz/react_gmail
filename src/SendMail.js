import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import "./SendMail.css";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close className="sendMail__close" onClick={() => dispatch(closeSendMessage())} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="to" placeholder="To" type="text" ref={register({ required: true })} />
        {errors.to && <p className="sendMail__error">To is Requried</p>}
        <input name="subject" placeholder="Subject" type="text" ref={register({ required: true })} />
        {errors.subject && <p className="sendMail__error">Subject is Requried</p>}
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          ref={register({ required: true })}
        />
        {errors.message && <p className="sendMail__error">Message is Requried</p>}
        <div className="sendMail__options">
          <Button className="sendMail__send" variant="contained" color="primary" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
