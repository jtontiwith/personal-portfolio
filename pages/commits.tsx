import Layout from '../src/components/Layout'

const Work = () => {
  return <div>work page here</div>
}

export default Work

Work.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
