const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

class Popover extends React.Component {
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="popover"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/PopoverExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
}

export default Popover;
