import React from 'react';

const DefaultLayout = (props) => {
  return (<html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{props.title}</title>
      </head>
      <body>
        {props.children}
      </body>
    </html>
    );
}

module.exports = DefaultLayout;