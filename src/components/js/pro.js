import { sendMessageToParent } from "./utils.js"

export function getProStatus() {
    // Force PRO enabled
    try {
        localStorage.setItem("pro", "true")
    } catch (e) {
        // ignore storage errors
    }
    return true
}

export async function updateProStatus() {
    const currentTime = new Date().getTime()
    try {
        localStorage.setItem("last_checked_pro", currentTime.toString())
        localStorage.setItem("pro", "true")
    } catch (e) {
        // ignore storage errors
    }
    sendMessageToParent({ message: "pro_status", pro: true })
    return true
}

export async function activateLicense(license_key) {
    // Bypass remote check and always enable PRO
    const currentTime = new Date().getTime()
    try {
        localStorage.setItem("last_checked_pro", currentTime.toString())
        localStorage.setItem("pro_key", license_key ?? "free-unlocked")
        localStorage.setItem("pro", "true")
    } catch (e) {
        // ignore storage errors
    }
    sendMessageToParent({ message: "pro_status", pro: true })
    return true
}

async function notFirstCheck(license_key) {
    // Always treat as valid
    return true
}
