import React from 'react';
import { Link } from 'react-router-dom';

const Track = (props) => {
    const {track} = props;
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5 className="title">{track.artist_name}</h5>
                    <p className="card-text subtitle">
                        <strong>
                            <i className="fas fa-volume-down"></i>
                            Track
                        </strong>: {track.track_name}
                        <br/>
                        <strong>
                            <i className="fas fa-compact-disc"></i>
                            Album
                        </strong>: {track.album_name}
                    </p>
                    <Link to={`lyrics/track/${track.track_id}`} className="btn btn-block btn-color">
                    <i className="fas fa-eye"></i> View Lyrics
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Track;
