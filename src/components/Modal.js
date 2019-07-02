import React, { Component } from 'react'

// BadgeModal


export class Modal extends Component{
  
    componentDidMount() {
      this.modalTarget = document.createElement('div');
      this.modalTarget.className = 'modal';
      document.body.appendChild(this.modalTarget);
      this._render();
    }
    
    componentWillReceiveProps(nextProps) {
      // If isActive prop is true, set the className to 'modal is-active'
      if (nextProps.isActive !== this.props.isActive) {
        this.modalTarget.className = nextProps.isActive ?
          'modal is-active'
          : 'modal';
      }
    }
    
    componentWillUnmount() {
      // Clean up
      ReactDOM.unmountComponentAtNode(this.modalTarget);
      document.body.removeChild(this.modalTarget);
    }
    
    _render() {
      let element = (
        <Provider store={store}>
          <div>
            <div className="modal-background"></div>
          {this.props.children}
          </div>
        </Provider>
      );
      ReactDOM.render(element, this.modalTarget);
    }
    
    render() {
      return null;
    }
  }

export default Modal




