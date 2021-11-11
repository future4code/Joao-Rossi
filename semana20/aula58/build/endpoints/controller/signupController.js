"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const SignupBussiness_1 = require("../business/SignupBussiness");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const signupBussiness = new SignupBussiness_1.SignupBussiness();
        const { name, email, password, role } = req.body;
        if (!name ||
            !email ||
            !password ||
            !role) {
            throw new Error('Preencha os campos "name", "email" e "password"');
        }
        const token = yield signupBussiness.signup(name, email, password, role);
        res
            .status(201)
            .send({
            message: "Usuário criado!",
            token
        });
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.signup = signup;
//# sourceMappingURL=signupController.js.map