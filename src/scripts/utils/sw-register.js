import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
    return;
  }

  console.log('Service Worker is not supported by this browser . . .');
};

export default swRegister;
