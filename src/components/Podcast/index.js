import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const imgCss = css`width: 100%`;

const Podcast = (props) => (
    <div className="col-md-4 d-flex pb-3">
        <div className="card">
            <div className="card-body">
                <img className={imgCss} src={props.thumbnail} />
                <h4>{props.title}</h4>
                <a href="#" class="btn btn-primary">Listen</a>
            </div>
        </div>
    </div>
)

Podcast.propTypes = {
    podcast: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired
    })
}

export default Podcast;