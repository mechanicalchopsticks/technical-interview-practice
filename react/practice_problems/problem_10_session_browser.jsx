/**
 * =============================================================================
 * INTERVIEW PROBLEM 10: Workshop Session Browser
 * Difficulty: Lead Frontend Developer | Estimated time: 40–45 min
 * =============================================================================
 *
 * CONTEXT
 * -------
 * You're building a session browser for an online learning event. Attendees
 * need to browse the provided schedule, search across session information, and
 * save sessions they want to attend.
 *
 * All schedule data is already available in SESSION_DATA. Do not call fetch().
 * This exercise focuses on practical React and JavaScript fundamentals rather
 * than styling, advanced architecture, or third-party libraries.
 *
 * =============================================================================
 * PROVIDED (do not modify)
 * =============================================================================
 *
 * SESSION_DATA — local JSON-style data containing nested tracks and sessions.
 *
 * =============================================================================
 * PART 1 — Render sessions with components and props  (~10 min)
 * =============================================================================
 *
 * Create a functional SessionCard component. Pass each session and any needed
 * event handlers into it through props.
 *
 * Render all six sessions. Each card must display:
 *   • session title
 *   • speaker name (session.speaker.name)
 *   • time and duration
 *   • every topic in session.topics
 *
 * Display "Showing 6 sessions" above the results. Use the singular word
 * "session" when only one result is shown.
 *
 * Required data-testid attributes:
 *   data-testid="session-card" — wrapper for each session
 *
 * =============================================================================
 * PART 2 — Track tabs and controlled search  (~15 min)
 * =============================================================================
 *
 * Add tab buttons: "All", "Frontend", "JavaScript", and "Leadership".
 *   • "All" is active initially.
 *   • Clicking a tab filters by the containing track.
 *   • The active tab must have aria-pressed="true"; all others must be false.
 *
 * Add a controlled input with placeholder "Search sessions".
 *   • Store its value in state and update it with onChange.
 *   • Match case-insensitively against a session's title, summary, speaker
 *     name, or topics.
 *   • Apply the text search and active track filter together.
 *   • Show "No sessions found" when the result is empty.
 *
 * Use standard JavaScript array/object access and array methods such as map(),
 * filter(), and some()/includes(). No API request is needed.
 *
 * =============================================================================
 * PART 3 — Select and save sessions  (~15–20 min)
 * =============================================================================
 *
 * Add a "View session" button to every SessionCard. When it is clicked:
 *   • Pass the session id into a handler in App.
 *   • Use find() to locate the session in the full local data.
 *   • Render one detail panel containing its title, full summary, speaker name,
 *     and the nested speaker bio.
 *   • Include a "Close" button that hides the panel.
 *
 * The detail panel must also contain a "Save session" button. Clicking it adds
 * that session id to state, changes the button label to "Remove saved", and
 * updates a visible "Saved: N" count. Clicking "Remove saved" removes the id.
 * A session may only be saved once.
 *
 * Required data-testid attributes:
 *   data-testid="session-detail" — selected session detail panel
 *
 * TEST CONTRACT
 * -------------
 * Tests find inputs by placeholder and buttons by visible text. They use only
 * the two data-testid attributes documented above. Preserve the specified
 * labels and seed-data text, but choose any reasonable HTML structure/styles.
 *
 * =============================================================================
 */

import { useState } from 'react'

// ── Local data (do not modify) ───────────────────────────────────────────────

export const SESSION_DATA = {
  event: {
    name: 'Build Better Web Workshop',
    date: '2026-10-08',
  },
  tracks: [
    {
      id: 'frontend',
      label: 'Frontend',
      sessions: [
        {
          id: 'session-component-thinking',
          title: 'Thinking in Components',
          time: '09:00',
          duration_minutes: 45,
          summary: 'Break a product screen into focused components with clear props and responsibilities.',
          speaker: {
            name: 'Elena Torres',
            bio: 'Elena leads frontend platform work and mentors engineers on maintainable UI development.',
          },
          topics: ['components', 'props', 'jsx'],
        },
        {
          id: 'session-accessible-ui',
          title: 'Accessible UI from the Start',
          time: '11:00',
          duration_minutes: 50,
          summary: 'Use semantic HTML and keyboard-friendly interactions while building everyday interfaces.',
          speaker: {
            name: 'Jordan Lee',
            bio: 'Jordan is an accessibility specialist who helps product teams make inclusive interfaces.',
          },
          topics: ['accessibility', 'html', 'forms'],
        },
      ],
    },
    {
      id: 'javascript',
      label: 'JavaScript',
      sessions: [
        {
          id: 'session-array-toolbox',
          title: 'Your Array Method Toolbox',
          time: '10:00',
          duration_minutes: 40,
          summary: 'Solve common data-display tasks with map, filter, find, and other array methods.',
          speaker: {
            name: 'Samira Okafor',
            bio: 'Samira teaches JavaScript through practical examples drawn from production interfaces.',
          },
          topics: ['arrays', 'filtering', 'javascript'],
        },
        {
          id: 'session-json-data',
          title: 'Working with Nested JSON',
          time: '14:00',
          duration_minutes: 45,
          summary: 'Safely read nested objects and arrays and turn local JSON data into useful UI.',
          speaker: {
            name: 'Marcus Green',
            bio: 'Marcus builds data-heavy web applications and developer education programs.',
          },
          topics: ['json', 'objects', 'rendering'],
        },
      ],
    },
    {
      id: 'leadership',
      label: 'Leadership',
      sessions: [
        {
          id: 'session-debug-together',
          title: 'Debugging Out Loud',
          time: '13:00',
          duration_minutes: 35,
          summary: 'Communicate observations, test assumptions, and narrow down UI problems with a teammate.',
          speaker: {
            name: 'Nina Park',
            bio: 'Nina manages a product engineering group and coaches collaborative problem solving.',
          },
          topics: ['debugging', 'communication', 'teamwork'],
        },
        {
          id: 'session-feedback-loop',
          title: 'Building a Healthy Feedback Loop',
          time: '15:00',
          duration_minutes: 45,
          summary: 'Make technical feedback specific, actionable, and useful across experience levels.',
          speaker: {
            name: 'Owen Rivera',
            bio: 'Owen is an engineering director focused on growing supportive, effective teams.',
          },
          topics: ['feedback', 'mentoring', 'leadership'],
        },
      ],
    },
  ],
}

// ── Your implementation goes below ──────────────────────────────────────────

export function SessionCard() {
  // TODO: receive session data and callbacks through props.
  return null
}

export default function App() {
  // TODO: add state, derive visible sessions, and render the interface.
  throw new Error('Not implemented — replace this with your solution.')
}
