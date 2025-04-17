export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // Nuevas características
                'fix', // Correcciones de bugs
                'docs', // Documentación
                'style', // Cambios de estilo (formato, espacios, etc)
                'refactor', // Refactorización de código
                'perf', // Mejoras de rendimiento
                'test', // Añadir o modificar tests
                'chore', // Tareas de mantenimiento
                'revert', // Revertir cambios
                'ci', // Cambios en CI/CD
                'build', // Cambios en el sistema de build
            ],
        ],
        'type-case': [2, 'always', 'lowerCase'],
        'type-empty': [2, 'never'],
        'scope-case': [2, 'always', 'lowerCase'],
        'subject-case': [2, 'never', []],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'header-max-length': [2, 'always', 72],
    },
};
