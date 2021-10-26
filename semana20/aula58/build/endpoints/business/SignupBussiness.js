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
exports.SignupBussiness = void 0;
const insertUser_1 = require("../../data/insertUser");
const authenticator_1 = require("../../services/authenticator");
const hashManager_1 = require("../../services/hashManager");
const idGenerator_1 = require("../../services/idGenerator");
const User_1 = require("../../entities/classes/User");
class SignupBussiness {
    signup(name, password, email, role) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = (0, idGenerator_1.generateId)();
            const cypherPassword = yield (0, hashManager_1.hash)(password);
            const user = new User_1.User(id, name, email, cypherPassword, role);
            const token = (0, authenticator_1.generateToken)({ id, role: role });
            yield (0, insertUser_1.insertUser)(user);
            return token;
        });
    }
}
exports.SignupBussiness = SignupBussiness;
//# sourceMappingURL=SignupBussiness.js.map