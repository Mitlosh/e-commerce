import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    marginTop: '5em'
  },
  content: {
    flexGrow: 1,
    width: '90%',
    margin: '0 auto'
    // backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));

export default useStyles