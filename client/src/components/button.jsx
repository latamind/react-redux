import React, { Component, PropTypes } from 'react';

/**
 * Generates a button.
 * @see {http://wiki.scribus.net/canvas/Making_a_Pie_Chart}
 */
export default class Button extends Component {
    /**
     * @return {Object}
     * It retuns button element
     */
	render() {
		return (
			<button onClick={this.props.clickHandler} style={{ background: this.props.color, color: '#fff', float: this.props.align }} data-id={this.props.dataValue}>{this.props.title}</button>
		);
	}
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	dataValue: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired,
	clickHandler: PropTypes.func.isRequired,
	align: PropTypes.string.isRequired
};
