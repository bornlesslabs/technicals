import { figma } from '@figma/code-connect';
import { Input } from '../components/ui/input';

figma.connect(Input, 'https://www.figma.com/file/YOUR_FILE_ID/Design-System?node-id=INPUT_NODE_ID', {
  props: {
    type: figma.enum('Type', {
      'Text': 'text',
      'Email': 'email',
      'Password': 'password',
      'Number': 'number',
      'Search': 'search',
    }),
    placeholder: figma.textContent('Placeholder'),
    disabled: figma.boolean('Disabled'),
    value: figma.textContent('Value'),
  },
  example: (props) => (
    `<Input
      type="${props.type}"
      placeholder="${props.placeholder}"
      disabled={${props.disabled}}
      ${props.value ? `value="${props.value}"` : ''}
    />`
  ),
});
