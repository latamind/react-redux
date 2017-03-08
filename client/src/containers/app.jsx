import React from 'react';
import { connect } from 'react-redux';
import { color, ACTION_TYPE, INITIAL_STATE } from '../constants';
import PieChart from '../components/pie-chart';
import Button from '../components/button';
import '../../styles/index.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: INITIAL_STATE };
	}

	render() {
		return (
			<div className="container">
				<div className="chart">
					<PieChart slices={this.props.data} />
				</div>
				<div className="bottom">
					<div className="container">
						<Button title="+" dataValue={0} color={color.orange} align="left" clickHandler={this.props.onClick} />
						<Button title="+" dataValue={1} color={color.blue} align="center" clickHandler={this.props.onClick} />
						<Button title="+" dataValue={2} color={color.red} align="right" clickHandler={this.props.onClick} />
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { data: state.data };
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (e) => {
			const action = { type: ACTION_TYPE.INCREMENT, id: e.target.attributes.getNamedItem('data-id').value };
			dispatch(action);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
