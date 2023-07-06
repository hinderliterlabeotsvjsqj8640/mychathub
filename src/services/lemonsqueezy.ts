import { ofetch } from 'ofetch'

type ActivateResponse =
  | {
      activated: true
      instance: { id: string }
      meta: {
        product_id: number
      }
    }
  | { activated: false; error: string }

async function activateLicense(key: string, instanceName: string) {
  return 1
}

async function deactivateLicense(key: string, instanceId: string) {
  await ofetch('https://api.lemonsqueezy.com/v1/licenses/deactivate', {
    method: 'POST',
    body: {
      license_key: key,
      instance_id: instanceId,
    },
  })
}

type LicenseKey = {
  valid: boolean
}

async function validateLicense(key: string, instanceId: string): Promise<LicenseKey> {

  return { valid: true }
}

export { activateLicense, deactivateLicense, validateLicense }
