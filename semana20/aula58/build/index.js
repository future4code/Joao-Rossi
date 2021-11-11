"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const signupController_1 = require("./endpoints/controller/signupController");
app_1.app.post('/user/signup', signupController_1.signup);
//# sourceMappingURL=index.js.map