import React from 'react';
import s from './cards.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import cn from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }, darkMode }) => {
    return (
        <div className={cn(s.cards, darkMode && s.darkCards)}>
            <Card className={cn(s.card, s.confirmed)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>
                        <p className={darkMode && s.darkTitle}>Confirmed</p>
                    </Typography>
                    <Typography variant='h5' component='h2' gutterBottom>
                        {!confirmed 
                            ? <div>...</div>
                            : <CountUp start={0} end={confirmed.value} duration={2.5} separator={','} />
                        }
                    </Typography>
                    <Typography color='textSecondary'>
                        <p className={darkMode && s.darkDate}>
                            {new Date(lastUpdate).toDateString()}
                        </p>
                    </Typography>
                </CardContent>
            </Card>

            <Card className={cn(s.card, s.recovered)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>
                        <p className={darkMode && s.darkTitle}>Recovered</p>
                    </Typography>
                    <Typography variant='h5' component='h2' gutterBottom>
                        {!recovered 
                            ? <div>...</div>
                            : <CountUp start={0} end={recovered.value} duration={2.5} separator={','} />
                        }
                    </Typography>
                    <Typography color='textSecondary'>
                        <p className={darkMode && s.darkDate}>
                            {new Date(lastUpdate).toDateString()}
                        </p>
                    </Typography>
                </CardContent>
            </Card>

            <Card className={cn(s.card, s.deaths)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>
                        <p className={darkMode && s.darkTitle}>Deaths</p>
                    </Typography>
                    <Typography variant='h5' component='h2' gutterBottom>
                        {!deaths 
                            ? <div>...</div>
                            : <CountUp start={0} end={deaths.value} duration={2.5} separator={','} />
                        }
                    </Typography>
                    <Typography color='textSecondary'>
                        <p className={darkMode && s.darkDate}>
                            {new Date(lastUpdate).toDateString()}
                        </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Cards;