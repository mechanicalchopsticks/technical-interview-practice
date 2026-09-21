/**
 * Playwright tests for Problem 10 — Workshop Session Browser
 *
 * Run (from react/):
 *   PRACTICE_ANSWER=practice_problem_answers/cw_answer_10_session_browser npm run test:10
 *
 * These tests target a completed implementation. They are expected to fail
 * against the untouched problem stub.
 */

import { test, expect } from '@playwright/test'

test.describe('Problem 10 — Workshop Session Browser', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders all sessions and their nested data', async ({ page }) => {
    await expect(page.getByTestId('session-card')).toHaveCount(6)
    await expect(page.locator('body')).toContainText('Thinking in Components')
    await expect(page.locator('body')).toContainText('Elena Torres')
    await expect(page.locator('body')).toContainText('jsx')
    await expect(page.locator('body')).toContainText(/showing 6 sessions/i)
  })

  test('track tabs filter sessions and expose active state', async ({ page }) => {
    const allTab = page.getByRole('button', { name: 'All', exact: true })
    const leadershipTab = page.getByRole('button', { name: 'Leadership', exact: true })

    await expect(allTab).toHaveAttribute('aria-pressed', 'true')
    await leadershipTab.click()

    await expect(leadershipTab).toHaveAttribute('aria-pressed', 'true')
    await expect(allTab).toHaveAttribute('aria-pressed', 'false')
    await expect(page.getByTestId('session-card')).toHaveCount(2)
    await expect(page.locator('body')).toContainText('Debugging Out Loud')
    await expect(page.locator('body')).not.toContainText('Working with Nested JSON')
  })

  test('controlled search matches titles case-insensitively', async ({ page }) => {
    const search = page.getByPlaceholder('Search sessions')
    await search.fill('NESTED JSON')

    await expect(search).toHaveValue('NESTED JSON')
    await expect(page.getByTestId('session-card')).toHaveCount(1)
    await expect(page.locator('body')).toContainText('Working with Nested JSON')
    await expect(page.locator('body')).toContainText(/showing 1 session/i)
  })

  test('search matches speaker names and topics', async ({ page }) => {
    const search = page.getByPlaceholder('Search sessions')

    await search.fill('Samira')
    await expect(page.getByTestId('session-card')).toHaveCount(1)
    await expect(page.locator('body')).toContainText('Your Array Method Toolbox')

    await search.fill('debugging')
    await expect(page.getByTestId('session-card')).toHaveCount(1)
    await expect(page.locator('body')).toContainText('Debugging Out Loud')
  })

  test('track and search filters combine', async ({ page }) => {
    await page.getByRole('button', { name: 'Frontend', exact: true }).click()
    await page.getByPlaceholder('Search sessions').fill('forms')

    await expect(page.getByTestId('session-card')).toHaveCount(1)
    await expect(page.locator('body')).toContainText('Accessible UI from the Start')
  })

  test('shows the empty state for an unmatched query', async ({ page }) => {
    await page.getByPlaceholder('Search sessions').fill('database replication')
    await expect(page.getByTestId('session-card')).toHaveCount(0)
    await expect(page.locator('body')).toContainText('No sessions found')
  })

  test('View session opens details with the full nested speaker data', async ({ page }) => {
    const card = page.getByTestId('session-card').filter({
      hasText: 'Your Array Method Toolbox',
    })
    await card.getByRole('button', { name: 'View session' }).click()

    const detail = page.getByTestId('session-detail')
    await expect(detail).toHaveCount(1)
    await expect(detail).toContainText('Your Array Method Toolbox')
    await expect(detail).toContainText('Samira Okafor')
    await expect(detail).toContainText('production interfaces')
  })

  test('saving and removing a session updates state and count', async ({ page }) => {
    await page.getByTestId('session-card').first()
      .getByRole('button', { name: 'View session' }).click()

    const detail = page.getByTestId('session-detail')
    await expect(page.locator('body')).toContainText(/saved:\s*0/i)
    await detail.getByRole('button', { name: 'Save session' }).click()
    await expect(page.locator('body')).toContainText(/saved:\s*1/i)
    await expect(detail.getByRole('button', { name: 'Remove saved' })).toBeVisible()

    await detail.getByRole('button', { name: 'Remove saved' }).click()
    await expect(page.locator('body')).toContainText(/saved:\s*0/i)
    await expect(detail.getByRole('button', { name: 'Save session' })).toBeVisible()
  })

  test('saved sessions remain saved after viewing another session', async ({ page }) => {
    const cards = page.getByTestId('session-card')
    await cards.nth(0).getByRole('button', { name: 'View session' }).click()
    await page.getByTestId('session-detail').getByRole('button', { name: 'Save session' }).click()

    await cards.nth(1).getByRole('button', { name: 'View session' }).click()
    await expect(page.getByTestId('session-detail')).toHaveCount(1)
    await expect(page.locator('body')).toContainText(/saved:\s*1/i)

    await cards.nth(0).getByRole('button', { name: 'View session' }).click()
    await expect(
      page.getByTestId('session-detail').getByRole('button', { name: 'Remove saved' })
    ).toBeVisible()
  })

  test('Close hides the detail panel', async ({ page }) => {
    await page.getByTestId('session-card').first()
      .getByRole('button', { name: 'View session' }).click()
    await page.getByTestId('session-detail').getByRole('button', { name: 'Close' }).click()
    await expect(page.getByTestId('session-detail')).toHaveCount(0)
  })
})
