import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(4),
    paddingTop: theme.spacing(10),
    backgroundColor: "black",
  },
  root: {
    flexGrow: 1,
  },
}));