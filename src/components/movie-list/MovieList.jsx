import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

import tmdbApi, { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import MovieCard from '../movie-card/MovieCard';

const MovieList = (props) => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		const getList = async () => {
			let respose = null;
			const params = {};

			if (props.type !== 'similar') {
				switch (props.category) {
					case category.movie:
						respose = await tmdbApi.getMoviesList(props.type, { params });
						break;
					default:
						respose = await tmdbApi.getTvList(props.type, { params });
				}
			} else {
				respose = await tmdbApi.similar(props.category, props.id);
			}
			setItems(respose.results);
		};
		getList();
	}, []);

	return (
		<div className='movie-list'>
			<Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
				{items.map((item, i) => (
					<SwiperSlide key={i}>
						<MovieCard item={item} category={props.category} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

MovieList.propTypes = {
	category: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

export default MovieList;
