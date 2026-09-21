/**
 * =============================================================================
 * INTERVIEW PROBLEM 09: Resource Finder
 * Difficulty: Lead Frontend Developer | Estimated time: 40–45 min
 * =============================================================================
 *
 * CONTEXT
 * -------
 * You're building a small internal resource finder. Team members should be able
 * to browse resources by category, search the provided data, and open one result
 * to read its details. All data is already available locally — do not use fetch().
 *
 * The exercise is intentionally focused on React and JavaScript fundamentals.
 * Build the UI incrementally and be ready to explain how state changes cause it
 * to re-render.
 *
 * =============================================================================
 * PROVIDED (do not modify)
 * =============================================================================
 *
 * RESOURCE_DATA — local JSON-style data grouped into nested category objects.
 *
 * =============================================================================
 * PART 1 — Render the resource list  (~10 min)
 * =============================================================================
 *
 * Create a functional ResourceCard component that receives a resource through
 * props. Render all six resources from RESOURCE_DATA. Each card must show:
 *   • title
 *   • short description
 *   • author name (found in resource.author.name)
 *   • every tag in resource.tags
 *
 * Show the visible result count as "6 resources" (and "1 resource" singular).
 *
 * Required data-testid attributes:
 *   data-testid="resource-card" — wrapper for each resource result
 *
 * =============================================================================
 * PART 2 — Category tabs and search  (~15 min)
 * =============================================================================
 *
 * Add category buttons: "All", "Guides", "Videos", and "Tools".
 *   • "All" is selected initially.
 *   • Clicking a category displays only resources in that category.
 *   • Give the active button aria-pressed="true".
 *
 * Add a controlled search input with placeholder "Search resources".
 *   • Update the query with onChange and React state.
 *   • Match the query case-insensitively against title, description, author
 *     name, or any tag.
 *   • Search and category filters must work together.
 *   • Show "No resources found" when there are no matches.
 *
 * Use ordinary array methods such as map(), filter(), and some()/includes().
 * An API call is neither needed nor expected.
 *
 * =============================================================================
 * PART 3 — Clickable resource details  (~15 min)
 * =============================================================================
 *
 * Add a "View details" button to every ResourceCard. Pass the resource id from
 * the child component into an event handler owned by App.
 *
 * When clicked, use the id to find the full resource and render a detail panel
 * below the results. The panel must show:
 *   • full title and content
 *   • author name and role (nested under resource.author)
 *   • a "Close" button that hides the panel
 *
 * Only one detail panel should be visible at a time. Selecting another resource
 * replaces the current details.
 *
 * Required data-testid attributes:
 *   data-testid="resource-detail" — the selected resource detail panel
 *
 * TEST CONTRACT
 * -------------
 * Tests locate the search input by its placeholder, category and action buttons
 * by their visible text, and only use the two data-testid values listed above.
 * Keep the specified labels and seed data text visible.
 *
 * =============================================================================
 */

import { useState } from 'react'

// ── Local data (do not modify) ───────────────────────────────────────────────

export const RESOURCE_DATA = {
  categories: [
    {
      id: 'guides',
      label: 'Guides',
      resources: [
        {
          id: 'guide-accessible-forms',
          title: 'Accessible Forms Checklist',
          description: 'A practical checklist for labels, validation, and keyboard support.',
          content: 'Connect every field to a visible label, report errors clearly, and verify the complete form using only a keyboard.',
          author: { name: 'Maya Chen', role: 'Accessibility Lead' },
          tags: ['accessibility', 'forms', 'html'],
        },
        {
          id: 'guide-state-basics',
          title: 'State Management Basics',
          description: 'Learn when UI data belongs in component state.',
          content: 'Store values in state when changing them should update the rendered interface. Keep derived values out of state when they can be calculated.',
          author: { name: 'Noah Williams', role: 'Frontend Engineer' },
          tags: ['react', 'state', 'fundamentals'],
        },
      ],
    },
    {
      id: 'videos',
      label: 'Videos',
      resources: [
        {
          id: 'video-array-methods',
          title: 'Array Methods in Practice',
          description: 'Work through realistic map, filter, and find examples.',
          content: 'Follow a product list as it is transformed, filtered by a user query, and searched by identifier with standard JavaScript array methods.',
          author: { name: 'Priya Patel', role: 'JavaScript Instructor' },
          tags: ['javascript', 'arrays', 'data'],
        },
        {
          id: 'video-debug-rendering',
          title: 'Debugging React Rendering',
          description: 'Trace props and state to diagnose common rendering bugs.',
          content: 'Inspect component inputs, log event values, and reduce the interface to the smallest failing render before restoring each piece.',
          author: { name: 'Luis Romero', role: 'Staff Engineer' },
          tags: ['react', 'debugging', 'props'],
        },
      ],
    },
    {
      id: 'tools',
      label: 'Tools',
      resources: [
        {
          id: 'tool-json-viewer',
          title: 'JSON Structure Viewer',
          description: 'Inspect nested objects and arrays in a readable tree.',
          content: 'Paste JSON data to explore object properties, nested arrays, and primitive values without changing the source data.',
          author: { name: 'Avery Brooks', role: 'Developer Experience Lead' },
          tags: ['json', 'objects', 'debugging'],
        },
        {
          id: 'tool-contrast-checker',
          title: 'Color Contrast Checker',
          description: 'Compare foreground and background colors for readability.',
          content: 'Enter two colors to calculate their contrast ratio and review common text accessibility thresholds.',
          author: { name: 'Maya Chen', role: 'Accessibility Lead' },
          tags: ['accessibility', 'css', 'design'],
        },
      ],
    },
  ],
}

// ── Your implementation goes below ──────────────────────────────────────────

export function ResourceCard() {
  // TODO: accept the resource and click handler through props.
  return null
}

export default function App() {
  // TODO: add state, derive the visible resources, and render the interface.
  throw new Error('Not implemented — replace this with your solution.')
}
