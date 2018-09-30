import React from 'react';

class Spotify extends React.Component {
    render() {
        return (
            <div className="spotify_modal">
                <div className="spotify_wrapper">
                    <div className="close_form">
                        <span onClick={this.props.hideSpotify}>[🗙]</span>
                    </div>
                    <h3>search Spotify</h3>
                    <input type="text" />
                </div>
            </div>
        );
    }
}

export default Spotify;
