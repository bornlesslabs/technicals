# Figma Code Connect Setup

This directory contains Code Connect files that link your React components to Figma designs.

## Files Structure

- `button.figma.ts` - Code Connect for Button component
- `input.figma.ts` - Code Connect for Input component
- `textarea.figma.ts` - Code Connect for Textarea component
- `mode-toggle.figma.ts` - Code Connect for ModeToggle component
- `index.ts` - Exports all Code Connect files

## Setup Instructions

1. **Get your Figma File ID and Node IDs:**
   - Open your Figma design system file
   - Copy the file ID from the URL (after `/file/` and before the next `/`)
   - For each component, right-click and select "Copy link" to get the node ID

2. **Update the Code Connect files:**
   - Replace `YOUR_FILE_ID` with your actual Figma file ID
   - Replace `BUTTON_NODE_ID`, `INPUT_NODE_ID`, etc. with the actual node IDs from Figma

3. **Sync with Figma:**
   ```bash
   pnpm figma connect publish --token=$FIGMA_ACCESS_TOKEN
   ```

4. **Verify the connection:**
   - Go to your Figma file in Dev Mode
   - Select a component instance
   - You should see the React code in the Code panel

## Environment Variables

Make sure your `.env` file contains:
```
FIGMA_ACCESS_TOKEN=your_figma_token_here
```

## Commands

- **Publish Code Connect files:** `pnpm figma connect publish`
- **Parse components:** `pnpm figma connect parse`
- **Create new connections:** `pnpm figma connect create`

## Troubleshooting

- Ensure your components match the Figma design system structure
- Check that node IDs are correct in each `.figma.ts` file
- Verify your Figma access token has the correct permissions
