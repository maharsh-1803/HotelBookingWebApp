"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = __importDefault(require("./routes/users"));
const auth_1 = __importDefault(require("./routes/auth"));
const path_1 = __importDefault(require("path"));
const cloudinary_1 = require("cloudinary");
const my_hotels_1 = __importDefault(require("./routes/my-hotels"));
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NANE,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
mongoose_1.default.connect(process.env.CONNECTION_STRING);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express_1.default.static(path_1.default.join(__dirname, "../../frontEnd/dist")));
app.use('/api/auth', auth_1.default);
app.use('/api/users', users_1.default);
app.use('/api/my-hotels', my_hotels_1.default);
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
