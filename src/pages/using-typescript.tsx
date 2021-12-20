// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="Using TypeScript" />
    <p>
     내가 있음으로 자신이 한 번 더 돌아봐지고 내가 있음으로
      자기를 더 아름답게 가꾸고 자신을 망치는 것들과 치열하게 싸워 나가는
      아름다운 등불로 걸어가야겠구나. 나이 들수록 더 푸르고 향기 나는 아름다운
      사람의 등불로 다시 그 등불 아래로 </p><br></br><p>Because of my presence, I have to look
      back myself once more. My presence would make me more beautiful, and force
      me to fight against the bad things destroying myself. So I have to stride
      toward the beautiful lamp. It will be more promising and fragrant while
      getting older It must be the lamp of a beautiful person. Once again, it
      invites us to under the lamp.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
