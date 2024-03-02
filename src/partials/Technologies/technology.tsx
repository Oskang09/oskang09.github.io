const technologies: object = {
  go: {
    display: 'Go / Golang',
    image: '/assets/icons/language/go.svg',
  },
  java: {
    display: 'Java',
    image: '/assets/icons/language/java.svg',
  },
  kotlin: {
    display: 'Kotlin',
    image: '/assets/icons/language/kotlin.svg',
  },
  'c#': {
    display: 'C# / .NET',
    image: '/assets/icons/language/csharp.svg',
  },
  sql: {
    display: 'SQL',
    image: '/assets/icons/database/sql.svg',
  },
  postgres: {
    display: 'PostgreSQL',
    image: '/assets/icons/database/postgres.svg',
  },
  nodejs: {
    display: 'Node JS',
    image: '/assets/icons/language/nodejs.svg',
  },
  'react-native': {
    display: 'React Native',
    image: '/assets/icons/language/react.svg',
  },
  heroku: {
    display: 'Heroku',
    image: '/assets/icons/server/heroku.svg',
  },
};

export default new Map(Object.entries(technologies));
