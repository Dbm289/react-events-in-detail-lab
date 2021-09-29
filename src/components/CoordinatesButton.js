// Code CoordinatesButton Component Here
import React, { Component } from 'react';
export default class CoordinatesButton extends Component {

    click = (event) => {
        this.props.onRecieveCoordinates([event.clientX, event.clientY])
    }

    render() {
		return (
            <div>
                <button onCLick={this.click}

            </div>
        )
        }

}
