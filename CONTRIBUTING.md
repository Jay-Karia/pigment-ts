# Contributing to PigmentTS

Thank you for considering contributing to PigmentTS! We welcome all types of contributions, from bug reports and new features to documentation improvements. Please read the following guidelines before contributing.

## How Can You Contribute?

### 1. Report Bugs

If you encounter any bugs or issues, please report them in the [GitHub Issues](https://github.com/Jay-Karia/pigment-ts/issues) with the following details:

- **Describe the bug**: Provide a concise description of the problem.
- **Steps to reproduce**: Outline the steps to replicate the issue.
- **Expected behavior**: What should happen instead?
- **Screenshots or code snippets**: If applicable, provide additional context.

### 2. Suggest New Features

We’re always open to new ideas! You can suggest new features or enhancements by creating a [GitHub issue](https://github.com/Jay-Karia/pigment-ts/issues). Make sure to include:

- **Feature description**: Explain the feature and how it improves PigmentTS.
- **Use cases**: Describe scenarios where the feature would be useful.
- **Examples**: If possible, provide examples of the feature in action.

### 3. Submit Pull Requests

We welcome pull requests (PRs) for new features, bug fixes, and documentation improvements. Please follow these steps:

1. **Fork the repository**: Clone it to your local machine.
2. **Create a new branch**: Use a descriptive name for your branch (e.g., `fix/color-conversion`, `feat/format-support`).
3. **Make changes**: Implement your feature or fix.
4. **Test your changes**: Make sure all tests pass and new features are properly tested.
5. **Format your code**: Run `npm run format` to format your code using Prettier.
6. **Commit your changes**: Use a concise, clear commit message.
7. **Submit a pull request**: Make sure to explain your changes clearly in the PR description.

### 4. Improve Documentation

Good documentation is essential for any project. If you find any inconsistencies or want to add new examples or tutorials, feel free to contribute.

## Coding Guidelines

- **TypeScript first**: Ensure the code is written in TypeScript. If you're introducing a new feature, make sure the types are well defined.
- **ESLint**: We use ESLint to enforce code style. Please ensure your code passes linting.
- **Formatting**: Run `npm run format` to format your code using Prettier.
- **Testing**: Write tests for any new features or bug fixes. We use [Jest](https://jestjs.io/) for testing, so make sure your tests cover all relevant cases.

## Run the Project Locally

**Clone the repository**

```shell
git clone https://github.com/Jay-Karia/pigment-ts
```

```shell
cd pigment-ts
```

**Install dependencies**

```shell
npm install
```

**Build the project**

```shell
npm run build
```

**See changes in action**

Open `node` in terminal and import the module

```shell
node
> const PigmentTS = require('./dist/index.js');
> PigmentTS.randomColor("hex");
```

**Run tests**

```shell
npm run test
```

---
