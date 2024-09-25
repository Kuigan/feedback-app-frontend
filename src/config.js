const BACKEND_HOST = process.env.FEEDBACK_BACKEND_HOST || "192.168.154.240";
const BACKEND_PORT = process.env.FEEDBACK_BACKEND_PORT || 31865;

export const BACKEND_URL = `http://${BACKEND_HOST}:${BACKEND_PORT}/feedback`;