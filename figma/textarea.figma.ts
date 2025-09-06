import { figma } from '@figma/code-connect';
import { Textarea } from '../components/ui/textarea';

figma.connect(Textarea, 'https://www.figma.com/file/YOUR_FILE_ID/Design-System?node-id=TEXTAREA_NODE_ID', {
  props: {
    placeholder: figma.textContent('Placeholder'),
    disabled: figma.boolean('Disabled'),
    value: figma.textContent('Value'),
    rows: figma.enum('Rows', {
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
    }),
  },
  example: (props) => (
    `<Textarea
      placeholder="${props.placeholder}"
      disabled={${props.disabled}}
      ${props.rows ? `rows={${props.rows}}` : ''}
      ${props.value ? `value="${props.value}"` : ''}
    />`
  ),
});
