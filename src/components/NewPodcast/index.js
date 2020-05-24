import React from 'react';
import PropTypes from 'prop-types';

class NewPodcast extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            thumbnail: ''
        }

    }

    handleTitle = ({ target: { value } }) => {
        this.setState({
            title: value
        })
    }

    handleThumbnail = ({ target: { value } }) => {
        this.setState({
            thumbnail: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newPodcast = {
            title: this.state.title,
            thumbnail: this.state.thumbnail
        }

        this.setState({
            title: '',
            thumbnail: ''
        })

        this.props.onHandleNewPodcast(newPodcast);
    }

    render() {
        return (
            <div className="col-md-12 mb-2" style={this.props.visible ? { display: 'block' } : { display: 'none' }}>
                <div className="card">
                    <div className="card-body">
                        <form className="form-inline" onSubmit={this.handleSubmit}>
                            <input className="form-control" type="text" placeholder="Title" onChange={this.handleTitle} value={this.state.title} />
                            <input className="form-control" type="text" placeholder="URL Thumbnail" onChange={this.handleThumbnail} value={this.state.thumbnail} />
                            <button className="btn btn-primary" type="submit">Tambah Podcast</button>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

NewPodcast.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    visible: PropTypes.bool
}

NewPodcast.defaultProps = {
    visible: false
}

export default NewPodcast;