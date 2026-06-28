require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {
    reportBugTrackError,
    bugTrackExpressMiddleware,
    installProcessBugTracking
} = require("./bugTrackReporter");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/foodbridge";

installProcessBugTracking();

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(async (err) => {
        console.log(err);
        await reportBugTrackError(err, {
            kind: "mongodb_connection_error",
            url: MONGO_URI
        });
    });

app.use("/api/food", require("./routes/foodRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => {
    res.send("FoodBridge Backend Running");
});

app.get("/api/bugtrack-test", async (req, res) => {
    const error = new Error("FoodBridge backend test bug");

    await reportBugTrackError(error, {
        kind: "manual_backend_test",
        url: req.originalUrl
    });

    res.json({
        message: "Backend test bug sent to BugTrack. Refresh your BugTrack dashboard."
    });
});

app.use(bugTrackExpressMiddleware);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

