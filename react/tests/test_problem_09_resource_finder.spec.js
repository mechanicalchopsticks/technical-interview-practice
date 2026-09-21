/**
 * Playwright tests for Problem 09 — Resource Finder
 *
 * Run (from react/):
 *   PRACTICE_ANSWER=practice_problem_answers/cw_answer_09_resource_finder npm run test:09
 *
 * These tests target a completed implementation. They are expected to fail
 * against the untouched problem stub.
 */

import { test, expect } from '@playwright/test'

test.describe('Problem 09 — Resource Finder', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders all local resources with nested author and tag data', async ({ page }) => {
    await expect(page.getByTestId('resource-card')).toHaveCount(6)
    await expect(page.locator('body')).toContainText('Accessible Forms Checklist')
    await expect(page.locator('body')).toContainText('Maya Chen')
    await expect(page.locator('body')).toContainText('fundamentals')
    await expect(page.locator('body')).toContainText(/6 resources/i)
  })

  test('category tabs filter resources and identify the active tab', async ({ page }) => {
    const allTab = page.getByRole('button', { name: 'All', exact: true })
    const videosTab = page.getByRole('button', { name: 'Videos', exact: true })

    await expect(allTab).toHaveAttribute('aria-pressed', 'true')
    await videosTab.click()

    await expect(videosTab).toHaveAttribute('aria-pressed', 'true')
    await expect(allTab).toHaveAttribute('aria-pressed', 'false')
    await expect(page.getByTestId('resource-card')).toHaveCount(2)
    await expect(page.locator('body')).toContainText('Array Methods in Practice')
    await expect(page.locator('body')).not.toContainText('JSON Structure Viewer')
  })

  test('controlled search matches title case-insensitively', async ({ page }) => {
    const search = page.getByPlaceholder('Search resources')
    await search.fill('STATE MANAGEMENT')

    await expect(search).toHaveValue('STATE MANAGEMENT')
    await expect(page.getByTestId('resource-card')).toHaveCount(1)
    await expect(page.locator('body')).toContainText('State Management Basics')
    await expect(page.locator('body')).toContainText(/1 resource/i)
  })

  test('search matches nested author names and tags', async ({ page }) => {
    const search = page.getByPlaceholder('Search resources')

    await search.fill('Priya')
    await expect(page.getByTestId('resource-card')).toHaveCount(1)
    await expect(page.locator('body')).toContainText('Array Methods in Practice')

    await search.fill('accessibility')
    await expect(page.getByTestId('resource-card')).toHaveCount(2)
  })

  test('search and category filters work together', async ({ page }) => {
    await page.getByRole('button', { name: 'Tools', exact: true }).click()
    await page.getByPlaceholder('Search resources').fill('accessibility')

    await expect(page.getByTestId('resource-card')).toHaveCount(1)
    await expect(page.locator('body')).toContainText('Color Contrast Checker')
    await expect(page.locator('body')).not.toContainText('Accessible Forms Checklist')
  })

  test('shows an empty state when no resources match', async ({ page }) => {
    await page.getByPlaceholder('Search resources').fill('not-a-real-resource')
    await expect(page.getByTestId('resource-card')).toHaveCount(0)
    await expect(page.locator('body')).toContainText('No resources found')
  })

  test('View details shows the selected full resource data', async ({ page }) => {
    const card = page.getByTestId('resource-card').filter({
      hasText: 'Array Methods in Practice',
    })
    await card.getByRole('button', { name: 'View details' }).click()

    const detail = page.getByTestId('resource-detail')
    await expect(detail).toBeVisible()
    await expect(detail).toContainText('Array Methods in Practice')
    await expect(detail).toContainText('JavaScript Instructor')
    await expect(detail).toContainText('transformed, filtered by a user query')
  })

  test('selecting another resource replaces the open details', async ({ page }) => {
    await page.getByTestId('resource-card').nth(0)
      .getByRole('button', { name: 'View details' }).click()
    await page.getByTestId('resource-card').nth(1)
      .getByRole('button', { name: 'View details' }).click()

    await expect(page.getByTestId('resource-detail')).toHaveCount(1)
    await expect(page.getByTestId('resource-detail')).toContainText('State Management Basics')
  })

  test('Close hides the resource detail panel', async ({ page }) => {
    await page.getByTestId('resource-card').first()
      .getByRole('button', { name: 'View details' }).click()
    await page.getByTestId('resource-detail').getByRole('button', { name: 'Close' }).click()

    await expect(page.getByTestId('resource-detail')).toHaveCount(0)
  })
})
