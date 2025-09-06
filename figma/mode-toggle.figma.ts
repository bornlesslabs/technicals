import { figma } from '@figma/code-connect';
import { ModeToggle } from '../components/mode-toggle';

figma.connect(ModeToggle, 'https://www.figma.com/file/YOUR_FILE_ID/Design-System?node-id=MODE_TOGGLE_NODE_ID', {
  props: {
    // This component doesn't have props, it's self-contained
  },
  example: () => (
    `<ModeToggle />`
  ),
});
