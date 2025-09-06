import { figma } from '@figma/code-connect';
import { Button } from '../components/ui/button';

figma.connect(Button, 'https://www.figma.com/file/YOUR_FILE_ID/Design-System?node-id=BUTTON_NODE_ID', {
  props: {
    variant: figma.enum('Variant', {
      'Default': 'default',
      'Destructive': 'destructive',
      'Outline': 'outline',
      'Secondary': 'secondary',
      'Ghost': 'ghost',
      'Link': 'link',
    }),
    size: figma.enum('Size', {
      'Default': 'default',
      'Small': 'sm',
      'Large': 'lg',
      'Icon': 'icon',
    }),
    disabled: figma.boolean('Disabled'),
    children: figma.textContent('Button Text'),
  },
  example: (props) => (
    `<Button variant="${props.variant}" size="${props.size}" disabled={${props.disabled}}>
      ${props.children}
    </Button>`
  ),
});
