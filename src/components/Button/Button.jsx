
<<<<<<< HEAD
export default function Button({value, className}) {
  return (
    <button className={className}>
=======
export default function Button({value, className, desabledButton}) {
  return (
    <button className={className} disabled={desabledButton}>
>>>>>>> Dev-v4
        {value}
    </button>
  )
}
