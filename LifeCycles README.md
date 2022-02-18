# <p align="center" >Life Cycles & Phases</p>

<p align="center">
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

There are a few `phases` a component goes through during their **LIFE CYCLES**.

## Mount Phase

Here, an instant of a component is created and inserted into the `DOM`.\
There are few methods that can be added to these components and `React `will automatically call these methods. These
methods are called **LIFECYCLE HOOKS**\
\
They Hook certain moments during a lifecycle of a component then do something. . .yea.\
\
`Note: React will call these methods in these order`

- constructor

```jsx
    constructor()
{
    super()
    console.log("App - constructor")
}
```

- render

```jsx      
      render()
{
    console.log('App - rendered')
    return ()
}
```

- componentDidMount

```jsx  
  componentDidMount()
{
    console.log('App - mounted')
}
```

## <p align="center">~ </p>

**.\
\
.\
\
.**

## Update Phase

This occurs when the `state` or `props` (property) of a component changes.\
The LIFE CYCLE HOOKS that exist here are:

- render

```jsx      
      render()
{
    console.log('App - rendered')
    return ()
}
```

- componentDidUpdate

```jsx  
  componentDidUpdate()
{
    console.log('App - updated')
}
```

## <p align="center">~ </p>

**.\
\
.\
\
.**

## Unmount Phase

When a component is removed from the `DOM` this phase is triggered.\
**LIFECYCLE HOOKS** are as follows:

- componentWillUnmount

```jsx
componentWillUnmount()
{
    console.log('App - Unmounted')
}
```




