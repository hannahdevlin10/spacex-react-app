import React, { useContext } from 'react'
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { MissionsContext } from '../../../context/MissionsContext';
import './style.css'

export const RocketDetail = () => {
    const { selectedMission } = useContext(MissionsContext);

    const getLandStatusIcon = (status) => {
        if (status === true) {
            return <CheckCircleIcon style={{ color: 'lime' }} />
        } else {
            return <CancelIcon style={{ color: 'red' }} />
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <div className="view-mission-subheader">Mission Rocket</div>
            <div className="main-container">
                <TableContainer component={Paper} className="table-container">
                    <Table aria-label="rocket-table" className="table-content">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <strong>Rocket Name</strong>
                                </TableCell>
                                <TableCell>
                                    {selectedMission?.rocket?.rocket_name}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <strong>First Stage - Status</strong>
                                </TableCell>
                                <TableCell>
                                    {selectedMission?.rocket?.first_stage?.cores[0].core.status ? (
                                        selectedMission?.rocket?.first_stage?.cores[0].core.status
                                        ) : (
                                            <span>Data Unavailable</span>
                                        )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <strong>First Stage - Landing Successful</strong>
                                </TableCell>
                                <TableCell>
                                    {selectedMission?.rocket?.first_stage?.cores[0].land_success ? (
                                        getLandStatusIcon(selectedMission?.rocket?.first_stage?.cores[0].land_success)
                                        ) : (
                                            <span>Data Unavailable</span>
                                        )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <strong>Second Stage - Payload Mass</strong>
                                </TableCell>
                                <TableCell>
                                    {selectedMission?.rocket?.second_stage?.payloads[0]?.payload_mass_kg ? (
                                        selectedMission?.rocket?.second_stage?.payloads[0]?.payload_mass_kg + ' kg'
                                        ) : (
                                            <span>Data Unavailable</span>
                                        )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <strong>Second Stage - Payload Type</strong>
                                </TableCell>
                                <TableCell>
                                    {selectedMission?.rocket?.second_stage?.payloads[0]?.payload_type ? (
                                        selectedMission?.rocket?.second_stage?.payloads[0]?.payload_type
                                        ) : (
                                            <span>Data Unavailable</span>
                                        )}
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}