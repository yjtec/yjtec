import React from 'react';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import { Exception } from 'ant-design-yjtec/lib/Exception';

const B = () => (
  <Exception
    type="403"
    desc={formatMessage({ id: 'b.description.403' })}
    linkElement={Link}
    backText={formatMessage({ id: 'b.exception.back' })}
  />
);

export default B;
