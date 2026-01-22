import "./Infobox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function Infobox({info}){
    const IMG_URL = "https://images.unsplash.com/photo-1764366795867-a0e7fcbf791e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    return(
        <div>
            <div className='infoCard'>
                <Card sx={{ width: 540 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="160"
                        image={info.temperature > 15 ? HOT_URL : COLD_URL}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}, {info.country} {info.temperature > 15 ? <SunnyIcon/> : <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
                            <p>Temparature: {info.temperature} &deg;C</p>
                            <p>Daily Avg Temparature : {info.dailyAvgTemp} &deg;C</p>
                            <p>Wind Speed : {info.windSpeed} Km/h</p>
                            <p>Wind Direction : {info.windDirection} &deg;</p>
                            <p>Today the weather is <i>{info.weather}</i></p>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}