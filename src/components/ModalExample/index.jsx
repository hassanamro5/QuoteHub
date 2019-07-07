import React, { Component } from 'react';
import { Heading, Button } from 'chramework';

import 'chramework/dist/main.css';
import './styles.css';

class ModalExample extends Component {
	render() {
		const { title, text, subTitle, buttons, exit } = this.props.modalProps;
		return (
			<div className="ModalExample">
				{exit && (

					<div className="ModalExample__exit">
					{exit.map((exitProps, i) => {
						return <Button {...exitProps} key={`ModalButton${i}`} />;
					})}
					</div>

				)}

				{(title || subTitle) && (
					<div className="ModalExample__header">
						{title && (
							<Heading className="ModalExample__titel" level={3}>
								{title}
							</Heading>
						)}
						{subTitle && (
							<Heading className="ModalExample__subTitle" level={4}>
								{subTitle}
							</Heading>
						)}
					</div>
				)}
				{text && (
					<div className="ModalExample__body">
						<div className="ModalExample__text">{text}</div>
					</div>
				)}
				{buttons && (
					<div className="ModalExample__buttons">
						{buttons.map((buttonProps, i) => {
							return <Button {...buttonProps} key={`ModalButton${i}`} />;
						})}
					</div>
				)}
			</div>
		);
	}
}

export default ModalExample;
