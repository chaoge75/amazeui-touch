const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

class BadgeDoc extends React.Component {
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="badge"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/BadgeExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
}

export default BadgeDoc;
