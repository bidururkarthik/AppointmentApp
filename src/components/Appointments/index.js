// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {Appointmentlist: [], title: '', date: '', likestar: false}

  onchangetitle = event => {
    this.setState({title: event.target.value})
  }

  onchangedate = event => {
    this.setState({date: event.target.value})
  }

  addclick = () => {
    const {title, date} = this.state
    const newappointment = {
      id: uuidv4(),
      title,
      date,
      likestar: false,
    }
    this.setState(each => ({
      Appointmentlist: [...each.Appointmentlist, newappointment],
      title: '',
      date: '',
    }))
  }

  onchangestarbutton = id => {
    this.setState(prev => ({
      Appointmentlist: prev.Appointmentlist.map(each => {
        if (each.id === id) {
          return {...each, likestar: !each.likestar}
        }
        return each
      }),
    }))
  }

  onmarkstar = () => {
    const {Appointmentlist} = this.state
    const startresult = Appointmentlist.filter(each => each.likestar === true)
    this.setState({Appointmentlist: startresult})
  }

  render() {
    const {Appointmentlist, title, date, likestar} = this.state

    return (
      <div className="bgcontainer">
        <div className="appointmentcontainer">
          <h1 className="heading">Add Appointment</h1>
          <div className="userinputcontainer">
            <div className="usertakentakencontainer">
              <label htmlFor="title">Title</label>
              <br />
              <input
                id="title"
                type="text"
                placeholder="Title"
                className="input"
                onChange={this.onchangetitle}
              />
              <br />
              <label htmlFor="datetime">Date</label>
              <br />
              <input
                id="datetime"
                type="date"
                placeholder="Date"
                className="input"
                onChange={this.onchangedate}
              />
              <br />
              <button
                type="button"
                className="addbutton"
                onClick={this.addclick}
                data-testid="star"
              >
                Add
              </button>
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointmentimage"
              />
            </div>
          </div>
          <hr />
          <div className="liststared">
            <h1 className="appoinmentsheading">Appointments</h1>
            <button
              type="button"
              className="staredbutton"
              onClick={this.onmarkstar}
            >
              Starred
            </button>
          </div>

          <ul className="Appointmentrowcontainer">
            {Appointmentlist.map(each => (
              <AppointmentItem
                key={each.id}
                title={each.title}
                date={each.date}
                onchangestarbutton={this.onchangestarbutton}
                Appointmentlist={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
