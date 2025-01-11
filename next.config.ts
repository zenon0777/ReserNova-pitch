import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const config: NextConfig = {
  // Your config options here
}

export default withNextIntl(config)