import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class PortalDemo extends Component {
    render() {
        return ReactDOM.createPortal(
            <div>
                This content is from portal root.
            </div>,
            document.getElementById('portal-root')
        )
    }
}
export default PortalDemo;