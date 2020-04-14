import React from 'react';
import s from './cards.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if(!confirmed){
        return <div>Loading...</div>
    }

    return (
        <div className={s.cards}>
            <Card className={s.card}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>
                        Confirmed
                    </Typography>
                    <Typography variant='h5' component='h2' gutterBottom>
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator={','} />
                    </Typography>
                    <Typography color='textSecondary'>
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                </CardContent>
            </Card>

            <Card className={s.card}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>
                        Recovered
                    </Typography>
                    <Typography variant='h5' component='h2' gutterBottom>
                        <CountUp start={0} end={recovered.value} duration={2.5} separator={','} />
                    </Typography>
                    <Typography color='textSecondary'>
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                </CardContent>
            </Card>

            <Card className={s.card}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>
                        Deaths
                    </Typography>
                    <Typography variant='h5' component='h2' gutterBottom>
                        <CountUp start={0} end={deaths.value} duration={2.5} separator={','} />
                    </Typography>
                    <Typography color='textSecondary'>
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Cards;