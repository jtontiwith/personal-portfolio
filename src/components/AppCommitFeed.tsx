type CommitFeedProps = {
  commits: Array<any>
}

const AppCommitFeed = ({ commits }: CommitFeedProps) => {
  const commitEls = commits.map((c, i) => {
    return (
      <div className="pt-2 mb-6 border-t border-gray-200" key={i}>
        <div>{c.type}</div>
        <div>{c.repo}</div>
        <div>{c.created}</div>
        <div>{c.commits.map((c: { message: any }) => c.message)}</div>
      </div>
    )
  })
  return <>{commitEls}</>
}

export default AppCommitFeed

// https://stackoverflow.com/questions/21869795/github-api-retrieve-user-commits
