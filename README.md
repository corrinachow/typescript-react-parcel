# Typescript React Parcel Starter

Starter template with TypeScript, React, and Parcel bundler.

## Built in Dependencies

- [React](https://reactjs.org/) + ReactDOM (16.13+)
- [TypeScript](https://www.typescriptlang.org/) with [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/) testing and [react-testing-library](https://github.com/testing-library/react-testing-library)
- [Parcel](https://parceljs.org/) bundler (1.13+)

## How to use

```
git clone git@github.com:corrinachow/typescript-react-parcel.git && cd typescript-react-parcel
yarn install
```

## How to build the application

```
yarn build
```

The default output directory for Parcel is `/dist`.

## How to test the application

```
yarn test
```

Create a **tests** directory in the same location of files which you want to test. Out of the box configuration for matching test files is `**/__tests__/*.(test).(ts|tsx)"`. Refer to `testMatch` in the `package.json` to modify the match parameters.
