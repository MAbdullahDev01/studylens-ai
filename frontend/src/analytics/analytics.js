// src/analytics/analytics.js

/**
 * Calculates total study time (in minutes)
 */
export function getTotalStudyTime(sessions = []) {
  return sessions.reduce((total, session) => total + session.duration, 0);
}

/**
 * Average focus level across all sessions
 */
export function getAverageFocus(sessions = []) {
  if (sessions.length === 0) return 0;

  const sum = sessions.reduce((acc, s) => acc + s.focus_level, 0);
  return Number((sum / sessions.length).toFixed(2));
}

/**
 * Average energy level
 */
export function getAverageEnergy(sessions = []) {
  if (sessions.length === 0) return 0;

  const sum = sessions.reduce((acc, s) => acc + s.energy_level, 0);
  return Number((sum / sessions.length).toFixed(2));
}

/**
 * Group study time by subject
 * → used for pie / bar charts
 */
export function getStudyTimeBySubject(sessions = []) {
  const map = {};

  sessions.forEach((session) => {
    map[session.subject] =
      (map[session.subject] || 0) + session.duration;
  });

  return Object.entries(map).map(([subject, minutes]) => ({
    subject,
    minutes
  }));
}

/**
 * Daily study trend
 * → line chart friendly
 */
export function getDailyStudyTrend(sessions = []) {
  const map = {};

  sessions.forEach((session) => {
    map[session.date] =
      (map[session.date] || 0) + session.duration;
  });

  return Object.entries(map)
    .sort((a, b) => new Date(a[0]) - new Date(b[0]))
    .map(([date, minutes]) => ({
      date,
      minutes
    }));
}

/**
 * ML-ready feature extraction
 * (used later by backend)
 */
export function extractMLFeatures(sessions = []) {
  return sessions.map((s) => ({
    duration: s.duration,
    focus: s.focus_level,
    energy: s.energy_level,
    subject: s.subject,
    dayOfWeek: new Date(s.date).getDay()
  }));
}
