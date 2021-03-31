import moment from "moment"

export const apiEndpoint = "/api/jobs"
// export const apiEndpoint = "//mirrors.sustech.edu.cn/api/jobs"

export function doesJobMatch(job, key) {
  return job.name.toLowerCase().startsWith(key.toLowerCase())
}

export function job2Mirror(job) {
  var alert
  switch (job.status) {
    case "success":
    case "none":
      alert = null
      break
    case "syncing":
    case "pre-syncing":
      alert = "info"
      break
    case "paused":
    case "diabled":
    case "":
      alert = "warn"
      break
    default:  // "failed" or "" or unknown status
      alert = "error"
  }
  return {
    name: job.name,
    status: job.status,
    alert: alert,
    lastUpdated: moment(job.last_update, "YYYY-MM-DD HH:mm:ss ZZ").fromNow()
  }
}
