
export default function Button({value, className, desabledButton}) {
  return (
    <button className={className} disabled={desabledButton}>
        {value}
    </button>
  )
}
