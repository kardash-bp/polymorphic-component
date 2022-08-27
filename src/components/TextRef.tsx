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

type TextProps = { color?: Rainbow | 'black' }

type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref']

type TextRefComponentProps = <T extends React.ElementType>(
  props: PolymorphicComponentProps<T, TextProps> & {
    ref?: PolymorphicRef<T>
  }
) => React.ReactElement | null

export const TextRef: TextRefComponentProps = React.forwardRef(
  <T extends React.ElementType = 'span'>(
    {
      as,
      style,
      color,
      children,
      ...restProps
    }: PolymorphicComponentProps<T, TextProps>,
    ref?: PolymorphicRef<T>
  ) => {
    const Component = as || 'span'
    const internalStyles = color ? { style: { ...style, color } } : {}

    return (
      <Component {...restProps} {...internalStyles} ref={ref}>
        {children}
      </Component>
    )
  }
)
