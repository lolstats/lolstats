import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography
} from '@material-ui/core'
import { Consumer } from '../../../context'
import MatchInfo from './MatchInfo'

export default withStyles(theme => ({
    header: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    name: {
        textDecoration: 'none'
    }
}))(class extends Component {
    state = {
        showMatch: false
    }
    getElapsedTime = gameCreation => {
        let elapsedTime = Math.round((new Date() - gameCreation) / 1000)
        if (elapsedTime < 60) {
            return elapsedTime === 1
            ? `${elapsedTime} SECOND AGO` : `${elapsedTime} SECONDS AGO`
        } else if (elapsedTime < 3600) {
            elapsedTime = Math.round(elapsedTime / 60)
            return elapsedTime === 1
            ? `${elapsedTime} MINUTE AGO` : `${elapsedTime} MINUTES AGO`
        } else if (elapsedTime < 86400) {
            elapsedTime = Math.round(elapsedTime / 3600)
            return elapsedTime === 1
            ? `${elapsedTime} HOUR AGO` : `${elapsedTime} HOURS AGO`
        } else if (elapsedTime < 604800){
            elapsedTime = Math.round(elapsedTime / 86400)
            return elapsedTime === 1
            ? `${elapsedTime} DAY AGO` : `${elapsedTime} DAYS AGO`
        } else if (elapsedTime < 2628000){
            elapsedTime = Math.round(elapsedTime / 604800)
            return elapsedTime === 1
            ? `${elapsedTime} WEEK AGO` : `${elapsedTime} WEEKS AGO`
        } else if (elapsedTime < 31540000) {
            elapsedTime = Math.round(elapsedTime / 2628000)
            return elapsedTime === 1
            ? `${elapsedTime} MONTH AGO` : `${elapsedTime} MONTHS AGO`
        } else {
            elapsedTime = Math.round(elapsedTime / 31540000)
            return elapsedTime === 1
            ? `${elapsedTime} YEAR AGO` : `${elapsedTime} YEARS AGO`
        }
    }
    handleClick = e => {
        e.preventDefault()
        this.setState(prevState => ({ showMatch: !prevState.showMatch }))
    }
    render() {
        const {
            classes,
            getMatch,
            match: { champion, gameId, queue, timestamp },
            summoner: { accountId, name, profileIconId }
        } = this.props
        const { showMatch } = this.state
        return (
            <Consumer>
                {({ baseUrl, queues, state: { champions, version } }) => (
                    <Card>
                        <CardHeader
                            avatar={(
                                <Avatar
                                    src={`${baseUrl}/cdn/${version}/img/profileicon/${profileIconId}.png`}
                                    alt=""
                                />
                            )}
                            className={classes.header}
                            subheader={`${queues[queue]}`}
                            title={(
                                <Link className={classes.name} to={`/${name}`}>
                                    <Typography variant="headline">
                                        {name}
                                    </Typography>
                                </Link>
                            )}
                        />
                        <CardMedia
                            className={classes.media}
                            image={`${baseUrl}/cdn/img/champion/splash/${champions[champion].id}_0.jpg`}
                            onClick={this.handleClick}
                        />
                        {showMatch && (
                            <MatchInfo
                                accountId={accountId}
                                close={this.handleClick}
                                getMatch={getMatch}
                                matchId={gameId}
                                open={showMatch}
                            />
                        )}
                        <CardContent>
                            <Typography variant="caption">
                                {this.getElapsedTime(timestamp)}
                            </Typography>
                        </CardContent>
                    </Card>
                )}
            </Consumer>
        )
    }
})
