(() => {
  document.addEventListener('DOMContentLoaded', () => {
    // Reference: https://developer.chrome.com/extensions/webRequest
    chrome.webRequest.onBeforeSendHeaders.addListener(
      details => {
        if (details.url.indexOf('99vidas') !== -1) {
          const headers = details.requestHeaders;
          const headersLen = headers.length;

          for (let i = 0; i < headersLen; i++) {
            if (headers[i].name === 'User-Agent') {
              // Reference: https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
              headers[i].value = 'Mozilla/5.0 (Linux; Android 4.4.2); Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047';
              break;
            }
          }

          return { requestHeaders: headers };
        }
      },
      { urls: ['http://99vidas.com.br/*'] },
      ['blocking', 'requestHeaders']
    );
  });
})();
