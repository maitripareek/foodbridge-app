const BUGTRACK_ENDPOINT =
  process.env.BUGTRACK_ENDPOINT ||
  "http://localhost/bug-tracker/api/report.php";

const BUGTRACK_API_KEY =
  process.env.BUGTRACK_API_KEY ||
  "PASTE_YOUR_FOODBRIDGE_API_KEY_HERE";

const isConfigured = () => {
  return (
    BUGTRACK_ENDPOINT &&
    BUGTRACK_API_KEY &&
    BUGTRACK_API_KEY !== "PASTE_YOUR_FOODBRIDGE_API_KEY_HERE"
  );
};

const normalizeError = (error) => {
  if (error instanceof Error) {
    return {
      message: error.message,
      type: error.name || "BackendError",
      stack: error.stack || ""
    };
  }

  return {
    message: String(error || "Unknown backend error"),
    type: "BackendError",
    stack: ""
  };
};

const reportBugTrackError = async (error, context = {}) => {
  if (!isConfigured()) {
    console.warn("BugTrack is not configured. Add BUGTRACK_API_KEY in server/.env");
    return;
  }

  const normalized = normalizeError(error);

  try {
    await fetch(BUGTRACK_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-BugTrack-Key": BUGTRACK_API_KEY
      },
      body: JSON.stringify({
        message: normalized.message,
        type: normalized.type,
        stack: normalized.stack,
        url: context.url || "FoodBridge backend",
        browser: "Node.js " + process.version,
        context: {
          appName: "FoodBridge",
          appLayer: "backend",
          ...context
        }
      })
    });
  } catch (trackingError) {
    console.warn("BugTrack backend report failed:", trackingError.message);
  }
};

const bugTrackExpressMiddleware = async (err, req, res, next) => {
  await reportBugTrackError(err, {
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    body: req.body,
    query: req.query
  });

  res.status(err.status || 500).json({
    message: err.message || "Internal server error"
  });
};

const installProcessBugTracking = () => {
  process.on("unhandledRejection", (reason) => {
    reportBugTrackError(reason, {
      kind: "unhandledRejection"
    });
  });

  process.on("uncaughtException", (error) => {
    reportBugTrackError(error, {
      kind: "uncaughtException"
    }).finally(() => {
      process.exit(1);
    });
  });
};

module.exports = {
  reportBugTrackError,
  bugTrackExpressMiddleware,
  installProcessBugTracking
};

