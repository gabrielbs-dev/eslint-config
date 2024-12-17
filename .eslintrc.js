module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: [
        '.eslintrc.js'
    ],
    rules: {
        // Requires explicit return types on functions.
        '@typescript-eslint/explicit-function-return-type': 'error',

        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                // Requires explicit visibility modifiers (public, private, protected) for class members.
                accessibility: 'explicit',
                overrides: {
                    // Does not enforce 'public' visibility on constructors.
                    constructors: 'no-public'
                }
            }
        ],

        // Disables the rule that enforces explicit return types for exported functions.
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // Disables the rule that requires a prefix (e.g., 'I') for interface names.
        '@typescript-eslint/interface-name-prefix': 'off',

        '@typescript-eslint/naming-convention': [
            'error',

            // Enforces PascalCase naming for classes, interfaces, type aliases, and enums.
            {
                selector: [
                    'class',
                    'interface',
                    'typeAlias',
                    'enum',
                ],
                format: [
                    'PascalCase',
                ]
            },

            // Enforces camelCase naming for class methods and functions.
            {
                selector: [
                    'classMethod',
                    'function',
                ],
                format: [
                    'camelCase',
                ]
            },

            // Enforces camelCase naming for variables or UPPER_CASE (for constants).
            {
                selector: 'variable',
                format: [
                    'camelCase',
                    'UPPER_CASE',
                ]
            },
        ],

        // Disables the rule that bans the use of the 'any' type.
        '@typescript-eslint/no-explicit-any': 'off',

        'prettier/prettier': [
            'error',
            {
                // Sets the maximum line width to 80 characters.
                printWidth: 80,

                // Defines the number of spaces for a tab (4 spaces).
                tabWidth: 4,

                // Uses spaces instead of tab characters for indentation.
                useTabs: false,

                // Enforces the use of single quotes instead of double quotes.
                singleQuote: true,

                // Adds trailing commas wherever possible (e.g., in objects, arrays, etc.).
                trailingComma: 'all',

                // Requires parentheses around arrow function parameters.
                arrowParens: 'always',

                // Enforces the use of semicolons at the end of statements.
                semi: true,

                // Automatically adjusts line endings based on the operating system.
                endOfLine: 'auto'
            },
        ]
    },
};
