"use strict";

const Alert = (props) => {
  // time (in ms) before log message hides
  // default: 5000
  alertify.set({delay: 10000});
  // log will hide after 10 seconds
  alertify.log(`Новый ID: ${props} символа`);
};

