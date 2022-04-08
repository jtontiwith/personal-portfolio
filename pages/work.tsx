import Layout from '../src/components/Layout'
import WorkLayout from '../src/components/work-layout'
import AppWebsiteDisplayer from '../src/components/AppWebSiteDisplayer'
import AppCommitFeed from '../src/components/AppCommitFeed'
import { ReactElement } from 'react'

type WorkPageProps = {
  commits: object[]
}

const Work = ({ commits }: WorkPageProps) => {
  const projects = [
    'https://losyarumos.com/treehouse/',
    'https://redeslibertad.com/',
    'https://suspicious-allen-114d47.netlify.app/',
  ]
  const projectsArr = projects.map((p) => <AppWebsiteDisplayer url={p} />)

  return (
    <div className="pt-20 font-raleway">
      <div className="pl-12">
        <h1 className="mb-4 font-raleway text-[36px] font-bold">Work</h1>
        <p className="mb-24 text-2xl text-gray-600 font-libre">
          Some non-client work I can share.
        </p>
      </div>

      <div className="grid grid-cols-2 justify-items-center gap-y-12">
        {projectsArr}
      </div>
      <div className="mt-12 mx-11">
        <h2 className="mb-10 text-sm font-bold uppercase text-sky-800">
          recent commits
        </h2>
        <AppCommitFeed commits={commits} />
      </div>
    </div>
  )
}

export default Work

Work.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <WorkLayout>{page}</WorkLayout>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://api.github.com/users/jtontiwith/events/public'
  )
  const data = await res.json()

  const commits = data.map(
    (c: {
      type: any
      repo: { name: string }
      payload: { commits: any }
      created_at: any
    }) => {
      return {
        type: c.type,
        repo: c.repo.name.split('/').pop(),
        commits: c.payload.commits || [],
        created: c.created_at,
      }
    }
  )

  return {
    props: { commits },
  }
}
