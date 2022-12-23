import * as zoid from 'zoid/dist/zoid.frameworks';


export const ZoidLoginComponent =
    zoid.create({
        tag: "login-component",

        dimensions: {
            width: "350px",
            height: "200px",
        },

        url: ({ props }) => {
            return {
                demo: "http://localhost:3000/login",
                production: "https://my-site.com/login",
                test: "mock://www.my-site.com/base/test/windows/login/index.htm",
            }[props.env];
        },

        props: {
            env: {
                type: "string",
                default: () => "production",
            },

            prefilledEmail: {
                type: "string",
            },

            onLogin: {
                type: "function",
            },
        },

        defaultContext: "iframe",

        prerenderTemplate: function containerTemplate({ doc }) {
            const html = doc.createElement('html');
            const p = doc.createElement('p');
            p.innerText = 'loading...';
            html.appendChild(p);
            return html;
        },
    });
