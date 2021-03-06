import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { technicalPoro } from '../../images/error'

export default withStyles(() => ({
    doge: {
        height: 300,
        width: 'auto'
    },
    error: {
        textAlign: 'center'
    },
    errorText: {
        color: '#0080ff',
        fontWeight: 400,
        letterSpacing: .5
    },
    failure: {
        letterSpacing: .3,
        transform: 'scaleY(1.2)',
        marginTop: 20
    },
    notFound: {
        margin: '10px auto'
    }
}))(({ classes, error }) => (
    <div className={classes.error}>
        <Typography variant="display4" className={classes.failure}>
            ERROR
        </Typography>
        {'status_code' in error && (
            <Typography variant="subheading" className={classes.errorText}>
                STATUS CODE: {error.status_code}
            </Typography>
        )}
        {'message' in error && (
            <Typography variant="subheading" className={classes.errorText}>
                MESSAGE: {error.message}
            </Typography>
        )}
        <img src={technicalPoro} className={classes.doge} alt="" />
    </div>
))
