import { SITE_BODY_HTML } from './site-content'

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: SITE_BODY_HTML }} />
}
