import React, {Component, useState} from "react";
import api from "../api";
import {DataGrid} from '@material-ui/data-grid';

class AppRestCallAPI extends Component {

    state = {
        links: [],
    }

    async componentDidMount() {
        const response = await api.get('')
        console.log(response.data);

        this.setState({links: response.data})
    }

    render() {
        const {links} = this.state;
        return (
            <div className={"style"} style={{height: 400, display: 'flex'}}>
                <DataGrid columnBuffer={5} rows={links} pageSize={6} columns={[
                    {field: 'id', headerName: 'ID', width: 70, resizable: true},
                    {field: 'urlConvertida', headerName: 'Url encurtada', width: 500},
                    {field: 'urlbase', headerName: 'Url original', width: 800},
                    {field: 'dataExpiracao', headerName: 'Data de Expiração', width: 500},
                    {field: 'urlValida', headerName: 'Url Habilitada?', width: 500}
                ]} className={"style"}/>
            </div>
        );
    };

}

export default AppRestCallAPI;