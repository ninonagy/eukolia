module.exports = {
    modules: true,
    plugins: {
        "postcss-preset-env": {
            stage: 2,
            features: {
                "custom-properties": {
                    preserve: false,
                },
                "custom-media-queries": true,
                "nesting-rules": true,
            },
            autoprefixer: {
                grid: true,
            },
        },
    },
};
