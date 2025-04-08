import './styles.css'

function VisorTimer() {
  return (
    <>
    <div className='container'>
      <input id='hour' name='hours-field' value="00" type="text" maxLength={2} />
      <p>:</p>
      <input id='minutes' name='minutes-field' value="00" type="text"  maxLength={2} />
      <p>:</p>
      <input id='seconds' name='seconds-field' value="30" type="text"  maxLength={2} />
    </div>
    </>
  )
}

export default VisorTimer
