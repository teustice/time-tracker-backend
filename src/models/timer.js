let db = require("mongoose");

import TimerSchema from '../schema/TimerSchema'

//Example method
// TimerSchema.methods.getTitles = function () {
//     var justText = `Here is the TITLE copy of this todo: ${this.title}`;
//     return justText;
// }

let Timer = db.model("Timer", TimerSchema);

export default Timer;
