module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        'react-app', // CRA의 기본 ESLint 설정 사용
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:storybook/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    settings: {
        react: {
            version: 'detect' // CRA는 자체적으로 React 버전을 감지하므로 'detect'로 설정
        }
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        // 추가적인 규칙들을 필요에 따라 설정
    }
};
