import React, { Component } from 'react';

//Get Icons
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Toggle = ({ switchToggle, onClick }) => {
    return (
        <FontAwesomeIcon
            onClick={onClick}
            icon={switchToggle ? faToggleOn : faToggleOff}
            color={switchToggle ? 'var(--btnroute)' : null}
            size='2x'
        />
    );
};

class ToggleButton extends Component {
    state = { switchToggle: false };

    handleClick = (event) => {
        event.preventDefault();
        this.setState({ switchToggle: !this.state.switchToggle });
    };
    render() {
        return (
            <Toggle
                switchToggle={this.state.switchToggle}
                onClick={this.handleClick}
            />
        );
    }
}

export default ToggleButton;
