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
exports.login = void 0;
const selectUserByEmail_1 = require("../data/selectUserByEmail");
const authenticator_1 = require("../services/authenticator");
const hashManager_1 = require("../services/hashManager");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error("'email' e 'senha' são obrigatórios");
        }
        const user = yield (0, selectUserByEmail_1.selectUserByEmail)(email);
        if (!user) {
            throw new Error("Usuário não encontrado ou senha incorreta");
        }
        const passwordIsCorrect = yield (0, hashManager_1.compare)(password, user.password);
        if (!passwordIsCorrect) {
            throw new Error("Usuário não encontrado ou senha incorreta");
        }
        const token = (0, authenticator_1.generateToken)({
            id: user.id,
            role: user.role
        });
        res.send({
            message: "Usuário logado!",
            token
        });
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.login = login;
//# sourceMappingURL=login.js.map