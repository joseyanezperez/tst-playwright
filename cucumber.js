module.exports = {
    default: {
      require: ['./features/step_definitions/**/*.js'], // Path to step definitions
      paths: ['./features/**/*.feature'], // Path to feature files
      //tags: '@SimpleTest', // Optional: Filters by tag
    },
  };
  