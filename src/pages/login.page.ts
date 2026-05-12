import { type Locator, type Page } from '@playwright/test'
import { BasePage } from './base.page'

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator = this.page.getByRole('textbox', { name: 'Username' })
  private readonly passwordInput: Locator = this.page.getByRole('textbox', { name: 'Password' })
  private readonly loginButton: Locator = this.page.getByRole('button', { name: 'Login' })

  constructor(page: Page) {
    super(page, '/web/index.php/auth/login')
  }

  async doLogin(username: string, password: string) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }
}
