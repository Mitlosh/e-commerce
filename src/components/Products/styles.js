import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    marginTop: '4.75em',
  },
  content: {
    flexGrow: 1,
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',

    // backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));

export default useStyles