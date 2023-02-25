export default function ({ $axios, $config: { apiKey } }) {
  $axios.onRequest((config) => {
    config.headers = {
      "Content-Type": "application/json",
      "X-API-KEY": apiKey,
    };
  });
}
