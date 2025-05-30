const mongoose = require("mongoose");

const connectDB = async () => {
    // await mongoose.connect("mongodb+srv://shuambhore007:sMlJzPx2sUfT48Hn@devtindercluster.ip4al.mongodb.net/DevTinderCluster")
    await mongoose.connect("mongodb+srv://shuambhore007:gpGEB0BwNiXizHfx@techthingscluster.5re29to.mongodb.net/TechRhings")
}

module.exports = connectDB;
