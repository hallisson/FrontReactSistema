import React from "react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './style';
import { Input } from '@material-ui/core';
import api from "../../services/api";


export default function Home() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        field: 'severity',
        order: 'desc',
        title: '',
      });

    const [itens, setItens] = React.useState([]);
    

    //Update state
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
    };

    //Get Itens vunelability
    const getInfo = async (event) => {
        const response = await api.get("/task/",  {
          params: {
            title: state.title,
            order: state.order,
            field: state.field
          }
        });
        setItens(response.data)
    };

    //Send File to Upload
    const sendFile = async (event) => {
        let formData = new FormData();
        formData.append('file', event.target.files[0]);
        const response = await api.post("/task/arquivo/", formData);
    };

    //finish item
    const finishItem = value => async (event) =>{
      const response = await api.post("/task/finish/", {  identifier : value });
    }


    return (
        <div>
            <Box p={2} className={classes.root}>
            <form noValidate autoComplete="off">

                {/* DATA CLIENT */}
                <Paper elevation={0} className={classes.filter} >
                    <Grid container>
                        <Grid item className={classes.filterItem} md={12} sm={12} xs={12}>
                            <TextField label="Título" variant="outlined" name='title' size="small" className={classes.formControl}  onChange={handleChange}/>
                        </Grid>
                        <Grid item className={classes.filterItem} lg={3} md={4} sm={6} xs={12}>
                            <InputLabel htmlFor="age-native-simple">Selecionar por:</InputLabel>
                            <Select
                              native
                              value={state.field}
                              name='field'
                              onChange={handleChange}
                              size="small"
                              className={classes.formControl}
                            >
                              <option value={'publication_date'}>Prioridade</option>
                              <option value={'severity'}>Data</option>
                            </Select>
                        </Grid>
                        <Grid item className={classes.filterItem} lg={3} md={4} sm={6} xs={12}>
                            <InputLabel htmlFor="age-native-simple">Exibir por:</InputLabel>
                            <Select
                              native
                              value={state.order}
                              name='order'
                              onChange={handleChange}
                              size="small"
                              className={classes.formControl}
                            >
                              <option value={'desc'}>Decrescente</option>
                              <option value={'asc'}>Crescente</option>
                            </Select>
                        </Grid>
                        <Grid item className={classes.filterItem} lg={3} md={4} sm={6} xs={12}>
                            <Button variant="contained" color="primary" onClick={getInfo}>
                                Pesquisar
                            </Button>
                        </Grid>


                    </Grid>
                </Paper>

                <Paper elevation={0} className={classes.table} >
                    <Box p={2} display="flex" alignContent="space-between">
                        <div className={classes.grow}/>
                        <Input
                          type="file"
                          name="file"
                          label='Upload CSV'
                          placeholder='Upload File'
                          onChange={sendFile}
                        />
                    </Box>
                    {/* TABLE */}
                    <div style={{ display: 'flex', width: '100%', overflowX:'scroll' }} className={classes.dataTable}>
                        <TableContainer >
                            <Table className={classes.table} stickyHeader  aria-label="a dense table">
                              <TableHead className={classes.TableHead} classes={{ stickyHeader: classes.text  , root: classes.textTableCustom}}>
                                <TableRow >
                                  <TableCell align="center" >Vunerabilidade</TableCell>
                                  <TableCell align="center">Data</TableCell>
                                  <TableCell align="center">Prioridade</TableCell>
                                  <TableCell align="center">Host</TableCell>
                                  <TableCell align="center">IP</TableCell>
                                  <TableCell align="center"></TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {itens.map((row) => (
                                  <TableRow  key={row.id}  className={classes.TableRow} >
                                    <TableCell className={classes.textTableCustom} >{row.title}</TableCell>
                                    <TableCell className={classes.textTableCustom}>{row.publication_date}</TableCell>
                                    <TableCell className={classes.textTableCustom}>{row.severity}</TableCell>
                                    <TableCell className={classes.textTableCustom}>{row.hostname}</TableCell>
                                    <TableCell className={classes.textTableCustom}>{row.ip_address}</TableCell>
                                    <TableCell className={classes.textTableCustom}>
                                      <Button value={row.id} variant="contained" color="secondary" onClick={finishItem(row.id)} >
                                          Finalizar
                                      </Button>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Paper>
            </form>
            </Box>
        </div>
    );
}
