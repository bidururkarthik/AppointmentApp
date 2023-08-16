// Write your code here
import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {title, date, onchangestarbutton, Appointmentlist} = props
  const {id, likestar} = Appointmentlist
  const startclick = () => {
    onchangestarbutton(id)
  }
  const updatedate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const updatestart = likestar
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appoinmentlistcontainer">
      <div className="listcontainer">
        <p className="titleappoinment">{title}</p>
        <button type="button" className="starbutton" onClick={startclick}>
          <img src={updatestart} alt="star" className="" />
        </button>
      </div>
      <p className="dateappoinments">{updatedate}</p>
    </li>
  )
}
export default AppointmentItem
