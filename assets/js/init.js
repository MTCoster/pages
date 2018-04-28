'use strict';

function init({url, fbAppId}) {
    window.fbAsyncInit = () => {
        FB.init({
            appId: fbAppId,
            version: 'v2.12',
            autoLogAppEvents: true,
            status: true,
            xfbml: true
        });
    };

    let path = location.pathname;

    if (url !== path) {
        history.replaceState({
            src: path,
            ext: path.startsWith(url) ? path.substring(url.length) : null
        }, document.title, url);
    }
}
