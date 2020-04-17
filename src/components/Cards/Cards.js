import React from 'react';
import s from './cards.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import cn from 'classnames';


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }, darkMode }) => {

    const styles = {
        title: {
            color: darkMode ? '#a5a5a5' : ''
        },
        date: {
            color: darkMode ? '#a5a5a5' : ''
        }
    }

    const CardBase = ({ title, type }) => (
        <CardContent>
            <Typography color='textSecondary' style={styles.title} gutterBottom>
                    {title}
            </Typography>
            <Typography variant='h5' component='h2' gutterBottom>
                {!type 
                    ? '...'
                    : <CountUp start={0} end={type.value} duration={2.5} separator={','} />
                }
            </Typography>
            <Typography color='textSecondary' style={styles.date}>
                    {new Date(lastUpdate).toDateString()}
            </Typography>
        </CardContent>
    )

    return (
        <div className={cn(s.cards, darkMode && s.darkCards)}>
            <Card className={cn(s.card, s.confirmed)}>
                <CardBase title='Confirmed' type={confirmed} />
            </Card>

            <Card className={cn(s.card, s.recovered)}>
                <CardBase title='Recovered' type={recovered} />
            </Card>

            <Card className={cn(s.card, s.deaths)}>
                 <CardBase title='Deaths' type={deaths} />
            </Card>
        </div>
    )
}

export default Cards;