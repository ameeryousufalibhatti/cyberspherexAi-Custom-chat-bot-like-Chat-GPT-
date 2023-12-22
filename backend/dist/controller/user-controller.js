import User from "../models/User.js";
export const getAllUsers = async (req, res, next) => {
    //get all user directly from database.
    try {
        const users = await User.find();
        return res.status(200).json({ message: "ok", users });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERR", cause: error.message });
    }
};
//# sourceMappingURL=user-controller.js.map