import React from 'react'

type Rainbow =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'violet'

type AsProp<T extends React.ElementType> = {
  as?: T
}

type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P)

type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>

export const Text = <T extends React.ElementType = 'span'>({
  as,
  style,
  color,
  children,
  ...restProps
}: PolymorphicComponentProps<T, { color?: Rainbow | 'black' }>) => {
  const Component = as || 'span'
  const internalStyles = color ? { style: { ...style, color } } : {}

  return (
    <Component {...restProps} {...internalStyles}>
      {children}
    </Component>
  )
}
