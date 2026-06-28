const BUGTRACK_ENDPOINT =
  process.env.REACT_APP_BUGTRACK_ENDPOINT ||
  "http://localhost/bug-tracker/api/report.php";

const BUGTRACK_API_KEY =
  process.env.REACT_APP_BUGTRACK_API_KEY ||
  "PASTE_YOUR_FOODBRIDGE_API_KEY_HERE";

let isSending = false;

const isConfigured = () => {
  return (
    BUGTRACK_ENDPOINT &&
    BUGTRACK_API_KEY &&
    BUGTRACK_API_KEY !== "PASTE_YOUR_FOODBRIDGE_API_KEY_HERE"
  );
};

const normalizeError = (error, fallbackMessage = "Unknown frontend error") => {
  if (error instanceof Error) {
    return {
      message: error.message || fallbackMessage,
      type: error.name || "FrontendError",
      stack: error.stack || ""
    };
  }

  return {
    message: String(error || fallbackMessage),
    type: "FrontendError",
    stack: ""
  };
};

export const sendErrorToBugTrack = async (error, context = {}) => {
  if (!isConfigured()) {
    console.warn("BugTrack is not configured. Add REACT_APP_BUGTRACK_API_KEY in client/.env");
    return;
  }

  if (isSending) return;
  isSending = true;

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
        url: window.location.href,
        browser: navigator.userAgent,
        context: {
          appName: "FoodBridge",
          appLayer: "frontend",
          ...context
        }
      }),
      keepalive: true
    });
  } catch (trackingError) {
    console.warn("BugTrack report failed:", trackingError.message);
  } finally {
    isSending = false;
  }
};

export const startBugTracking = () => {
  window.addEventListener("error", (event) => {
    sendErrorToBugTrack(event.error || event.message, {
      source: event.filename,
      lineNumber: event.lineno,
      columnNumber: event.colno,
      kind: "window_error"
    });
  });

  window.addEventListener("unhandledrejection", (event) => {
    sendErrorToBugTrack(event.reason, {
      kind: "unhandled_promise_rejection"
    });
  });

  window.BugTrackFoodBridge = {
    captureException: sendErrorToBugTrack
  };
};

