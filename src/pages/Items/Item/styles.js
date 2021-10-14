import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    
    background: "rgb(0,0,0,0.6)",
    color: "white",
    fontFamily: "Nunito",
    border: "1px solid #c0c0c0",
    boxShadow: "0 2px 5px 0 rgb(255, 255, 204, 0.40)",
    borderRadius: "20px",
  },
  media: {
    paddingTop: '56.25%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    color: "white",
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: "Nunito"
  },
  buttonStyle: {
    color: "white",
  },
}));