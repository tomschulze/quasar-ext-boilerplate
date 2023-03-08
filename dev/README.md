# Quasar App (dev)

Isolated test environment for app extension

## Adding Testing Components
in the `src/pages` you can add Vue files to test your component/directive. When using `yarn dev` to build the UI, any pages in that location will automatically be picked up by dynamic routing and added to the test page.

## Install the dependencies
```bash
cd app-extension && yarn link && cd ..
cd ui && yarn && yarn build && cd ..
cd dev && \
  yarn && \
  yarn link "quasar-app-extension-test-ext" && \
  quasar ext invoke test-ext
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
```


### Format the files
```bash
yarn format
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
