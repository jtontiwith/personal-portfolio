const AppCommitFeed = ({ commits }) => {
  const commitEls = commits.map((c) => {
    return (
      <div className="pt-2 mb-6 border-t border-gray-200">
        <div>{c.type}</div>
        <div>{c.repo}</div>
        <div>{c.created}</div>
        <div>{c.commits.map((c) => c.message)}</div>
      </div>
    )
  })
  return commitEls
}

export default AppCommitFeed

// https://stackoverflow.com/questions/21869795/github-api-retrieve-user-commits
