const config = {
    mode: 'jit',
    purge: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            spacing: {
                128: '32rem',
            },
            backgroundImage: {
                'hero-bg': "url('/cbg.svg')",
                'hero-bg2': "url('/bg2.svg')"
            },
        },
    },

    plugins: []
};


module.exports = config;