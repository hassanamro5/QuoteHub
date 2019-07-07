import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalExample from '../../components/ModalExample';
import { Heading, Logo, Button } from 'chramework';
import { actions } from '../../ducks/modal.js';

import 'chramework/dist/main.css';
import './styles.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<br />
				<Heading level={2}>Heading</Heading>

				<div>
					<Button
						onClick={() => {
							this.props.openModal({
								modalType: ModalExample,
								modalProps: {
									title: 'Title',
									text: 'Text',
									subTitle: 'Subtitle',
									hasClose: false,
									buttons: [
										{
											text: 'Text',
											intent: 'success',
											onClick: () => {
												alert('Ок =)');
												this.props.closeModal();
											}
										},
										{
											text: 'Text',
											onClick: () => {
												alert('Nooo =(');
												this.props.closeModal();
											}
										}
									]
								}
							});
						}}
						text="Open Modal"
					/>

				</div>












			</div>
		);
	}
}
const mapDispatchToProps = dispatch => {
	return {
		openModal: modalParams => dispatch(actions.openModal(modalParams)),
		closeModal: () => dispatch(actions.closeModal())
	};
};
export default connect(null, mapDispatchToProps)(App);
