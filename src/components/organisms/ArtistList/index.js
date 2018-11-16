import React, {Component} from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'

import ArtistRow from '../../molecules/ArtistRow'

import './styles.css';

export default class ArtistList extends Component {
    static propTypes = {
        /** Spotify artists */
        artists: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
          ])
    }


    render() {
        const { artists } = this.props

        return <div className="ArtistList-container">
            { artists && artists.length > 0 ?
                artists.map((artist, i) => <ArtistRow
                    key={`artist-row-${i}`}
                    artist={artist} />)
                : 'No artist selected yet'
            }
        </div>
    }
}
