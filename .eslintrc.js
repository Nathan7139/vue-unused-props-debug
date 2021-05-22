module.exports = {
    extends: [
        'plugin:vue/vue3-recommended',
    ],
    rules: {
        'vue/no-unused-properties': [
            'error',
            {
                groups: [
                    'props', // TODO: figure out why doesn't work for toRefs
                    'data',
                    'setup',
                ],
                deepData: false,
                ignorePublicMembers: true, // mark with /** @public */
            },
        ],
    }
}
