const AppWebSiteDisplayer = ({ url }) => {
  return (
    <div className="h-60 w-96">
      <iframe
        scrolling="no"
        className="pointer-events-none h-[56rem] w-[90rem] origin-[0_0] scale-[.25] shadow-2xl"
        src={url}
      ></iframe>
    </div>
  )
}

export default AppWebSiteDisplayer
