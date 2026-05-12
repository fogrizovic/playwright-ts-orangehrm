import { type Locator, type Page } from '@playwright/test'
import { BasePage } from './base.page'

export class DashboardPage extends BasePage {
  readonly pageTitleLabel: Locator = this.page.getByRole('heading', { name: 'Dashboard' })

  constructor(page: Page) {
    super(page, '/web/index.php/dashboard/index')
  }
}
