# React If Else

Classical If/Else statement solution for the conditional rendering in React JS.

## Usage

```ts
import { ConditionalView, If, Else } from "@antivixen/react-if-else";

export const BasicExample = () => {
  const { isLoading, isError, data } = getAsyncData();
  return (
    <>
      <h1>Our data</h1>
      <ConditionalView>
        <If when={isLoading}>
          <h2>Loading..</h2>
        </If>
        <If when={isError}>
          <h2>Error</h2>
        </If>
        <Else>
          <div>{data}</div>
        </Else>
      </ConditionalView>
    </>
  );
};
```

## Why?

Why, you might ask? Well, as we can observe from the given example, it's quite evident that the state aligns with the rendered hierarchy. Another option could be:

```ts
export const PureExample = () => {
  const { isLoading, isError, data } = getAsyncData();
  return (
    <>
      <h1>Our data</h1>
      {isLoading ? (
        <h2>Loading</h2>
      ) : isError ? (
        <h2>Error</h2>
      ) : (
        <dic>{data}</dic>
      )}
    </>
  );
};
```

To adopt a cleaner code approach, you should elevate the static data title and eliminate the redundant and overly complex ternary operator.
i

```ts
export const PureAdvancedExample = () => {
  const { isLoading, isError, data } = getAsyncData();

  if (isLoading) {
    return (
      <TitleContainer>
        <h1>Loading..</h1>
      </TitleContainer>
    );
  }

  if (isError) {
    return (
      <TitleContainer>
        <h1>Erorr</h1>
      </TitleContainer>
    );
  }

  return (
    <TitleContainer>
      <dic>{data}</dic>
    </TitleContainer>
  );
};
```

This not only appears significantly more verbose but also compels us to divide the view into two parts, resulting in the creation of more abstract layers.

`react-if-else` is better to be used for complex if/else rendering scenarios. If you need a solution to show/hide elements based on dynamic values, you should probably investigate [this library](https://www.npmjs.com/package/@antivixen/react-show-case)
