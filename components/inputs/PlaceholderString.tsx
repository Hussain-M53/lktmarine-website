import {StringInputProps, useFormValue, Path} from 'sanity'

type Props = StringInputProps & {
  referenceField: string
}

const PlaceholderString = (props: Props) => {
  const {referenceField} = props

  const referenceValue = useFormValue([referenceField] as Path) as string

  return props.renderDefault({
    ...props,
    elementProps: {
      ...props.elementProps,
      placeholder: referenceValue ?? '',
    },
  })
}

export default PlaceholderString
