var paths = window.location.pathname.split('/');
paths = paths.map((item) => '..');
export const environment = {
    path: {
        app: '/o/sample-senna-angular-app2-bundle',
        css: `${paths.join('/')}/o/sample-senna-angular-app2-bundle`,
    }
};
