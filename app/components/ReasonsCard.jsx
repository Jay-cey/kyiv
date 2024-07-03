
function ReasonsCard(props) {
  return (
    <div className="p-10 md:p-16 space-y-3">
        <h3 className="text-2xl font-semibold">{props.title}</h3>
        <p className="text-base">{props.text}</p>
    </div>
  )
}

export default ReasonsCard