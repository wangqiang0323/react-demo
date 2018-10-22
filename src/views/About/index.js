import React from 'react';
import Loading from './../../components/Loading'
import Loadable from 'react-loadable';
import dateFns from "date-fns";
import './index.css'

const LoadableCalendar = Loadable({
  loader: () =>
    import('../../components/Calendar'),
  loading: Loading
})

const Modal = ({ handleClose, show, children }) => {

  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        {children}
        {/* <button onClick={handleClose}>close</button> */}
      </section>
    </div>
  );
};

class About extends React.Component {
  state = {
    show: false,
    selectedDate: dateFns.format(new Date(), 'YYYY-MM-DD')
  };
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  changeSelectedDate = (selectedDate) => {
    this.setState({ selectedDate: dateFns.format(selectedDate, 'YYYY-MM-DD') });
  }
  onChange = () => {
    console.log(this.selectedDate)
  }
  render() {
    return (
      <div className="page-content">
        <h2>About</h2>
        <input type="text" value={this.state.selectedDate} onClick={this.showModal} onChange={this.onChange}></input>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <LoadableCalendar ref="calendar" changeSelectedDate={this.changeSelectedDate.bind(this)} handleClose={this.hideModal}/>
        </Modal>
      </div>
    );
  }
}

export default About