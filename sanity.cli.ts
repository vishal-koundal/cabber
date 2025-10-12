import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'c4b8gl55',
    dataset: 'production',
  },
  deployment: {
    appId: 'beul4q7majtfiuk5zcl89wmb',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  },
})
