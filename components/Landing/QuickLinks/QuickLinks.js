import { useState } from 'react';
import ShareLinks from './ShareLinks';

const QuickLinks = (props) => {
  const [serveLinks, setServeLinks] = useState(props.internalLinks);
  return <ShareLinks serveLinks={serveLinks} />;
};

export default QuickLinks;
