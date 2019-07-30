import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import Link from 'umi/link';
import Exception from 'ant-design-yjtec/lib/Exception';
const PAGE_NAME_UPPER_CAMEL_CASE = () => {
  return (
    <Exception
      type="404"
      desc={formatMessage({ id: 'BLOCK_NAME.description.404' })}
      linkElement={Link}
      backText={formatMessage({ id: 'BLOCK_NAME.exception.back' })}
    />
  );
}

export default PAGE_NAME_UPPER_CAMEL_CASE;
