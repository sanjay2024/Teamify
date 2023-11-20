"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_USER_PASS = exports.DATABASE_USER_NAME = exports.DATABASE_NAME = exports.PORT = void 0;
const dotenv = __importStar(require("dotenv"));
let path;
if (process.env.NODE_ENV == 'test') {
    path = `${__dirname}`;
}
else {
    path = `${__dirname}/../../.env`;
}
dotenv.config({ path });
exports.PORT = process.env.PORT;
exports.DATABASE_NAME = process.env.DATABASE_NAME;
+"";
exports.DATABASE_USER_NAME = process.env.DATABASE_USER_NAME + "";
exports.DATABASE_USER_PASS = process.env.DATABASE_USER_PASS;
