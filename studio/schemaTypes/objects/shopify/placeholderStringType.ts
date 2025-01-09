import { defineType } from 'sanity'
import ProxyString from '../../../components/inputs/ProxyString'

export const placeholderStringType = defineType({
  name: 'placeholderString',
  title: 'Placeholder String',
  type: 'string',
  components: {
    input: ProxyString,
  },
})