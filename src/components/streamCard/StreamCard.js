import React from 'react';
import './StreamCard.scss';

const StreamCard = (props) => (
	<div className="card shadow-lg">
		<div className="stream-media">
			<img className="card-img-top img-fluid" src={props.assetImage} alt={props.name} />
		</div>
		<div className="card-title pt-3">
			<p className="title float-left w-75">{props.name}</p>
			<p className="views float-right">
				<span className="fa fa-eye" />
				<span className="pl-2 view-number">{props.skygoTotalViews}</span>
			</p>
		</div>
		<div className="card-overlay">
			<p className="provider">
				<strong>Provider</strong> : <span>{props.provider}</span>
			</p>
			<p className="desc">{props.description}</p>
		</div>
	</div>
);

export default StreamCard;
