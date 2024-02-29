import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import Check from '@mui/icons-material/Check';
import CodeIcon from '@mui/icons-material/Code';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import IconButton from '@mui/joy/IconButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import Textarea from '@mui/joy/Textarea';
import * as React from 'react';

export default function ExampleTextareaComment({ showFileIcon = false }) {

  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [fontSize, setFontSize] = React.useState('medium');
  const [anchorElSize, setAnchorElSize] = React.useState(null);

  const [code, setCode] = React.useState(false);

  const fileInputRef = React.useRef(null);
  const [text, setText] = React.useState('');

  const handleOpen = () => {
    fileInputRef.current.click();
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('yüklenen dosya: ', file)
    }
  }

  return (
    <FormControl>
      <input
        ref={fileInputRef}
        type='file'
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <Textarea
        placeholder="Type something here…"
        minRows={3}
        onChange={(e) => setText(e.target.value)}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            <IconButton
              variant="plain"
              color="neutral"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <FormatBold />
              <KeyboardArrowDown fontSize="md" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              size="sm"
              placement="bottom-start"
              sx={{ '--ListItemDecorator-size': '24px' }}
            >
              {['200', 'normal', 'bold'].map((weight) => (
                <MenuItem
                  key={weight}
                  selected={fontWeight === weight}
                  onClick={() => {
                    setFontWeight(weight);
                    setAnchorEl(null);
                  }}
                  sx={{ fontWeight: weight }}
                >
                  <ListItemDecorator>
                    {fontWeight === weight && <Check fontSize="sm" />}
                  </ListItemDecorator>
                  {weight === '200' ? 'lighter' : weight}
                </MenuItem>
              ))}
            </Menu>

            <IconButton
              variant={italic ? 'soft' : 'plain'}
              color={italic ? 'primary' : 'neutral'}
              aria-pressed={italic}
              onClick={() => setItalic((bool) => !bool)}
            >
              <FormatItalic />
            </IconButton>

            {showFileIcon && (
              <IconButton
                variant="plain"
                color="neutral"
                onClick={handleOpen}
              >
                <BackupOutlinedIcon />
              </IconButton>
            )}

            <IconButton
              variant="plain"
              color="neutral"
              onClick={(event) => setAnchorElSize(event.currentTarget)}
            >
              <FormatSizeIcon />
              <KeyboardArrowDown fontSize="md" />
            </IconButton>
            <Menu
              anchorEl={anchorElSize}
              open={Boolean(anchorElSize)}
              onClose={() => setAnchorElSize(null)}
              size='sm'
              placement='bottom-start'
              sx={{ '--ListItemDecorator-size': '24px' }}
            >
              {['small', 'medium', 'large'].map((size) => (
                <MenuItem
                  key={size}
                  selected={fontSize === size}
                  onClick={() => {
                    setFontSize(size);
                    setAnchorElSize(null)
                  }}
                  sx={{ fontSize: size }}
                >
                  <ListItemDecorator>
                    {fontSize === size && <Check fontSize='sm' />}
                  </ListItemDecorator>
                  {size === 'medium' ? "medium" : size}
                </MenuItem>
              ))}
            </Menu>

            <IconButton
              variant={code ? 'plain' : 'soft'}
              color='neutral'
              onClick={() => setCode((bool) => !bool)}
            >
              <CodeIcon />
            </IconButton>

            <Button sx={{ ml: 'auto' }}>Send</Button>
          </Box>
        }

        sx={{
          minWidth: 300,
          fontWeight,
          fontStyle: italic ? 'italic' : 'initial',
          fontSize,

        }}
      />
    </FormControl>
  );
}
